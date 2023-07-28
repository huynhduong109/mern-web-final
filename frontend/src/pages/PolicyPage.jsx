import React from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Policy from '../components/Policy/Policy';
import styles from "../styles/styles";

const PolicyPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Policy />
      <Footer />
    </div>
  );
};

export default PolicyPage;