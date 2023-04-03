import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

const Projects = () => (
  <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
    <div className='flex justify-center items-center text-center'>
      <Title
        title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'
        desc='My Projects'
      />
    </div>
    <div className='grid grid-cols-3 gap-14'>
      <ProjectsCard
        title='SOCIAL MEDIA CLONE'
        desc=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quos, cupiditate omnis numquam voluptatem voluptates'
        src={projectOne}
      />
      <ProjectsCard
        title='E-Commerce Website'
        desc=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quos, cupiditate omnis numquam voluptatem voluptates'
        src={projectTwo}
      />
      <ProjectsCard
        title='Chatting App'
        desc=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quos, cupiditate omnis numquam voluptatem voluptates'
        src={projectThree}
      />
      <ProjectsCard
        title='Chatting App'
        desc=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quos, cupiditate omnis numquam voluptatem voluptates'
        src={projectThree}
      />
      <ProjectsCard
        title='SOCIAL MEDIA CLONE'
        desc=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quos, cupiditate omnis numquam voluptatem voluptates'
        src={projectOne}
      />
      <ProjectsCard
        title='E-Commerce Website'
        desc=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quos, cupiditate omnis numquam voluptatem voluptates'
        src={projectTwo}
      />
    </div>
  </section>
);

export default Projects;
