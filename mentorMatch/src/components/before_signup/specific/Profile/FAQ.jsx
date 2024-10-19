import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How can I update my profile information?",
      answer: "You can update your profile information using the form above.",
    },
    {
      question: "What if I encounter an issue?",
      answer: "Please contact our support team using the contact section below.",
    },
    // Add more FAQs as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="bg-white p-6 rounded shadow-md">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
