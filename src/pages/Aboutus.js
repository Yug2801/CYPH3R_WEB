import React from 'react';
import '../css/Aboutus.css';
import Header from '../components/header';
import Foote from '../components/footer';
import profile from '../image/profile.png'
import { Link } from "react-router-dom";
import ajaynehra from '../image/ajaynehra.png';
import gyan from '../image/gyan.png';
import kartik from '../image/Kartik.jpg';
import mayank from '../image/Mayank.png';
import manish from '../image/Manish.png';
import tushar from '../image/Tushar.jpg';
import siddhant from '../image/siddhant.jpeg';
import aman from '../image/aman.jpg';
import divyansh from '../image/divyansh.jpg';
import anivesh from '../image/Anivesh.png';
import cyph3r from '../image/cyph3r.png';
import cyph3r2 from '../image/cyph3r.jpg';
const AboutUsPage = () => {
  return (
    <div>
    <div><Header/></div>
    <div className='header1'></div>
      <section id="home">
        <div className="home-left">
          <img src={cyph3r} alt="" />
        </div>
        <div className="home-right">
          <h2 className="home-heading">Welcome to Cyph3r Club</h2>
          <p className="home-para"> Cyph3r Club is a passionate community dedicated to the fascinating world of cybersecurity and ethical hacking. We are a group of tech enthusiasts, ethical hackers, and security professionals committed to exploring and promoting cyber awareness.</p>
          <Link to="/blog"  className="btn">Discover Our blog</Link>
        </div>
      </section>

      <section id="workFlow">
        <h2 className="heading"> Empowering Your Cybersecurity Journey </h2>
        <p className="para">At Cyph3r Club, we focus on fostering knowledge, skills, and ethical practices in the field of cybersecurity. Our mission is to empower individuals to become ethical hackers, defenders of digital landscapes, and contributors to a safer online environment.
       </p>
        <div className="num-container">
          <div className="num-item"><span>Join Our Community</span></div>
          <div className="num-item"><span>Explore Ethical Hacking</span></div>
          <div className="num-item"><span>Collaborate on Projects</span></div>
        </div>
      </section>

      <section id="goal">
        <div className="goal-left">
          <h2>Our Mission and Goals</h2>
          <p>Cyph3r Club aims to create a dynamic platform where individuals can learn, collaborate, and contribute to the ever-evolving field of cybersecurity. Our goals include:
        </p>
          <ul>
          <li>Providing education and resources in ethical hacking and cybersecurity.</li>
            <li>Promoting ethical hacking practices and awareness among students and professionals.</li>
            <li>Creating a supportive community for knowledge exchange and collaboration.</li>
         </ul>
          <Link to="/contactus"  className="btn"> Contact Us</Link>
        </div>
        <div className="goal-right">
        <img src={cyph3r2} alt="" />
        </div>
      </section>
<section id="faculty">
<h2>Our Faculty Advisor</h2>
<div className="facultyContainer">
          <div className="team-item">
          <img src={ajaynehra} alt="" />
            <h5 className="member-name">Ajay Nehra</h5>
            <span className="role">Faculty Advisor</span>
          </div>
          <div className="team-item">
          <img src={gyan} alt="" />
            <h5 className="member-name">Gyan Singh Yadav</h5>
            <span className="role">Faculty Advisor</span>
          </div>
</div>
</section>
      <section id="our-Team">
        <h2>Our Member</h2>
        <div className="teamContainer">
          <div className="team-item">
          <img src={mayank} alt="" />
            <h5 className="member-name">Mayank Makkar</h5>
            <span className="role">Club Coordinator</span>
          </div>
          <div className="team-item">
          <img src={anivesh} alt="" />
            <h5 className="member-name">Anivesh Mohan</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={kartik} alt="" />
            <h5 className="member-name">Kartik Mehndiratta</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={manish} alt="" />
            <h5 className="member-name">Manish kumar tailor</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={tushar} alt="" />
            <h5 className="member-name">Tushar kumavat</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">Yug Modi</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">Member</span>
          </div>
          
        </div>
      
      </section>
      <section id="past-team">
<h2>Our Past Member</h2>
<div className="teamContainer">
          <div className="team-item">
          <img src={aman} alt="" />
            <h5 className="member-name">Aman Sharma</h5>
            <span className="role">Ex club Coordinator</span>
          </div>
          <div className="team-item">
          <img src={siddhant} alt="" />
            <h5 className="member-name">Siddhant</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={divyansh} alt="" />
            <h5 className="member-name">Divyansh garg</h5>
            <span className="role">Member</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>

          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
</div>
</section>
      <div><Foote/></div>
    </div>
  );
};

export default AboutUsPage;
