import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>
          Best IAS & KAS Coaching in Bangalore | UPSC Training – Sri Lakshmi
          College of Management & Science
        </title>

        <meta
          name="description"
          content="Join Sri Lakshmi College of Management & Science in Sunkadakatte, Bangalore for expert UPSC coaching. Get top IAS and KAS training in Bangalore with experienced faculty, structured preparation, and result-oriented guidance for success in civil services exams."
        />

        <meta
          name="keywords"
          content="IAS coaching in Bangalore, KAS coaching in Bangalore, UPSC coaching Bangalore, UPSC training Bangalore, IAS academy Bangalore, KAS academy Bangalore, civil services coaching Bangalore, Sri Lakshmi College"
        />

        <link
          rel="canonical"
          href="https://srilakshmimanagement.org/ias-kas-upsc-training-bangalore"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best IAS & KAS Coaching in Bangalore | UPSC Training – Sri Lakshmi College of Management & Science"
        />

        <meta
          property="og:description"
          content="Join Sri Lakshmi College of Management & Science for expert IAS, KAS & UPSC coaching in Bangalore."
        />

        <meta
          property="og:url"
          content="https://srilakshmimanagement.org/ias-kas-upsc-training-bangalore"
        />

        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Best IAS & KAS Coaching in Bangalore | UPSC Training"
        />

        <meta
          name="twitter:description"
          content="Expert IAS, KAS & UPSC coaching in Bangalore by Sri Lakshmi College of Management & Science."
        />
      </Helmet>

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
        {/* <FAQ />
      <FinalCTA /> */}
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
};

export default IASKSPage;
