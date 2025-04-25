import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About'; 
import Community from '../pages/Community';
import Forum from '../pages/Forum'; 
import Resources from '../pages/Resources'; 
import Contact from '../pages/Contact'; 
import Donate from '../pages/Donate';
import Alumni from '../pages/Alumni'; 
import ApplyAlumni from '../pages/ApplyAlumni';
import AlumniStories from '../pages/AlumniStories';
import News from '../pages/News';
import Students from '../pages/Students';
import CareerCenter from '../pages/CareerCenter';
import Partners from '../pages/Partners';
import Survey from '../pages/Survey';
import FindAlumni from '../pages/FindAlumni';
import Register from '../admin/Register';
import AlumniDetails from '../pages/AlumniDetails';
import EmploymentStats from '../pages/EmploymentStats';

const Router = () => (
  <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/community" element={<Community />} />
    <Route path="/forum" element={<Forum />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="/alumni" element={<Alumni />} />
    <Route path="/apply-alumni" element={<ApplyAlumni />} />
    <Route path="/alumni-stories" element={<AlumniStories />} />
    <Route path="/news" element={<News />} />
    <Route path="/students" element={<Students />} />
    <Route path="/alumni" element={<Alumni />} />
    <Route path="/career" element={<CareerCenter />} />
    <Route path="/partners" element={<Partners />} />
    <Route path="/survey" element={<Survey />} />
    <Route path="/find-alumni" element={<FindAlumni />} />
    <Route path="/register" element={<Register />} />
    <Route path="/alumni-details" element={<AlumniDetails />} />
    <Route path="/employment-stats" element={<EmploymentStats />} />
  </Routes>
);

export default Router;
