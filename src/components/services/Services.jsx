import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
     <h5>What I offer</h5>
     <h2>Services</h2>

     <div className="container services__container">
      <article className="service">
      <div className="service__head">
        <h3>UI/UX Design</h3>
      </div>
      <ul className="service__list">
        <li>
          <BiCheck  className="service__list-icons" size={200}/>
          <p> <b>Designing</b> complex interfaces for disruptive web applications as well as user experience (UX) services. I will help you crystalize a myriad of user flows in a product that has a convenient, user-friendly and intuitive UX and UI, following proven best practices in usability, compatibility, and accessibility.
          <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </p>

        </li> 
      </ul>
      </article>
      <article className="service">
      <div className="service__head">
        <h3>Web Development</h3>
      </div>
      <ul className="service__list">
        <li>
        <BiCheck  className="service__list-icons" size={200}/>
          <p> Develop services that help's to create all types of web-based software and ensure great experience for your web users. I professionally design, redesign and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates. <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </p>
        </li>
      </ul>
      </article>
      <article className="service">
      <div className="service__head">
        <h3>Content Creation</h3>
      </div>
      <ul className="service__list">
        <li>
        <BiCheck  className="service__list-icons" size={200}/>
          <p> If you are an artist that is looking to cross over into the crypto-world. Then you are in the right place, I can help you to automate your ART-Creation process, share it with people on different social media platforms or sell it on multiple NFT Market platforms.
            Offer you consultancy on which blockchain to deploy your art. 
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           </p>
        </li> 
      </ul>
      </article>
      <article className="service">
      <div className="service__head">
        <h3>Smart Contract Developer</h3>
      </div>
      <ul className="service__list">
        <li>
        <BiCheck  className="service__list-icons" size={200}/>
        <p>Develop smart contracts deployed on second layer like Polygon or first layer Ethereum. 
          I can link your art - can be: videos, gifs, png, and even music to the smart contract. 
          I can help you decide which approach suits you the best ON-CHAIN/OFF-CHAIN. 
          Or if you are into Solana then we can build a nice program together and you can link your art to the Solana program. 
          Document new solutions as well as maintaining that of existing ones.
          <br/>
          <br/>
          </p>
        </li> 
      </ul>
      </article>
      <article className="service">
      <div className="service__head">
        <h3>Database architect</h3>
      </div>
      <ul className="service__list">
        <li>
        <BiCheck  className="service__list-icons" size={200}/>
          <p> 
            Developing database solutions to store and retrieve company information. 
            Analyze structural requirements for new software and applications.
            Migrate data from legacy systems to new solutions.
            Design conceptual and logical data models and flowcharts.
            Optimize new and current database systems.
            Define security and backup procedures.
            Document new solutions as well as maintaining that of existing ones.
            <br/>
            <br/>
           </p>
        </li> 
      </ul>
      </article>
      <article className="service">
      <div className="service__head">
        <h3>Blockchain Developer</h3>
      </div>
      <ul className="service__list">
        <li>
        <BiCheck  className="service__list-icons" size={200}/>
          <p> 
          Research, design, develop, and test blockchain technologies.
          Brainstorm and help evaluate applications for new tools and technologies as they continually evolve.
          Maintain and extend current client- and server-side applications responsible for integration and business logic.
          Be involved in the global blockchain community—work on implementing and integrating the latest improvement proposals.
          Document new solutions as well as maintaining that of existing ones.
          </p>
        </li> 
      </ul>
      </article>
     </div>
    </section>
  )
}

export default Services