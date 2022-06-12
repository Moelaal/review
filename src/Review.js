import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, name, id, text, job } = people[index];
  const checkNum = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    } else {
      return num;
    }
  };
  const prevPerson = () => {
    setIndex((index) => {
      const newPerson = index + 1;
      return checkNum(newPerson);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newPerson = index - 1;
      return checkNum(newPerson);
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNum(randomNum));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        random
      </button>
    </article>
  );
};

export default Review;
