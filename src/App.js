import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';


function App() {
  return (
    <Layout>
      <Header />
      <MainSection />
      <Footer />
    </Layout>
  );
}

export default App;
