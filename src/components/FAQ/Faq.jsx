// FAQ.js
import React, { useState, useEffect } from 'react';
import './FAQ.css';
import questions from '../../data/questions.json';

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(questions);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = questions.filter((item) =>
      item.question.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container">
      <h2 className="heading">How can we help you?</h2>
      <Searchbar onSearchChange={handleSearchChange} value={searchTerm} />
      <section className="faq">
        {searchResults.map((item) => (
          <Question key={item.id} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
};

const Searchbar = ({ onSearchChange, value }) => (
  <form>
    <svg viewBox="0 0 512 512" width="100" title="search">
      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
    </svg>
    <input
      className="searchbar"
      type="text"
      placeholder="Describe your issue"
      onChange={onSearchChange}
      value={value}
    />
  </form>
);

const Question = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="question-wrapper">
      <div className="question">
        <h3>{question}</h3>
        <button onClick={handleClick}>
          {isActive ?  <FaChevronUp />: <FaChevronDown />} 
        </button>
      </div>
      <div className={isActive ? 'answer active' : 'answer'}><p>{answer}</p></div>
    </div>
  );
};

export default FAQ;
