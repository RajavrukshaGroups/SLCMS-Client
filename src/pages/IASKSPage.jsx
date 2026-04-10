import Hero from "../components/IASKS/Hero";
import WhyStart from "../components/IASKS/WhyStart";
import CourseOverview from "../components/IASKS/CourseOverview";
import Difference from "../components/IASKS/Difference";
import Timeline from "../components/IASKS/Timeline";
import Trust from "../components/IASKS/Trust";
import Faculty from "../components/IASKS/Faculty";
import StudyMaterials from "../components/IASKS/StudyMaterials";
import Testimonials from "../components/IASKS/Testimonials";
import FAQ from "../components/IASKS/FAQ";
import FinalCTA from "../components/IASKS/FinalCTA";

const IASKSPage = () => {
  return (
    <div className="bg-light-bg text-dark-text selection:bg-gold/30 selection:text-dark-text">
      <Hero />
      <WhyStart />
      <CourseOverview />
      <Difference />
      <Timeline />
      <Trust />
      {/* <Faculty /> */}
      <StudyMaterials />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default IASKSPage;