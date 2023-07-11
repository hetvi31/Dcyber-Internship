import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import person from './assests/person.png';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../styles/team.css';

const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
  
  <div id='team' className='abc'>
  <h1>Our Team</h1>
  <Carousel responsive={responsive}>
  <div className='card'>
    <img src={person} alt='person'/>
    <h2>PARESH MAKWANA</h2>
    <p className='post'>Managing Partner</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>JP MAKWANA</h2>
    <p className='post'>CFO</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>POONAM CHACHA</h2>
    <p className='post'>Finance Controller</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>VRAJ PARMAR</h2>
    <p className='post'>Finance Training</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>SIDDHART PARMAR</h2>
    <p className='post'>Business Analyst</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>BENSY ABRAHAM</h2>
    <p className='post'>CMO</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>
  
  <div className='card'>
    <img src={person} alt='person'/>
    <h2>RAMMURTHI NADAR</h2>
    <p className='post'>Sr.System Administrator</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>DHRUV SAYAR</h2>
    <p className='post'>Sr.Engineer</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>DARSHAN RATHOD</h2>
    <p className='post'>Sr.Engineer</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>YASH CHAUHAN</h2>
    <p className='post'>Web Developer</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>

  <div className='card'>
    <img src={person} alt='person'/>
    <h2>AKASH KUNDU</h2>
    <p className='post'>Cyber Security Expert</p>
    <div className='social-icons'>
            <a href='#'>
              <FaTwitter size={24} />
            </a>
            <a href='#'>
              <FaFacebook size={24} />
            </a>
            <a href='#'>
              <FaLinkedin size={24}/>
            </a>
     </div>
  </div>
</Carousel>
</div>
  )
}

export default Team;