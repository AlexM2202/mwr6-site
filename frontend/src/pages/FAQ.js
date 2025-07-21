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
      question: 'What is MidwestR6?',
      answer: 'MidwestR6 is a collegiate Rainbow Six Siege league for students and schools to compete in based in the Midwest Region.',
    },
    {
      question: 'What states are Eligible?',
      answer: 'Iowa, Illinois, Indiana. Minnesota, North Dakota, South Dakota, Michigan, Missouri, Kansas, Kentucky, Ohio, Wisconsin, and Nebraska are all currently allowed states.',
    },
    {
      question: 'How do I register my team to join?',
      answer: 'Announcements will roll out with information on specific information required to join a few weeks before the season starts. If you need help or have questions, please join our discord and open a ticket!',
    },
    {
      question: 'How much is the Entry Fee?',
      answer: 'The entry fee is $50/Team for one semester and $90/Team for a whole year of gameplay.'
    },
    {
      question: 'How is the prize pool split?',
      answer: 'The prize pool is split among the Top 3 Winners of each divisional bracket.'
    },
    {
      question: 'How do I reach out if I have more questions?',
      answer: 'Join our discord server and open a ticket! Our match admins are more than willing to help answer any more questions.'
    }
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
