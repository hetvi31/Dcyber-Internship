// import React from 'react';
// import './assests/pt1.png';
// import './assests/pt2.png';
// import './assests/pt3.png';
// import './assests/pt4.png';
// import './assests/pt5.png';
// import './assests/pt6.png';
// import './assests/pt7.png';
// import './assests/pt8.png';
// import './assests/pt9.png';
// import './assests/pt10.png';
// import './assests/pt11.png';
// import './assests/pt12.png';
// import './assests/pt13.png';
// import './assests/pt14.png';
// import './assests/pt15.png';
// import './assests/pt16.jpg';
// import './assests/pt17.jpg';
// const Partners = () => {
//   const partners = [
//     { image: 'p1.jpg', link: 'https://aws.amazon.com/' },
//     { image: 'p2.jpg', link: 'https://arconnet.com/' },
//     { image: 'p3.jpg', link: 'https://tacsecurity.com/' },
//     { image: 'p4.jpg', link: 'http://www.copal.co/' },
//     { image: 'p5.jpg', link: 'https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-is-blackberry-cybersecurity' },
//     { image: 'p6.jpg', link: 'https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-is-blackberry-cybersecurity' },
//     { image: 'p7.jpg', link: 'https://www.zscaler.com/' },
//     { image: 'p8.jpg', link: 'https://www.silver-peak.com/' },
//     { image: 'p9.jpg', link: 'https://duo.com/' },
//     { image: 'p10.jpg', link: 'https://sequretek.com/' },
//     { image: 'p11.jpg', link: 'https://www.msp360.com/' },
//     { image: 'p12.jpg', link: 'https://www.dbnetworkssolutions.com/' },
//     { image: 'p13.jpg', link: 'https://www.dataresolve.com/' },
//     { image: 'p14.jpg', link: 'https://www.desksight.ai/' },
//     { image: 'p15.jpg', link: 'https://www.varonis.com/' },
//     { image: 'p16.jpg', link: 'https://octopus-app.com/' },
//     { image: 'p17.jpg', link: 'https://platform9.com/' },
    
//   ];

//   return (
//     <div className="partners-grid">
//       {partners.map((partner, index) => (
//         <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer">
//           <img src={partner.image} alt={`Partner ${index + 1}`} className="partner-image" />
//         </a>
//       ))}
//     </div>
//   );
// };

// export default Partners;

import React from 'react';
import p1 from './assests/pt1.png';
import p2 from './assests/pt2.png';
import p3 from './assests/pt3.png';
import p4 from './assests/pt4.png';
import p5 from './assests/pt5.png';
import p6 from './assests/pt6.png';
import p7 from './assests/pt7.png';
import p8 from './assests/pt8.png';
import p9 from './assests/pt9.png';
import p10 from './assests/pt10.png';
import p11 from './assests/pt11.png';
import p12 from './assests/pt12.png';
import p13 from './assests/pt13.png';
import p14 from './assests/pt14.png';
import p15 from './assests/pt15.png';
import p16 from './assests/pt16.jpg';
import p17 from './assests/pt17.jpg';

const Partners = () => {
  const partners = [
    { image: p1, link: 'https://aws.amazon.com/' },
    { image: p2, link: 'https://arconnet.com/' },
    { image: p3, link: 'https://tacsecurity.com/' },
    { image: p4, link: 'http://www.copal.co/' },
    { image: p5, link: 'https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-is-blackberry-cybersecurity' },
    { image: p6, link: 'https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-is-blackberry-cybersecurity' },
    { image: p7, link: 'https://www.zscaler.com/' },
    { image: p8, link: 'https://www.silver-peak.com/' },
    { image: p9, link: 'https://duo.com/' },
    { image: p10, link: 'https://sequretek.com/' },
    { image: p11, link: 'https://www.msp360.com/' },
    { image: p12, link: 'https://www.dbnetworkssolutions.com/' },
    { image: p13, link: 'https://www.dataresolve.com/' },
    { image: p14, link: 'https://www.desksight.ai/' },
    { image: p15, link: 'https://www.varonis.com/' },
    { image: p16, link: 'https://octopus-app.com/' },
    { image: p17, link: 'https://platform9.com/' },
  ];

//   return (
//     <div className="partners-grid">
//       {partners.map((partner, index) => (
//         <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer">
//           <img src={partner.image} alt={`Partner ${index + 1}`} className="partner-image" />
//         </a>
//       ))}
//     </div>
//   );
// };

const rows = Math.ceil(partners.length / 3);

return (
  <div className="partners-grid">
    {Array.from({ length: rows }, (_, rowIndex) => (
      <div className="row" key={rowIndex}>
        {partners.slice(rowIndex * 3, (rowIndex + 1) * 3).map((partner, index) => (
          <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer">
            <img src={partner.image} alt={`Partner ${index + 1}`} className="partner-image" />
          </a>
        ))}
      </div>
    ))}
  </div>
);
};



export default Partners;
