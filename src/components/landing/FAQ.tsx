'use client'

import { useState } from 'react'
import Container from '../shared/Container'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: "How accurate are your predictions?",
    answer: "Our AI-powered system maintains over a 70% accuracy rate across all predictions and provides odds above 1.50. We achieve this through advanced machine learning algorithms that analyze vast amounts of historical data, statistics, head to head, team scoring indicators, and multiple variables for each event."
  },
  {
    question: "When do I get charged after the free trial?",
    answer: "Your free trial lasts for 7 days, and you won't be charged during this period. After the trial ends, you'll be automatically charged for your selected plan unless you cancel. You can cancel anytime during the trial period."
  },
  {
    question: "Can I change my subscription plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll get immediate access to additional features. If you downgrade, the changes will take effect at the start of your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), and most local payment methods. All payments are processed securely through our payment provider."
  },
  {
    question: "How do I receive the predictions?",
    answer: "Predictions are available directly on our platform and are sent via email notifications. You'll receive real-time updates for all important events and predictions as they become available."
  },
  {
    question: "What's included in the free trial?",
    answer: "The 7-day free trial includes full access to all features of your chosen plan. You'll get complete access to all predictions, statistics, and analysis tools with no restrictions."
  }
]

function FAQItem({ question, answer, isFirst = false }: { 
  question: string; 
  answer: string;
  isFirst?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(isFirst)

  return (
    <div className="border-b border-emerald-200">
      <button
        className="flex justify-between items-center w-full py-6 text-left hover:text-emerald-600 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-emerald-900">{question}</span>
        <ChevronDownIcon 
          className={`w-5 h-5 text-emerald-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-emerald-700">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section 
      id="faq" 
      className="py-24 bg-white scroll-mt-16"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-emerald-700 max-w-2xl mx-auto">
            Everything you need to know about our prediction service and subscription plans
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer}
              isFirst={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
} 