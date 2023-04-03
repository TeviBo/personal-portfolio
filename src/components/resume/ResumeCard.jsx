import PropTypes from "prop-types";

const ResumeCard = ({ title, subtitle, result, desc }) => (
  <div className='w-full h-1/3 group flex'>
    <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
      <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
        <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300' />
        {/* </span> */}
      </span>
    </div>
    <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne'>
      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-2xl font-semibold group-hover:text-white duration-300'>
            {title}
          </h3>
          <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>
            {subtitle}
          </p>
        </div>
        <div>
          <p className='w-20 h-10 group-hover:text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium'>
            {result}
          </p>
        </div>
      </div>
      <p className='text-base font-medium text-gray-400 group-hover:text-gray-300'>
        {desc}
      </p>
    </div>
  </div>
);

export default ResumeCard;

ResumeCard.defaultProps = {
  title: "Fill Me :)",
  subtitle: "Me Too :D",
  result: "And Me ! d:)",
  desc: "And... Don't Forget Abou Me xD",
};

ResumeCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  result: PropTypes.string,
  desc: PropTypes.string,
};
