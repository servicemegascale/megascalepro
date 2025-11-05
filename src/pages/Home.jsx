import React from 'react'
import GlobeSection from "./GlobeSection"; 
import MeetTheTeam from "./MeetTheTeam"; 
import WhyChooseUs from "./WhyChooseUs"; 
import Blogs from "./Blogs"; 
import TestimonialSection from "./TestimonialSection"; 
import TechnologiesSection from "./TechnologiesSection"; 
import Projects from "./Projects"; 
import Faq from "./Faq"; 
// import SevenStepProcess from '../component/Infinity';
import SevenStepProcess from './SevenStepProcess';
 import HeroSection from "./HeroSection";
import FloatingBalloons from './FloatingBalloons';
// import SuccessStories from './SuccessStories.jsx';
export default function Home() {
  return (
    <> 
    <HeroSection />
      {/* <Card /> */}
      {/* <BookCart /> */}
      {/* <ProductSection/> */}
      {/* <Health/> */}
      {/* <SatvicVerticals /> */}
      {/* <SuccessStories /> */}
      {/* <OurTeam /> */}
      {/* <FAQ /> */}
      {/* <Blog /> */}
      {/* <SevenStepProcess /> */}

      
      <GlobeSection />
      <WhyChooseUs />
      {/* <MeetTheTeam /> */}
      <FloatingBalloons />
      <Projects/>
      <TechnologiesSection />
      <SevenStepProcess />
      <TestimonialSection />
      <Blogs />
      <Faq />
    </>
  )
}
