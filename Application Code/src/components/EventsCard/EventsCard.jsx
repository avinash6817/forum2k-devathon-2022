import React from 'react';
import { Link } from 'react-router-dom';
import "./eventsCard.css"

const EventsCard = ({img,link,title,about}) => {
  return (
      <div className="eventscard__container flex">
          <div className="eventscard__image">
            <img src={img} alt={title} />
          </div>
          <h4 className="eventscard__title">{title}</h4>
          <p className="events__about">
              {about}
          </p>
          <Link className='readmore__content__button' to={link}>Read More</Link>
      </div>
  );
};

export default EventsCard;

