import request from 'supertest';
import { createApp } from './app.js';
import { EnquiryService } from './services/enquiry.service.js';
import { AdminEnquiryService } from './services/adminEnquiry.service.js';
import { CreateEnquiryInput } from './types/enquiry.types.js';
import { EnquiryDocument } from './models/enquiry.model.js';
import { serverEnv } from './config/env.js';

// Mock DB persistence
const mockEnquiryList: EnquiryDocument[] = [
  {
    _id: '507f1f77bcf86cd799439011',
    name: 'Ramesh Varma',
    phone: '9876543210',
    type: 'REAL_ESTATE',
    transactionType: 'BUY',
    propertyType: 'Apartments / Flats',
    location: 'Gachibowli, Hyderabad',
    budget: '₹80 Lakhs - ₹1.2 Cr',
    message: 'Looking for 3BHK flat near Financial District',
    status: 'NEW',
    createdAt: new Date('2026-08-20T10:00:00Z'),
    updatedAt: new Date('2026-08-20T10:00:00Z'),
  } as unknown as EnquiryDocument,
  {
    _id: '507f1f77bcf86cd799439012',
    name: 'Suresh Kumar',
    phone: '9123456780',
    type: 'RTO',
    service: "Learner's Licence (LLR)",
    state: 'Telangana',
    message: 'Need slot booking assistance',
    status: 'CONTACTED',
    createdAt: new Date('2026-08-21T10:00:00Z'),
    updatedAt: new Date('2026-08-21T11:00:00Z'),
  } as unknown as EnquiryDocument,
];

