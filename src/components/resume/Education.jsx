import { motion } from "framer-motion";

import ResumeCard from "./ResumeCard";

const Education = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className=' w-full flex gap-20'
  >
    <div className='w-1/2'>
      <div className='py-12 font-titleFont flex flex-col gap-4'>
        <p className='text-sm text-designColor tracking-[4px]'>2007 - Today</p>
        <h2 className='text-4xl font-bold'>Education Quality</h2>
      </div>
      <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
          title='University Technical Degree in Programming'
          subtitle='Universidad Tecnologica Nacional - FRC (2018 - Today)'
          result='3.90/4'
          desc='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture'
        />
        <ResumeCard
          title='AS - Science & Information'
          subtitle='SuperKing College (2001 - 2005)'
          result='4.75/5'
          desc='Higher education, also called post-secondary education'
        />
        <ResumeCard
          title='Secondary School Education'
          subtitle='Instituto Parroquial Sagrada Familia (2007 - 2012)'
          result='5.00/5'
          desc='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale'
        />
      </div>
    </div>
    <div className='w-1/2'>
      <div className='py-12 font-titleFont flex flex-col gap-4'>
        <p className='text-sm text-designColor tracking-[4px]'>2020 - 2023</p>
        <h2 className='text-4xl font-bold'>Job Experience</h2>
      </div>
      <div className='className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
          title='QA Automation Trainee'
          subtitle='Kiuvi Services - AZ Project - (2020 - 2021)'
          result='1.90/4'
          desc='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture'
        />
        <ResumeCard
          title='QA Automation Analyst'
          subtitle='Betterfly Chile - (2021 - 2022)'
          result='4.75/5'
          desc='Higher education, also called post-secondary education'
        />
        <ResumeCard
          title='React Developer Trainee'
          subtitle='Kiuvi Services - Expensas Project - (2021 - 2022)'
          result='5.00/5'
          desc='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale'
        />
        <ResumeCard
          title='QA Engineer'
          subtitle='Kiuvi Services - VU Project - (2022 - 2023)'
          result='5.00/5'
          desc='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale'
        />
      </div>
    </div>
  </motion.div>
);

export default Education;
