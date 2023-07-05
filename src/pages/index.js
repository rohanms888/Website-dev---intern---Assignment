import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Header from '../components/Header';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <ScrollLink to="sectionId" smooth={true} duration={500}>
        Scroll to Section
      </ScrollLink>
      <ContactForm />
    </div>
  );
};

export default IndexPage;
