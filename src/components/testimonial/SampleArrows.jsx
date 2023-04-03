import PropTypes from "prop-types";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

export const NextArrow = ({ onClick }) => (
  <div
    role='button'
    tabIndex={0}
    className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10'
    onClick={onClick}
  >
    <HiArrowRight />
  </div>
);

NextArrow.defaultProps = {
  onClick: () => {},
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

export const PrevArrow = ({ onClick }) => (
  <div
    role='button'
    tabIndex={0}
    className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10'
    onClick={onClick}
  >
    <HiArrowLeft />
  </div>
);

PrevArrow.defaultProps = {
  onClick: () => {},
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};
