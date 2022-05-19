import { AnimatePresence } from 'framer-motion';
import React from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import HomePage from './HomePage';
import Recipe from './Recipe';
import Searched from './Searched';

function Pages() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:search" element={<Searched />} />
        <Route path="/recipe/:recipe" element={<Recipe />} />
      </Routes>
    </AnimatePresence>  
  )
}

export default Pages;