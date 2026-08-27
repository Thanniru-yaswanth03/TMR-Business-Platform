import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

interface FaqItem {
  question: string;
  answer: string;
}

export const RtoFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Is TMR an official government RTO office?',
      answer: 'No. TMR is an independent service provider that assists customers with licence and vehicle-related processes. Official approvals and document issuance are handled by the relevant government authorities.',
    },
    {
      question: 'Can TMR tell me what documents I need?',
      answer: 'Yes. Requirements can vary by service and applicant. Contact TMR for guidance on the current requirements for your specific case.',
    },
    {
      question: 'Do I need to visit an RTO office?',
      answer: 'This depends on the service and the current government process. TMR can explain the relevant process for your requirement.',
    },
    {
      question: 'How can I contact TMR?',
      answer: 'You can contact TMR directly by WhatsApp or phone call for immediate assistance with your query.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section spacing="lg" background="surface">
      <Container size="md" className="space-y-10">
        <Heading
          as="h2"
          size="h2"
          align="center"
          accentGold
          subtitle="Common questions regarding our independent transport documentation assistance."
        >
          Frequently Asked Questions
        </Heading>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-emerald-600 shrink-0" aria-hidden="true" />
                    <span className="font-heading font-bold text-sm sm:text-base text-brand-navy-950">
                      {faq.question}
                    </span>
                  </div>

                  <div className="text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-surface-muted border border-slate-200 text-center space-y-3">
          <p className="text-xs text-slate-600">
            Have a specific requirement not covered above? Reach out directly.
          </p>
          <WhatsAppCTA
            size="sm"
            variant="emerald"
            message="Hello TMR, I have a question regarding an RTO service."
          >
            Ask Your Question on WhatsApp
          </WhatsAppCTA>
        </div>
      </Container>
    </Section>
  );
};
