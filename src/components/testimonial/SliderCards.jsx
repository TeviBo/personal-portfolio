import PropTypes from "prop-types";
import { RiStarFill } from "react-icons/ri";
import { quote, testimonialOne } from "../../assets";

const SliderCard = ({
  personName,
  companyName,
  companyRole,
  cardTitle,
  cardSubtitle,
  cardDescription,
  image,
  alt,
}) => (
  <div className='w-full h-[500px] flex justify-between'>
    <div className='w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] justify-center p-8 rounded-lg shadow-shadowOne flex flex-col gap-8'>
      <img className='h-72 rounded-lg object-cover' src={image} alt={alt} />
      <div>
        <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
          {companyName}
        </p>
        <h3 className='text-2xl font-bold'>{personName}</h3>
        <p className='text-base tracking-wide text-gray-500'>{companyRole}</p>
      </div>
    </div>
    <div className='w-[60%] h-full flex flex-col justify-between'>
      <img className='w-[20%]' src={quote} alt='quote' />
      <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
        <div className='flex justify-between items-center py-6 border-b-2 border-b-gray-900'>
          <div>
            <h3 className='text-2xl font-medium tracking-wide'>{cardTitle}</h3>
            <p className='text-base text-gray-400 mt-3'>{cardSubtitle}</p>
          </div>
          <div className='text-yellow-500 flex gap-1'>
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </div>
        </div>
        <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
          {cardDescription}
        </p>
      </div>
    </div>
  </div>
);

export default SliderCard;

SliderCard.defaultProps = {
  personName: "John Doe",
  companyName: "Fake Company",
  companyRole: "CEO",
  cardTitle: "Some Title",
  cardSubtitle: "Some Subtitle",
  cardDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, esse exercitationem, nam minus magnam dolor voluptas magni voluptatibus ratione aspernatur ab inventore dolore. Non, excepturi nihil necessitatibus doloremque eos nostrum.\nMagnam vel cumque porro consequuntur exercitationem quaerat facilis ea natus odio eos ullam minima ratione totam incidunt impedit voluptas, in iusto ducimus nobis nam repudiandae adipisci! Officiis totam odio deleniti!\nRepellat quos voluptate tenetur vero reprehenderit at ducimus, facere optio autem porro cum! Quibusdam sed nostrum repellendus. Repudiandae ex animi pariatur architecto deleniti unde, sed, ullam, praesentium numquam et ipsum?",
  image: testimonialOne,
  alt: "testimonialX",
};

SliderCard.propTypes = {
  personName: PropTypes.string,
  companyName: PropTypes.string,
  companyRole: PropTypes.string,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardDescription: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};
