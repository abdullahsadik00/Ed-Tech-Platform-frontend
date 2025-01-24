import React from 'react';
import AboutImages from './about/AboutImages';
import AboutContent from './about/AboutContent';

const AboutUs = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=500',
      alt: 'Education environment',
    },
    {
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=500',
      alt: 'Learning experience',
    },
  ];

  return (
    <section className="relative bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <AboutImages images={images} />
          <AboutContent />
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_0%,#0f172a_50%,transparent_100%)] opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
    </section>
  );
};

export default AboutUs;
// import React from 'react';
// import img from '../../../assets/bg-university.jpg';
// import img2 from '../../../assets/blob.png';
// import d3 from '../../../assets/d3.jpg';
// import s4 from '../../../assets/s4.jpg';
// const AboutUs = () => {
//   return (
//     <section className="aboutUs w-full bg-richblack-900 ">
//       <div className="flex flex-col-reverse md:w-11/12 p-2 py-8 md:p-5 md:flex-row md:mx-auto 2xl:p-16">
//         <div
//           className="left bg-contain bg-no-repeat bg-center p-5 md:w-1/2"
//           style={{ backgroundImage: `url(${img2})` }}
//         >
//           <div className="flex flex-row gap-2 justify-around">
//             <div className="w-[170px] md:w-[230px] 2xl:w-[345px]">
//               <img
//                 src={s4}
//                 alt="Description of second image"
//                 className="w-full rounded shadow-md	"
//               />
//             </div>
//             <div className="w-[170px] md:w-[230px] pt-5 md:pt-10 2xl:w-[345px]">
//               <img
//                 src={d3}
//                 alt="Description of second image"
//                 className="w-full rounded shadow-md	"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="right w-full md:w-1/2 p-5 my-auto">
//           <div className="flex flex-col gap-3">
//             <p className="text-base md:text-lg font-bold font-lato text-richblack-300 uppercase">
//               About Us
//             </p>
//             <h2 className="text-3xl md:text-4xl font-extrabold font-poppins tracking-tight leading-tight text-white			">
//               The roots of education are bitter, but the fruit is sweet
//             </h2>
//             <p className="text-white/80 font-lato">
//               At Ed Tech Platform, we're passionate about making education
//               accessible, engaging, and enjoyable for everyone. Our mission is
//               to empower learners and educators with innovative tools that
//               foster growth, creativity, and a lifelong love for learning.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
