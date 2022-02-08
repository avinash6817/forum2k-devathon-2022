import React from 'react';
import EventsCard from '../EventsCard/EventsCard';
import "./eventscardlist.css"
import {EventData} from "../../EventData"

const EventsCardList = () => {
  return (
      <div className="eventscardlist__container">
          <div className="events__title flex">
              <h1>Events We Oragnised</h1>
          </div>
          <div className="events__cards grid">
            
            {EventData.map((item) =>{
                return(
                <EventsCard key={item.id} img={item.img} link={item.link} title={item.title} about={item.about} />

            )})}
          </div>
      </div>
  );
};

export default EventsCardList;

