import React from 'react';

const TeamMember = ({ name, subject, description, image, socialLinks }) => {
  return (
    <div className="team-member rounded shadow-md mx-3">
      <div className="w-full">
        <img src={image} alt={`Photo of ${name}`} />
      </div>
      <div className="mt-3 flex justify-center flex-col items-center">
        <h3 className="font-poppins text-[#171A1F] font-bold text-xl text-center tracking-wide">
          {name}
        </h3>
        <p className="font-lato text-base text-[#636AE8]">{subject}</p>
        <p className="font-lato text-base p-2 text-center">{description}</p>
        <ul className="socialIcons flex items-center space-x-4 text-white mb-3 md:justify-start">
          {socialLinks.map(({ href, imgSrc, altText }, index) => (
            <li key={index}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} alt={altText} className="p-2 invert" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamMember;
