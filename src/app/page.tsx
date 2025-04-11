import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import StudiesSection from '@/components/home/StudiesSection';
import ClientsSection from '@/components/home/ClientsSection';
import OurTeam from '@/components/home/OurTeam';
import SliderTestimonial from '@/components/home/SliderTestimonials';
import  Location  from '@/components/home/Location';
import Slider from '@/components/home/Slider';

export default function Home() {
  return (
    <div className="home-page">
      {/* <HeroSlider/> */}
      <Slider/>
      <AboutSection />
      <SpecialtiesSection />
      <StudiesSection />
      <OurTeam/>
      <SliderTestimonial/>
      <ClientsSection />
      <Location/>
    </div>
  );
}
