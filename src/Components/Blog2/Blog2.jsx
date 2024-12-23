import React from 'react';
import './Blog2.css';
import cardimg1 from './Image/Element 35.png';
import cardimg2 from './Image/Element 10.png';
import cardimg3 from './Image/Element 11.png';
import cardimg4 from './Image/Element 12.png';
import cardimg5 from './Image/Element 13.png';
import cardimg6 from './Image/Element 14.png';
import cardimg7 from './Image/Element 15.png';
import cardimg8 from './Image/Element 16.png';
import cardimg9 from './Image/Element 18.png';
import cardimg10 from './Image/Element 19.png';
import cardimg11 from './Image/Element 20.png';
import cardimg12 from './Image/Element 24.png';
import cardimg13 from './Image/Element 26.png';
import cardimg14 from './Image/Element 27.png';
import cardimg15 from './Image/Element 29.png';
import cardimg16 from './Image/Element 32.png';
import cardimg17 from './Image/Element 35.png';
import cardimg18 from './Image/Element 38.png';
import cardimg19 from './Image/Element 39.png';
import cardimg20 from './Image/Element 40.png';
import cardimg21 from './Image/Element 41.png';
import cardimg22 from './Image/Element 43.png';
import cardimg23 from './Image/Element 13.png';
import cardimg24 from './Image/Element 14.png';
import cardimg25 from './Image/Element 18.png';
import cardimg26 from './Image/Element 26.png';
import cardimg27 from './Image/Element 19.png';
import cardimg28 from './Image/Element 15.png';
import { LuIdCard } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';
// import bgimg1 from './Image/Blog bg 1.jpg';
// import bgimg2 from './Image/Blog bg 2.jpg';
// import bgimg3 from './Image/Blog bg 3.jpg';
// import bgimg4 from './Image/Blog bg 4.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Choosing Between Static and Dynamic Websites: Pros",
    description: "Success in business hinges on creating a lasting impression, and a website serves as the initial and enduring point of contact for the target audience. But, in the beginning,...",
    image: cardimg1
  },
  {
    id: 2,
    title: "From Hassle to Ease: The Rise of On-Demand Home Se",
    description: "Presently, the home service sector has experienced a great evolution in technology. Over the past few years, the home service sector has converted it...",
    image: cardimg1
  },
  {
    id: 3,
    title: "Master Technical SEO in 2024: 10 Proven Ways to Do",
    description: "Technical SEO is very essential method in the field of IT industry. In the beginning, SEO used to be an element of website development, but step by step ...",
    image: cardimg1
  },
  {
    id: 4,
    title: "2024 Mobile App Development Costs Revealed: What Y",
    description: "Nowadays, mobile applications are an essential solution for each business. Following the latest facts and figures, around 2.8 Million Mobile applications...",
    image: cardimg2
  },
  {
    id: 5,
    title: "The Future of Finance: Maximizing Growth Through F",
    description: "The Future of Finance: Maximizing Growth Through FinTech Software Development Outsourcing...",
    image: cardimg3
  },
  {
    id: 6,
    title: "From Chaos to Cohesion: Transform Your Business wi",
    description: "CRM represents Customer Relationship Management. CRMs are software systems that enable you to establish connections with your consumers, involving relatio...",
    image: cardimg4
  },
  {
    id: 7,
    title: "Mastering the Art: Step-by-Step Guide to Crafting",
    description: "In today's dynamic business world, effective management of customer relationships stands as a cornerstone for sustained growth and success. Leveraging the pow...",
    image: cardimg5
  },
  {
    id: 8,
    title: "Dominate the App Market: 15 Must-Have Tools for Mo",
    description: "In the fast-moving world of mobile app development, staying ahead means involving new technologies and tools. As we look forward to 2024, anticipating the...",
    image: cardimg6
  },
  {
    id: 9,
    title: "Revolutionize Your Revenue: Tap into AEPS to Laun",
    description: "India stands at the forefront of a digital revolution, fueled by the widespread adoption of smartphones, increasing digital literacy, and the government's ambitious...",
    image: cardimg7
  },
  {
    id: 10,
    title: "Unveiling the Future: 7 Cutting-Edge Software Deve",
    description: "Are you on the search for unparalleled software development services that guarantee top-notch quality? The secret lies in involving innovative software...",
    image: cardimg8
  },
  {
    id: 11,
    title: "Revolutionize Your Business: A Comprehensive Guide",
    description: "In the dynamic and fiercely competitive market world, the key to sustained success lies not just in keeping pace but in anticipating and adopting mobile...",
    image: cardimg9
  },
  {
    id: 12,
    title: "Unlocking Success: Why Monitoring Applications is",
    description: "In today's fast-changing digital world, being successful means being adaptable and efficient. Whether you're a business or an individual, staying ahead requir...",
    image: cardimg10
  },
  {
    id: 13,
    title: "Demystifying Java: A Beginner's Guide to the Progr",
    description: "Java is a versatile and widely-used object-oriented programming language designed for use in distributed environments on the internet. Its write once, run anywher...",
    image: cardimg11
  },
  {
    id: 14,
    title: "Unlocking the Power of Web Assembly: Shaping the F",
    description: "The demand for high-performance and efficient web applications is on the rise, and traditional web technologies like JavaScript have been the backbone of we...",
    image: cardimg12
  },
  {
    id: 15,
    title: "The Digital Revolution: Public Sector's Path to Su",
    description: "An increasing number of public sector organizations are turning to cloud technology to enhance their efficiency, resilience, and overall security measures....",
    image: cardimg13
  },
  {
    id: 16,
    title: "Innovative Ways to Save Big on App Development for",
    description: "In today's modern world, mobile app development presents a golden opportunity for businesses to boost profits and expand their horizons. Yet, it's no secret...",
    image: cardimg14
  },
  {
    id: 17,
    title: "The Link-Building Blueprint: Secrets to High-Autho",
    description: "There are now up to 15 different types of backlinks used in SEO, but they can be broadly categorized into two groups: low-quality and high-quality links. This is the...",
    image: cardimg15
  },
  {
    id: 18,
    title: "Unlocking the Secrets of SEO: Your Ultimate Guide",
    description: "Ever wondered how some websites magically appear at the top of your search results? That's where Search Engine Optimization (SEO) comes into play. It's like...",
    image: cardimg16
  },
  {
    id: 19,
    title: "10 Essential Digital Marketing Strategies That Can",
    description: "In today's fast-paced digital landscape, having a strong digital marketing strategy is crucial for success. With new technologies and platforms constantly...",
    image: cardimg17
  },
  {
    id: 20,
    title: "Unveiling the Ultimate Money Remittance Software:",
    description: "Hey there, money movers and shakers! Let's dive into the thrilling world of hassle-free money transfers that can make your financial life smoother than a silk tie. Buckle...",
    image: cardimg18
  },
  {
    id: 21,
    title: "Boosting Efficiency with B2B Recharge Software: A",
    description: "Are you interested in starting your own online recharge business as an admin and seeking the best opportunity? In this blog, We will provide you with a comprehensiv...",
    image: cardimg19
  },
  {
    id: 22,
    title: "Designing Your Digital Triumph: 7 Compelling Reaso",
    description: "Welcome to the fascinating world of web design! In this ever-changing digital landscape, having an online presence that rocks the cyber world has become a must...",
    image: cardimg20
  },
  {
    id: 23,
    title: "Unleash Your Earnings Potential: A Comprehensive G",
    description: "Welcome to our comprehensive guide on Pn Software Tech Pvt. Ltd, a leading multi-recharge company that can help you unleash your earnings potential. In this article, we will...",
    image: cardimg21
  },
  {
    id: 24,
    title: "7 Mistakes AEPS Admins Must Avoid to Ensure Succes",
    description: "As an AEPS (Aadhaar Enabled Payment System) administrator, it is crucial to navigate the landscape carefully and make informed decisions to ensure the success...",
    image: cardimg22
  },
  {
    id: 25,
    title: "Essential Factors to Remember for AEPS Cash Withdr",
    description: "In the world of digital transactions, AEPS (Aadhaar Enabled Payment System) has emerged as a convenient and secure way to withdraw cash. This revolutionary system...",
    image: cardimg23
  },
  {
    id: 26,
    title: "Pn Software Tech Pvt. Ltd: Free App for Money Transfer, Pan Card, a",
    description: "In today's digital age, the need for quick and seamless financial transactions has become more important than ever. With the advent of smartphones, mobile apps...",
    image: cardimg24
  },
  {
    id: 27,
    title: "The impact of Aadhaar-based payment on daily life:",
    description: "In this digital age, convenience, and security are of paramount importance when it comes to financial transactions. Aadhaar-based payment systems have emerged as a...",
    image: cardimg25
  },
  {
    id: 28,
    title: "FASTag Recharge: Convenient and Easy with Pn Software Tech Pvt. Ltd",
    description: "FASTag has revolutionized the way we pay toll charges on highways, offering a seamless and cashless experience. With the increasing adoption of FASTag, it has...",
    image: cardimg26
  },
  {
    id: 29,
    title: "Pn Software Tech Pvt. Ltd's Mobile Recharge API: Empowering All-in-",
    description: "In today's fast-paced world, where convenience and efficiency are paramount, Roundpay's Mobile Recharge API offers a comprehensive solution for all-in-one...",
    image: cardimg27
  },
  {
    id: 30,
    title: "How To Get The Show On The Road On Earning By Maki",
    description: "If you're looking to start earning by creating a B2B business app like Paytm, Roundpay is here to help. With Roundpay's services, you can develop your own...",
    image: cardimg28
  }
];

const Blog2 = () => {
  return (
    <section className="Blog2-section">
      <div className="Blog2-container">
        {/* <div className="Blog2-bg-content">
            <img src={bgimg1} alt="" />
            <img src={bgimg2} alt="" />
            <img src={bgimg3} alt="" />
            <img src={bgimg4} alt="" />
        </div> */}
        <div className="Blog2-title-box">
        </div>
        <div className="Blog2-card-container">
          {blogPosts.map((post) => (
            <div key={post.id} className="Blog2-card-content">
              <div className="Blog2-card-img-box">
                <img src={post.image} alt={`Blog post ${post.id}`} />
              </div>
              <div className="Blog2-card-date-box">
                <LuIdCard size={24} />
                <span>November 19, 2024</span>
              </div>
              <div className="Blog2-card-title-box">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="Blog2-card-btn-box">
                  <FaArrowRightLong className="Blog2-card-btn-icon-box" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog2;