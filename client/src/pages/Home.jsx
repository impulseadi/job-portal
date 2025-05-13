import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
const JobListing = lazy(() => import('../components/JobListing')); // lazy import
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <Suspense fallback={<div className="text-center py-10">Loading Jobs...</div>}>
        <JobListing />
      </Suspense>

      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
