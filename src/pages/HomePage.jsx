import Hero from '../components/home/Hero.jsx';
import Stats from '../components/home/Stats.jsx';
import AboutPreview from '../components/home/AboutPreview.jsx';
import ServicesGrid from '../components/home/ServicesGrid.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import ProjectGallery from '../components/home/ProjectGallery.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import ContactCTA from '../components/home/ContactCTA.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <ProjectGallery />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
