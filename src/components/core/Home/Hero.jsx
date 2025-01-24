import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
// import React from 'react';
// import heroImg from '../../../assets/hero.png';
// import bg from '../../../assets/bg.png';

// const Hero = () => {
//   return (
//     <>
//       <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
//         <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
//           <svg
//             className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
//             viewBox="0 0 100 100"
//             fill="currentColor"
//             preserveAspectRatio="none slice"
//           >
//             <path d="M50 0H100L50 100H0L50 0Z" />
//           </svg>
//           <img
//             className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
//             src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
//             alt=""
//           />
//         </div>
//         <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
//           <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
//             <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
//               Brand new
//             </p>
//             <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
//               Start Learning
//               <br className="hidden md:block" />
//               and{' '}
//               <span className="inline-block text-deep-purple-accent-400">
//                 Have Fun
//               </span>
//             </h2>
//             <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
//               Discover an exciting way to learn with our interactive and
//               engaging platform. Whether you're a student or teacher, education
//               has never been this fun.
//             </p>
//             <div className="flex items-center">
//               <a
//                 href="/"
//                 className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide border-[#e7e7e7] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//               >
//                 Get started
//               </a>
//               {/* <a
//                 href="/"
//                 aria-label=""
//                 className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
//               >
//                 Learn more
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <header>
//         <div className="mx-auto w-full max-w-7xl px-5 pt-16 md:px-10 md:pt-10">
//           <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
//             <div className="flex flex-col">
//               <h1 className="mb-4 text-4xl font-bold md:text-6xl font-poppins">
//                 Start Learning and Have Fun
//               </h1>
//               <p className="mb-6 max-w-lg text-sm  sm:text-xl md:mb-10 lg:mb-12 font-lato">
//                 Discover an exciting way to learn with our interactive and
//                 engaging platform. Whether you're a student or teacher,
//                 education has never been this fun.
//               </p>
//               <div className="flex items-center">
//                 <a
//                   href="#"
//                   className="mr-5 items-center rounded-md bg-[#407BFF] px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8 font-lato"
//                 >
//                   Let's Talk
//                 </a>
//               </div>
//             </div>
//             <img
//               src={bg}
//               alt=""
//               className="inline-block h-full w-full max-w-2xl"
//             />
//           </div>
//         </div>
//       </header>{' '} */}
//     </>
//   );
// };

// export default Hero;
