
//import './Main.css';

import About from '../components/About';
import CenteredCloudWithText from '../components/cloud';
import Foote from '../components/footer';
import Front from '../components/front';
import Header from '../components/header';
import Horizontal from '../components/horizontal';



function Main() {
  const containerStyle = {
    overflow: 'hidden',
  };
  
  return (
    <div className="Main">
      <header className='Main-header'>
      <Header/>
      </header>
      <div className='Frontt' style={containerStyle} ><Front/></div>
      
      <div className='aboutt'><About/></div>
      <div className='Horizontall'><Horizontal/></div>
      <div className='cloudd'><CenteredCloudWithText/></div>
      <div className='footerr'><Foote/></div>



    </div>
  );
}

export default Main;