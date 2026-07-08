import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between p-5 text-left font-medium text-slate-800 transition-colors hover:text-orange-500 focus:outline-none"
            >
              <span className="text-sm md:text-base font-semibold leading-snug">{item.question}</span>
              <span
                className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-orange-50 text-orange-500' : ''
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="border-t border-slate-100/60 bg-[#FDFCF8]/40 px-5 py-4 text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
