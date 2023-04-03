import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";

export default function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <Navbar />
      <div className='max-w-screen-2xl mx-auto'>
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
      </div>
    </div>
  );
}
