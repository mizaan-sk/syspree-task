import AboutSection from '@/components/AboutSection'
import AchievementsSection from '@/components/AchievementsSection'
import CapabilitiesSection from '@/components/CapabilitiesSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import CoreFramework from '@/components/CoreFramework'
import CTASection from '@/components/CtaSection'
import IndustriesSection from '@/components/IndustriesSection'
import KnowledgeCenter from '@/components/KnowledgeCenter'
import LeadershipSection from '@/components/LeadershipSection'
import TrustedBrands from '@/components/Marquee'
import MediaSection from '@/components/MediaSection'
import Overview from '@/components/Overview'
import StoriesSection from '@/components/StoriesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import React from 'react'

const page = () => {
  return (
    <>
    <Overview/>
    <TrustedBrands/>
    <TestimonialSlider/>
    <AboutSection/>
    <CaseStudiesSection/>
    <CTASection/>
    <CapabilitiesSection/>
    <CoreFramework/>
    <IndustriesSection/>
    <MediaSection/>
    <StoriesSection/>
    <TeamSection/>
    <LeadershipSection/>
    <AchievementsSection/>
    <KnowledgeCenter/>
    </>
  )
}

export default page