async function runTests() {
  console.log('🧪 Starting Comprehensive TMR Backend & Admin Auth Hardening API Tests...\n');
  const app = createApp();
  let passedCount = 0;
  let totalCount = 0;

  // Mock public enquiry creation
  EnquiryService.createEnquiry = async (input: CreateEnquiryInput): Promise<EnquiryDocument> => {
    return {
      _id: '507f1f77bcf86cd799439099',
      name: input.name,
      phone: input.phone,
      type: input.type,
      service: input.service || null,
      state: input.state || null,
      location: input.location || null,
      propertyType: input.propertyType || null,
      transactionType: input.transactionType || null,
      budget: input.budget || null,
      message: input.message || null,
      status: 'NEW',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as unknown as EnquiryDocument;
  };

  // Mock admin enquiry service methods
  AdminEnquiryService.listEnquiries = async () => {
    return {
      data: mockEnquiryList,
      pagination: {
        total: mockEnquiryList.length,
        page: 1,
        limit: 20,
        totalPages: 1,
      },
      counts: {
        total: mockEnquiryList.length,
        new: 1,
        contacted: 1,
        closed: 0,
        realEstate: 1,
        rto: 1,
        general: 0,
      },
    };
  };

  AdminEnquiryService.getEnquiryById = async (id: string) => {
    const found = mockEnquiryList.find((e) => String(e._id) === id);
    return found ? (found as unknown as EnquiryDocument) : null;
  };

  AdminEnquiryService.updateEnquiryStatus = async (id: string, status) => {
    const found = mockEnquiryList.find((e) => String(e._id) === id);
    if (!found) return null;
    found.status = status;
    found.updatedAt = new Date();
    return found as unknown as EnquiryDocument;
  };

  const assert = (condition: boolean, testName: string, detail?: string) => {
    totalCount++;
    if (condition) {
      console.log(`✅ PASS: ${testName}`);
      passedCount++;
    } else {
      console.error(`❌ FAIL: ${testName}`);
      if (detail) console.error(`   Details: ${detail}`);
    }
  };

  // 1. Health Endpoint Test
  {
    const res = await request(app).get('/api/health');
    assert(res.status === 200 || res.status === 503, '1. Health check endpoint responds', `Got ${res.status}`);
  }

  // 2. Public Enquiry Submission (Unauthenticated)
  {
    const res = await request(app)
      .post('/api/enquiries')
      .send({
        name: 'Public Visitor',
        phone: '9876543210',
        type: 'REAL_ESTATE',
        transactionType: 'BUY',
        message: 'Looking for a flat',
      });
    assert(res.status === 201, '2. Public enquiry creation works without authentication (201)');
  }

  // 3. Unauthenticated Access to Protected Admin API Rejected
  {
    const res = await request(app).get('/api/admin/enquiries');
    assert(res.status === 401, '3. Unauthenticated GET /api/admin/enquiries is rejected (401)', `Got ${res.status}`);
    assert(res.body.success === false, '3b. Returns unauthenticated error response');
  }

  // 4. Invalid Admin Login Credentials Rejected
  {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'admin',
        password: 'wrong_password_123',
      });
    assert(res.status === 401, '4. Invalid admin login returns 401 generic error', `Got ${res.status}`);
    assert(res.body.error === 'Invalid credentials', '4b. Error message is generic and safe');
  }

  // 5. Successful Admin Login & Token Generation
  let authCookie = '';
  let authToken = '';
  {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: serverEnv.ADMIN_USERNAME,
        password: serverEnv.ADMIN_PASSWORD,
      });
    assert(res.status === 200, '5. Valid admin login succeeds (200)', `Got ${res.status}`);
    assert(res.body.data?.user?.username === serverEnv.ADMIN_USERNAME, '5b. Returns admin user info');
    assert(res.body.data?.user?.password === undefined, '5c. Never returns password or hash');

    // Extract cookie from Set-Cookie header
    const cookies = res.headers['set-cookie'] as unknown as string[] | undefined;
    if (cookies && cookies.length > 0) {
      authCookie = cookies[0].split(';')[0];
    }
    authToken = res.body.data?.token || '';
    assert(Boolean(authCookie || authToken), '5d. Returns authentication cookie/token');
  }

  // 6. Authenticated /api/auth/me check
  {
    const reqInstance = request(app).get('/api/auth/me');
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(res.status === 200, '6. Authenticated GET /api/auth/me returns admin state (200)', `Got ${res.status}`);
    assert(res.body.data?.user?.role === 'admin', '6b. Admin role verified');
  }

  // 7. Authenticated GET /api/admin/enquiries succeeds
  {
    const reqInstance = request(app).get('/api/admin/enquiries');
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(res.status === 200, '7. Authenticated GET /api/admin/enquiries returns lead data (200)', `Got ${res.status}`);
    assert(Array.isArray(res.body.data?.data), '7b. Returns list of enquiries');
    assert(Boolean(res.body.data?.counts), '7c. Returns summary metric counts');
  }

  // 8. Authenticated GET /api/admin/enquiries/:id
  {
    const reqInstance = request(app).get('/api/admin/enquiries/507f1f77bcf86cd799439011');
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(res.status === 200, '8. Authenticated GET /api/admin/enquiries/:id returns detail (200)', `Got ${res.status}`);
    assert(res.body.data?.name === 'Ramesh Varma', '8b. Detail contains correct customer record');
  }

  // 9. Status Update PATCH /api/admin/enquiries/:id/status
  {
    const reqInstance = request(app)
      .patch('/api/admin/enquiries/507f1f77bcf86cd799439011/status')
      .send({ status: 'CONTACTED' });
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(res.status === 200, '9. Updating enquiry status succeeds (200)', `Got ${res.status}`);
    assert(res.body.data?.status === 'CONTACTED', '9b. Updated status persisted');
  }

  // 10. Invalid Status Rejected
  {
    const reqInstance = request(app)
      .patch('/api/admin/enquiries/507f1f77bcf86cd799439011/status')
      .send({ status: 'INVALID_STATUS' });
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(res.status === 400, '10. Invalid status value rejected (400)', `Got ${res.status}`);
  }

  // 11. Non-existent Enquiry returns 404
  {
    const reqInstance = request(app).get('/api/admin/enquiries/507f1f77bcf86cd799439999');
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(res.status === 404, '11. Non-existent enquiry ID returns 404', `Got ${res.status}`);
  }

  // 12. CSRF Defense: Cross-site mutating request rejected with 403
  {
    const res = await request(app)
      .patch('/api/admin/enquiries/507f1f77bcf86cd799439011/status')
      .set('Sec-Fetch-Site', 'cross-site')
      .send({ status: 'CLOSED' });
    assert(res.status === 403, '12. Cross-site mutating request blocked by CSRF middleware (403)', `Got ${res.status}`);
  }

  // 13. Admin Logout Revokes Server-Side Session
  {
    const reqInstance = request(app).post('/api/auth/logout');
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(res.status === 200, '13. Admin logout succeeds (200)', `Got ${res.status}`);
  }

  // 14. CRITICAL REPLAY TEST: Attempting to reuse revoked session token returns 401
  {
    const reqInstance = request(app).get('/api/admin/enquiries');
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(
      res.status === 401,
      '14. CRITICAL: Attempting to reuse logged-out session/token returns 401 Unauthorized',
      `Got ${res.status}`
    );
    assert(res.body.success === false, '14b. Body indicates unauthenticated state');
  }

  // 15. Verify /api/auth/me also rejects revoked session
  {
    const reqInstance = request(app).get('/api/auth/me');
    if (authCookie) reqInstance.set('Cookie', authCookie);
    if (authToken) reqInstance.set('Authorization', `Bearer ${authToken}`);

    const res = await reqInstance;
    assert(res.status === 401, '15. Revoked session rejected by /api/auth/me (401)', `Got ${res.status}`);
  }

  console.log(`\n📊 Test Results: ${passedCount}/${totalCount} tests passed.\n`);
  if (passedCount !== totalCount) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
