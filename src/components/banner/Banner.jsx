import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => (
  <section
    id='home'
    className='w-full py-20 flex border-b-[1px] items-center font-titleFont border-b-black'
  >
    <LeftBanner />
    <RightBanner />
  </section>
);

export default Banner;
