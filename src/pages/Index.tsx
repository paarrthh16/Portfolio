import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

const Index = () => {
  usePageTitle({ 
    title: "Parth Shah | Software Engineer • AI & Full-Stack Developer",
  });

  return (
    <main className="relative overflow-hidden pt-16 md:pt-20">
      <Navbar />
      <Hero />
      <Profile />
      <Footer />
    </main>
  );
};

export default Index;