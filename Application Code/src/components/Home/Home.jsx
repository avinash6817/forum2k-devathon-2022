import React from 'react';
import Navbar from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import EventsCardList from '../EventsCardList/EventsCardList';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
      <>
       <Navbar/>
       <Homepage/>
       <EventsCardList/>
       <Footer/>
      </>
  );
};

export default Home;
