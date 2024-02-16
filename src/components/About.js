
import '../css/About.css';
import '../css/animate.css'
import { FaArrowRight } from 'react-icons/fa6';
import mayank from '../image/Mayank.png'
import box from '../svg/box.svg'
import flag from '../svg/flag.svg'
import aswmg from '../svg/awsmg.svg'
import skull from '../svg/skull.svg'
import React, { useEffect, useRef  } from 'react';
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const  About = forwardRef((props, ref)=> {
  
  const flagRef = useRef(null);
  const skullRef = useRef(null);
  const boxRef = useRef(null);
  const profileRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      
      const flag = flagRef.current;
      const flagTriggerPoint = 800;

      if (window.scrollY > flagTriggerPoint) {
        flag.classList.add('animate-upward');
      } else {
        flag.classList.remove('animate-upward');
      }
      const profile = profileRef.current;
      const profileTriggerPoint = 700;

      if (window.scrollY > profileTriggerPoint) {
        profile.classList.add('animate-upward-2');
      } else {
        profile.classList.remove('animate-upward-2');
      }
    
      const skull = skullRef.current;
      const skullTriggerPoint = 800; 
      if (window.scrollY > skullTriggerPoint) {
        skull.classList.add('animate-upward');
      } else {
        skull.classList.remove('animate-upward');
      }
      const box = boxRef.current;
      const boxTriggerPoint = 400; 
      if (window.scrollY > boxTriggerPoint) {
        box.classList.add('animate-upward');
      } else {
        box.classList.remove('animate-upward');
      }


  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='About-body' ref={ref}>
    <div className='About'>
        <div className='about-left'>
            <div className='about-left-up'>ABOUT US :</div>
            <div className='about-left-down'>
            <div className='about-left-down-left'>We help ETHICAL
             HACKERS to learn
            about CYBERSECURITY.  </div>
            <div className='about-left-down-right' ref={boxRef} > <img src={box} alt={'box'}/></div>

            </div>
        </div>
        <div className='about-right'>
        <div className='about-right-left'></div>
        <div className='about-right-right'>
            <div className='about-right-up'><p>Hey you! CYPH3R was established in 2019 by KUNAL. We wanted to create a community to help society and aware them about cybersecurity. And throughout the years we realized that actually, we're quite good at this stuff. But our team best speaks for itself, so take a look at our projects below.</p></div>
            <div className='about-right-down'><Link to="/about">More about us <FaArrowRight/></Link></div>
        </div>
        </div>
            
        <div className='down-about' ref={profileRef} >
            <div className='about-image'>
            <img src={mayank} alt={'Profile'}/>
            </div>

   
    </div>
    <div className='aswmg'>
    <div className='skull' ref={skullRef}>
            <img src={skull} alt={' '}/>
            <div className='aswmgi'>
    <img src={aswmg}  alt={' '}/>
    </div> 
    </div>
    <div className="flag" ref={flagRef}>
    <img src={flag}  alt={' '}/>
    </div>
    
    </div>
    </div>
    </div>


  );
}
);
export default About;
