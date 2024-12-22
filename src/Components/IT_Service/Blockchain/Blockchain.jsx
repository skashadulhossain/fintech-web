import React from "react";
import "./Blockchain.css"; // CSS file for styling
import img5 from './img/icon-5.webp'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Blockchain = () => {
    const services = [
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-5.webp", // Replace with your image path
          title: "Blockchain Wallet Development",
          description:
            "We have expert blockchain developers that can secure your bitcoin and other cryptocurrencies to safeguard your digital assets and increase the level of your online wallets.",
        },
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-4.webp", // Replace with your image path
          title: "Multi Chain / Supply Chain",
          description:
            "Our blockchain developers have created several multi chain/supply chains to assure transparency in the supply chain through easy and traceable solutions.",
        },
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-6.webp", // Replace with your image path
          title: "Crowdsale",
          description:
            "We have a group of expert blockchain coders that can create the most ideal Crowdsale contracts for you to facilitate better management of your cryptocoins.",
        },
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-7.webp", // Replace with your image path
          title: "Ethereum",
          description:
            "Expand My Business has expertise in Ethereum technology and framework.",
        },
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-8.webp", // Replace with your image path
          title: "Smart Contract",
          description:
            "Our blockchain developers understand your needs and accordingly come up with smart contract management platforms and eWallet apps.",
        },
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-9.webp", // Replace with your image path
          title: "Coin Trading",
          description:
            "A coin trading platform is a platform for exchanging crypto currencies. To facilitate this, our platform has Polygon, Binance, coinGecko APIs among several others.",
        },
        {
            image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-10.webp", // Replace with your image path
            title: "NFT Marketplace",
            description:
              "Our NFT marketplace is very similar to innumerable existing online marketplace to ease out your trading and transactions through facilitate familiarity.",
          },
          {
            image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon11.webp", // Replace with your image path
            title: "ICO",
            description:
              "ICO draws several similarities with Indian Stock Markets and the existing IPO which allows business owners to generate capital for their business in the form of cryptocurrencies.",
          },
          {
            image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-12.webp", // Replace with your image path
            title: "Dedicated Blockchain Developer",
            description:
              "Our team includes 200+ expert developers who are skilled at working private and public blockchain projects with utmost efficiency and result-oriented approach.",
          },
          {
            image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-13.webp", // Replace with your image path
            title: "Tokenization",
            description:
              "Our vendors and developers support a number of tokens such as Security Tokens, Asset Tokens and Utility Tokens among others to allow transactions between several parties with ease.",
          },
          {
            image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-13.webp", // Replace with your image path
            title: "Public Blockchain",
            description:
              "Our developers create public blockchains where new participants can join the chain and have their own non-custodial wallets for exchange.",
          },
          {
            image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-14.webp", // Replace with your image path
            title: "Blockchain Banking Solution",
            description:
              "Hire our blockchain developers and get personalised banking solutions to suit your crypto and blockchain activities. This is done by integrating KYC and AML protocols.",
          },
          {
            image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-1.webp", // Replace with your image path
            title: "Blockchain Mining Software",
            description:
              "You can hire our blockchain experts to improve the security through mining designs and dashboards along with decentralised networks for mining pools.",
          },
          {
            image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-2.webp", // Replace with your image path
            title: "Coin Trading",
            description:
              "To manage the entire blockchain platform and the nodes, our blockchain developers centralise the private blockchains and follow it up with Shared Ledger, peer nodes, component assets, and more by implementing the Hyperledger fabric.",
          },

      ];

      
    
      const containerStyle = {
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#f1f1f1",
      };
    
      const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "20px 0",
        padding: "20px",
      };
    
      const cardStyle = {
        backgroundColor: "#fff",
        // border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
      };
    
      const iconContainerStyle = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#6d72f659",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px",
        // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      };
    
      const imageStyle = {
        width: "50%",
        height: "50%",
        objectFit: "contain",
      };
    
      const titleStyle = {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "10px",
        color:"#6d72f6",
      };
    
      const descriptionStyle = {
        fontSize: "14px",
        lineHeight: "1.6",
        color:"#73739a",
      };

      const plans = [
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-2.webp",
          title: "Ethereum MLM Software",
          description:
            "Ethereum blockchain is popular for building DApps (decentralized applications), and a multitude of smart-contract-based MLM projects are built on the Ethereum blockchain. We provide Ethereum smart contract MLM software backed by a plan as per your business needs. Whether you need Ethereum MLM script or custom Ethereum-based MLM software built from the ground up, we successfully serve your needs with our mission-driven services.",
        },
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon-1.webp",
          title: "TRON MLM Software",
          description:
            "TRON has gained significant traction for smart contract-based MLM software development, after Ethereum. It is due to its higher transaction speed and lower transaction fee. If you are planning to build a TRON decentralized MLM platform, we can provide you with a TRON-based MLM software script to accelerate the deployment, and at the same time, we can develop custom TRON smart contract MLM software for you from scratch.",
        },
        {
          image: "https://roundpay.in/website-assets-22/images/our-services/crypto/icon/icon11.webp",
          title: "Bitcoin MLM Software",
          description:
            "Bitcoin is redefining nearly every industry, and MLM is no exception. Businesses are leveraging Bitcoin blockchain to build their MLM platforms. At Antier, we provide business-oriented Bitcoin MLM software development solutions to help you launch your Bitcoin MLM business. Whether you need a Bitcoin matrix plan, unilevel plan, or any other Bitcoin MLM plan, we navigate your development journey with our customized solutions.",
        },
      ];

      
    
  return (
  <>

    <Header/>
    <main className="Blockchain">
      <div className="Blockchain-flex-box">
        <img src="https://roundpay.in/website-assets-22/images/our-services/crypto/bg-laptop.webp" alt="" />
        <div className="Blockchain-box">
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
           <h1 style={{ color: "#6d72f6" }}>Find India’s Top Blockchain
            Developers And Get Started With
            Your Project</h1>
            <p>
            RoundPay is the best blockchain development company to help you fulfill all your blockchain needs in no-time! Our experts have years of experience in delivering top-notch blockchain solutions to countless clients across the globe!
            </p>

            <p>
            Whether your project is big or small, easy or complex, urgent or with a lengthy timeline, our blockchain developers are skilled at providing smart solutions that fit your unique needs.
            </p>
            <p>
            So connect with us now to get the best in-class blockchain services at affordable rates with dedicated managers to take care of your entire project! Or book a free consultation session with us now!
            </p>
            <div className="button-group">
                    <button className="whatsapp">WhatsApp</button>
                    <button className="telegram">Telegram</button>
                    <button className="skype">Skype</button>
                </div>
            </div>
        </div>
      </div>

      <div style={containerStyle}>
      <h1 className="Blockchain-h1">Blockchain Services</h1>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div className="Blockchain-card" key={index} style={cardStyle}>
            <div style={iconContainerStyle}>
              <img src={service.image} alt={service.title} style={imageStyle} />
            </div>
            <div style={titleStyle}>{service.title}</div>
            <div style={descriptionStyle}>{service.description}</div>
          </div>
        ))}
      </div>
    </div>



    <div className="mlm-container">
      <h2 className="mlm-title">MLM Business Plan</h2>
      <p className="mlm-subtitle">Guiding your business to achieve online success.</p>
      <div className="mlm-grid">
        {plans.map((plan, index) => (
          <div key={index} className="mlm-card">
            <div className="mlm-icon-container">
              <img src={plan.image}  className="mlm-icon" />
            </div>
            <h3 className="mlm-plan-title">{plan.title}</h3>
            <p className="mlm-description">{plan.description}</p>
          </div>
        ))}
      </div>
    </div>


    </main>
    <Footer/>
  </>
  );
};

export default Blockchain;