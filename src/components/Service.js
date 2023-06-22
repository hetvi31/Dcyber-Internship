import React from 'react';
import ServiceCard from './ServiceCard';
import img1 from './assests/datacenter.png';
import img2 from './assests/network.png';
import img3 from './assests/cloud.png';
import img4 from './assests/risk.png';
import img5 from './assests/cybersecurity.png';
import img6 from './assests/cyberexposure.png';
import img7 from './assests/fms.png';
import '../styles/ServiceCard.css';

const Service = () => {
  const services = [
    {
      title: 'DATA CENTER',
      description: 'Application Delivery Infrastructure, Hardware for SAP, AD, Email, Telecom, Enterprise Servers, Virtual Storage, Backup and Network appliances. Data Centre Design & Built (Building up of Tier 3 Data Centre) plus Data Centre Audit.',
      image: img1,
    },
    {
      title: 'NETWORK',
      description: 'NOC and SOC Management, Structured Network Cabling System, Audio Visual Systems, Board Room, Enclosures & Cool Racks, VoIP Solutions, IP Camera Surveillance, Intelligent Lighting & Controls, Firewall, Switch Router, IDS and IPS solution.',
      image: img2,
    },
    {
      title: 'CLOUD',
      description: 'Private Cloud: the business critical and non critical application. Moving Services from Standalone environment to Cloud, Web Based Cloud Computing, Managed Services like applications used by the cloud service providers, such as anti-spam service.',
      image: img3,
    },
    {
      title: 'IRM',
      description: 'Managed Security Services, Threat Intelligence: •Malware Code Analysis, Cloud Security, Security & Risk Consulting, Incident & Emergency Response: Incident Management Retention, Response plan review & Development, Incident Management Risk Assessment.',
      image: img4,
    },
    {
      title: 'CYBER SECURITY',
      description: 'Data Security covers Advanced Threat Protection. Identity & Access offers Two Factor Authentication and Privilege Identity Management. Advance Security covers Network Immune System, ICS Security, Enterprise Security, IOT Security, Cloud Security and much more.',
      image: img5,
    },
    {
      title: 'CYBER EXPOSURE ASSESSMENT',
      description: 'Our data shows that 80% of organizations´exposure comes from external sources such as supply chain, vendors, cloud service providers and social media. Exposure assessment helps you to understand your current cyber exposure and unidentified liabilities. It is a powerful tool for cyber insurance and assurance, internal audits, due diligence, risk management and improving your overall security posture.',
      image: img6,
    },
    {
      title: 'FACILITY MANAGEMENT SERVICES',
      description: 'Help Desk Management & Support like Call Management, Onsite Support & Residence Engineer Support, Remote Infrastructure Management, Project Management, Vendor Management, Application Support & License Management.',
      image: img7,
    },
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
