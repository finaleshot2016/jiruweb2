import React from 'react';

import heroVid from '../assets/dogestyle.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div id="about" className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
<br /><br />
        <p className='text-xl mt-52 py-10 text-black'>
        Jirussic Park is a community-focused, decentralized memecoin on Binance Smart Chain with rewards in BUSD for holding $JP
        </p>
        <div>
          <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'><a href="https://pancakeswap.finance/swap?outputCurrency=0x7afbb79C338528841FaD4Fba93e45dcEaB7aa1dB">Buy</a></button>
          <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'><a href="https://poocoin.app/tokens/0x7afbb79c338528841fad4fba93e45dceab7aa1db">Chart</a></button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'></p>
      </div>
    </div>
  );
};

export default Hero;
