import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main' >
        <img className='w-full h-screen object-cover object-left scale-x-[-1]'  src='https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='googleimg'/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'/>
        <div>
            <h1> I'm Miguel Palma </h1>
            <h2>I'm a
            <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Developer',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Coder',
                2000,
               
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', paddingLeft: "5px" }}
            repeat={Infinity}
             />
            </h2>
            <div>
              <FaTwitter/>
              <FaFacebook/>
              <FaInstagram/>
            </div>
        </div>
    </div>
  )
}

export default Main