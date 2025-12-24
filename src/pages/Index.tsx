import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Edward Yeretnov | Software Engineer & Systems Developer</title>
        <meta
          name="description"
          content="U.S. citizen software engineer based in Tel Aviv with C++ systems programming expertise, UC Davis CS graduate. Building robust, scalable systems."
        />
        <meta name="keywords" content="software engineer, systems developer, C++, Python, Tel Aviv, UC Davis, cyber security" />
        <meta property="og:title" content="Edward Yeretnov | Software Engineer" />
        <meta property="og:description" content="Software Engineer with C++ systems programming expertise, building robust and scalable systems." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
