import HereSection from "@/components/HereSection";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HereSection />
        <WorkExperience />
        <TechStack />
      </main>
    </>
  );
};

export default Home;
