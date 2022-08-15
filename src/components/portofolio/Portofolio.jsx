import React from 'react';
import './portofolio.css';
import BNM from '../../assets/images/582.png';
import Cosplay from '../../assets/images/234.png';
import RacerNFT from '../../assets/images/Malaysia.png';



const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={BNM} alt="Behind Neon Masks"/>
          </div>
          <h3>Behind Neon Masks</h3>
          <div className='portfolio__item-cta'>
            <a href="https://polygonscan.com/address/0xf62f94d8d52206bdf1d687e3cff0299471b75ca0" className="btn" target="_blank" rel="noreferrer">Contract Address</a>
            <a href="https://mintbnm.behindmaskssociety.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Minting Dapp</a>
          </div>
          </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RacerNFT} alt="RacerNFT"/>
          </div>
          <h3>{"Racer & The Fool NFT"}</h3>
          <div className='portfolio__item-cta'>
            <a href="https://polygonscan.com/address/0xdfe7ff7386e0c4321bd1fc7d5f47887c91c7455b" className="btn" target="_blank" rel="noreferrer">Contract Address</a>
            <a href="https://droplistbmws1000rrcouple.behindmaskssociety.com" className="btn btn-primary" target="_blank" rel="noreferrer">Minting Dapp</a>
          </div>
          </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Cosplay} alt="Cosplay Neon Masks"/>
          </div>
          <h3>Behind Cosplay Masks</h3>
          <div className="portfolio__item-cta">
            <a href="https://polygonscan.com/address/0xe0ad9d4503213e61475850ad74e13b3d7a856526" className="btn" target="_blank" rel="noreferrer">Contract Address</a>
            <a href="https://mintCNM.behindmaskssociety.com" className="btn btn-primary" target="_blank" rel="noreferrer">Minting Dapp</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portofolio
