import React from 'react';
import '../css/features.css';
import images from '../image/images.jpg';
import images1 from '../image/images1.jpg';
import untitled from '../image/Untitled.jpg';
import z from '../image/z.jpg';
import  { useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
const Features = () => {
  const blogRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      
      const blog = blogRef.current;
      const blogTriggerPoint = 1200;

      if (window.scrollY > blogTriggerPoint) {
        blog.classList.add('animate-upward-3');
      } else {
        blog.classList.remove('animate-upward-3');
      }
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="features" >
      <div className="container-blog">
        <div className="row1">
          <div>
            <div className="features-content"  ref={blogRef}>
              <div className="row" style={{ color: 'antiquewhite' }}>
               
                <div>
                  <div className="features-item ">
                  <Link to="/blog/cybersecurity-basic" >

                    <div className="icon">  <img src={images} className='bimage' alt="logo" /></div>
                    <h4>Cybersecurity Basic</h4>
                    <div className="line-dec"></div>
               
                    <p>
                    Cybersecurity is a popular topic, but do you know why it is essential? 
                    </p>
                    </Link>
                  </div>
                </div>
                <div >
                  <div className="features-item ">
                  <Link to="/blog/cyber_attack"  > 

                    <div className="icon"> <img src={images1} className='bimage' alt="logo" /></div>
                    <h4>Cyber Attack</h4>
                    <div className="line-dec"></div>
               
                    <p>
                    Life today has become far more comfortable because of various digital devices
                    </p>
                    </Link>
                  </div>
                </div>
                <div >
                  <div className="features-item ">
                  <Link to="/blog/ip_address" >
                    <div className="icon"> <img src={untitled} className='bimage' alt="logo" /></div>
                    <h4>IP Address</h4>
                    <div className="line-dec"></div>
              
                    <p>
                    With the advancement of technology, a drastic need for an IP address 
                    </p>
                    </Link>

                  </div>
                </div>
                <div >
                  <div className="features-item">
                  <Link to="/blog/cryptography" >

                    <div className="icon"> <img src={z} className='bimage' alt="logo" /></div>
                    <h4>Cryptography</h4>
                    <div className="line-dec"></div>
              
                    <p>
                    Cryptography is both art and science referred almost exclusively to encryption, 
                    </p>
             </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
