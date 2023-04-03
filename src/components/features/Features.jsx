import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => (
  <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
    <Title title='Features' desc='What I Do' />

    <div className='grid grid-cols-3 gap-20'>
      <Card
        title='Business Strategy'
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia dolorem optio quod soluta consequuntur ab minima nisi quisquam.'
        icon={<FaBars />}
      />
      <Card
        title='App Development'
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia dolorem optio quod soluta consequuntur ab minima nisi quisquam.'
        icon={<AiFillAppstore />}
      />
      <Card
        title='SEO Optimisation'
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia dolorem optio quod soluta consequuntur ab minima nisi quisquam.'
        icon={<SiProgress />}
      />
      <Card
        title='Mobile Development'
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia dolorem optio quod soluta consequuntur ab minima nisi quisquam.'
        icon={<FaMobile />}
      />
      <Card
        title='UX Design'
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia dolorem optio quod soluta consequuntur ab minima nisi quisquam.'
        icon={<SiAntdesign />}
      />
      <Card
        title='Hosting Websites'
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus mollitia dolorem optio quod soluta consequuntur ab minima nisi quisquam.'
        icon={<FaGlobe />}
      />
    </div>
  </section>
);
export default Features;
