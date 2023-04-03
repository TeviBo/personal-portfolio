import PropTypes from "prop-types";

const Title = ({ title, desc }) => (
  <div className='flex flex-col gap-4 font-titleFont mb-14 mx-1'>
    <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
      {title}
    </h3>
    <h1 className='text-5xl text-gray-300 font-bold capitalize'>{desc}</h1>
  </div>
);

export default Title;

Title.defaultProps = {
  title: "Fill me :)",
  desc: "Mee Too ! :D",
};

Title.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
