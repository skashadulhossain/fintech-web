import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Featuers from '../../Components/Featuers/Featuers';
import TeamMember from '../../Components/TeamMember/TeamMember';
import Faq from '../../Components/Faq/Faq';

function About() {
  return (
    <div>
      <Header />

      <Featuers/>
      <TeamMember/>
      <Faq/>

      <Footer />
    </div>
  )
}

export default About;