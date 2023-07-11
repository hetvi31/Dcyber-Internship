// import React from 'react';
// import aboutImage from './assests/office.jpg';
// import '../styles/About.css' 

// const AboutUs = () => {
//   return (
//     <div className="about-us-container">
//          <h1>About Us</h1>
//       <div className="about-image-container">
//         <img src={aboutImage} alt="About Us" />
//       </div>
//       <div className="about-content">
//         {/* <h1>About Us</h1> */}
//         <p>
//         DCYBER is Start-up in the field of Digital Cyber Security.
//         DCYBER is introduce by the International Identity and Security Expert who is been working for Africa Government and US and India Multinational Financial institution, Mutual Fund in the domain of Infrastructure and Security. DCYBER primary focus is Cyber Consulting & Cyber Advisory role.
//         Security Assessment and Gap Analysis.VAPT of Network and Applications. Cyber Frame work and Policy build. Preparation for ISO,SOX and regulator audits.</p>
        
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


import React from 'react';
import aboutImage from './assests/office.jpg';
import '../styles/About.css' 

const AboutUs = () => {
  return (
    <div id='about'>
    <table className="about-us-table">
       
      <tr>
        <td className="about-image-cell">
          <img src={aboutImage} alt="About Us" />
        </td>
        <td className="about-text-cell">
             <h1>About Us</h1>
          <p>

DCYBER is Start-up in the field of Digital Cyber Security. DCYBER is introduce by the International Identity and Security Expert who is been working for Africa Government and US and India Multinational Financial institution, Mutual Fund in the domain of Infrastructure and Security. DCYBER primary focus is Cyber Consulting & Cyber Advisory role. Security Assessment and Gap Analysis. VAPT of Network and Applications. Cyber Frame work and Policy build. Preparation for ISO,SOX and regulator audits.</p>
        </td>
      </tr>
    </table>
    </div>
  );
};

export default AboutUs;
