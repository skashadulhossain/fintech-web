import React from 'react';
import './TeamMember.css';
import cardimg1 from './Image/card img 1.jpg';
import cardimg2 from './Image/card img 2.jpg';
import cardimg3 from './Image/card img 3.jpg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const TeamMember = () => {
  const teamMembers = [
    {
      name: "James Milner",
      role: "VR Specialist",
      imgSrc: cardimg1,
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Sophia Williams",
      role: "AR Developer",
      imgSrc: cardimg2,
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Liam Johnson",
      role: "Game Designer",
      imgSrc: cardimg3,
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section className="TeamMember-section">
      <div className="TeamMember-container">
        <div className="TeamMember-title-container">
          <h1>Expert Team Members</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem 
            laborum vel quia voluptate aspernatur earum enim odit sunt ad a?</p>
        </div>
        <div className="TeamMember-card-container">
          {teamMembers.map((member, index) => (
            <div className="TeamMember-content-box" key={index}>
              <div className="TeamMember-img-box">
                <img src={member.imgSrc} alt={member.name} />
              </div>
              <div className="TeamMember-title-box">
                <h2>{member.name}</h2>
                <span>{member.role}</span>
              </div>
              <div className="TeamMember-icon-box">
                <a href={member.socialLinks.facebook}><FaFacebookF /></a>
                <a href={member.socialLinks.instagram}><FaInstagram /></a>
                <a href={member.socialLinks.twitter}><FaTwitter /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;