import React from 'react'
import Header from '../../Components/Header/Header';
import AboutHero from '../../Components/AboutHero/AboutHero';
import Technologies from '../../Components/Technologies/Technologies';
import Featuers from '../../Components/Featuers/Featuers';
import TeamMember from '../../Components/TeamMember/TeamMember';
import Faq from '../../Components/Faq/Faq';
import Footer from '../../Components/Footer/Footer';

function About() {
  return (
    <div>
      <Header />
      <AboutHero/>
      <Technologies/>
      <Featuers/>
      <TeamMember/>
      <Faq/>
      <Footer />
    </div>
  )
}

export default About;