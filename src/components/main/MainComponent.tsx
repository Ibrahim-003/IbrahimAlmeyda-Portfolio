import AboutComponent from "./about/AboutComponent";
import PresentationComponent from "./presentation/PresentationComponent";
import Project from "./projects/Project";
import SkillsComponent from "./skills/SkillsComponent";

const MainComponent: React.FC = () => {
    return (
      <main className='w-full max-w-[800px] mx-auto px-6 pt-20 pb-10 flex flex-col md:pt-25'>
        <PresentationComponent />
        <AboutComponent />
        <SkillsComponent />
        <Project />
      </main>
    );
}

export default MainComponent;
