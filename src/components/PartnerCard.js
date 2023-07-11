// import React from 'react';
// import '../styles/PartnerCard.css';

// const PartnerCard = ({ partner }) => {
//   return (
//     <div className="partner-card">
//       <a href={partner.link}>
//         <img src={partner.image} alt={partner.name} />
//       </a>
//     </div>
//   );
// };

// export default PartnerCard;

import React from 'react';
import '../styles/PartnerCard.css';

const PartnerCard = ({ partner }) => {
  return (
    <div className="partner-card">
      <a href={partner.link}>
        <img src={partner.image} alt={partner.name} />
      </a>
    </div>
  );
};

export default PartnerCard;
