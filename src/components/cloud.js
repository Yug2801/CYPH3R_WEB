import React , {useEffect,useRef} from 'react';
import '../css/cloud.css'; // Import your CSS for styling
import clou from '../svg/cloud.svg';
import { Link } from 'react-router-dom';
const CenteredCloudWithText = () => {
  const cloudRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      
      const cloud = cloudRef.current;
      const cloudTriggerPoint = 1800;

      if (window.scrollY > cloudTriggerPoint) {
        cloud.classList.add('animate-upward-4');
      } else {
        cloud.classList.remove('animate-upward-4');
      }
};

window.addEventListener('scroll', handleScroll);

return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []);
  return (
    <div className='centered-cloud-container' ref={cloudRef}>
      <svg className='centered-cloud-svg'>
        <Link to="/contactus">
        <image href={clou} width="100%" height="100%" />

        {/* Example text placed at the center of the SVG */}
          <text x="50%" y="50%" textAnchor="middle" dy="-1em" className='cloud-text1' fill='black'>
            GET SOME QUERY
          </text>
          <text x="50%" y="50%" textAnchor="middle" dy="1em" className='cloud-text2'>
            LET'S TALK
          </text>
          </Link>
      </svg>
    </div>
  );
};

export default CenteredCloudWithText;
