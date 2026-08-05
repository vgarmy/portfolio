import AboutPreview from "../../components/home/AboutPreview";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import Hero from "../../components/home/Hero";
import SkillsPreview from "../../components/home/SkillsPreview";

function Home() {
    return (
        <>
            <Hero />
            <AboutPreview />
            <SkillsPreview />
            <FeaturedProjects />
        </>
    );
}

export default Home;