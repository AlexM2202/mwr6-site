import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <div className="faq-question" onClick={toggleFAQ}>
        {question}
        <span className="arrow">{isOpen ? '▼' : '▶'}</span>
      </div>
      <div
        className="answer-wrapper"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div className="faq-answer" ref={contentRef}>
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'Is Zaythorr gay?',
      answer: 'It\'s a likely possibility.',
    },
    {
      question: 'Will Zaythorr get the actual FAQ by EOD on 7/16/25?',
      answer: 'Yea, thats not happening.',
    },
    {
      question: 'Is hAMPTR going to help with development?',
      answer: 'Homie doesn\'t even know how to code correctly.',
    },
  ];

  const [openStates, setOpenStates] = useState({});

  const toggle = (index) => {
    setOpenStates(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="faq-container">
      {faqs.map((item, i) => (
        <div className="faq-row" key={i}>
          <div className="faq-question" onClick={() => toggle(i)}>
            <span>{item.question}</span>
            <span className={`faq-icon ${openStates[i] ? 'open' : ''}`}>+</span>
          </div>
          {openStates[i] && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
