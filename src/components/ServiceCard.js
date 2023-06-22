// import React from 'react';

// const ServiceCard = ({ service }) => {
//   return (
//     <div className="service-card">
//       <h3>{service.title}</h3>
//       <p>{service.description}</p>
//     </div>
//   );
// };

// export default ServiceCard;

import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
