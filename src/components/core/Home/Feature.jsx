import React from 'react';

const Feature = () => {
  const features = [
    {
      title: 'Interactive Learning Tools',
      description:
        'Engage with a variety of learning tools such as quizzes, live sessions, and discussion forums to enhance your understanding.',
    },
    {
      title: 'Personalized Progress Tracking',
      description:
        'Monitor your academic progress with our detailed tracking features, helping you stay on top of your studies.',
    },
    {
      title: 'Certification on Completion',
      description:
        'Earn certificates for each course you complete, providing you with valuable credentials for your learning journey.',
    },
    {
      title: 'Expert Instructors',
      description:
        'Learn from the best! Our instructors are industry leaders, providing top-notch education across various subjects.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-richblack-900">
      {' '}
      {/* Background set to text-richblack-300 */}
      {/* Top Left Blob */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#12274a"
            d="M40.5,-53.3C54.5,-47.5,67.6,-37.6,72.9,-24.9C78.2,-12.2,75.7,3.3,69.6,16.5C63.5,29.7,53.9,40.5,42,47.7C30.1,54.9,15.1,58.5,0.1,58.3C-15,58.1,-30.1,54,-42.8,46.4C-55.6,38.8,-66,27.7,-70.5,13.7C-75,0.1,-73.4,-16.8,-66.4,-30.8C-59.3,-44.8,-46.8,-55.9,-33.4,-60.5C-20.1,-65.1,-10,-63.2,1.6,-65.8C13.2,-68.4,26.4,-75.6,40.5,-70.8C54.5,-66.1,67.6,-49,72.9,-36.3C78.2,-23.5,75.7,-5.9,69.6,10.7C63.5,27.3,53.9,40.9,42,47.5C30.1,54.1,15.1,53.6,0.1,53.3C-15,53,-30.1,53.6,-42.8,51.9C-55.6,50.2,-66,46.1,-70.5,37.5C-75,28.9,-73.4,15.8,-66.4,0.6C-59.3,-14.6,-46.8,-29.2,-33.4,-34.1C-20.1,-39.1,-10,-34.2,1.6,-30.7C13.2,-27.3,26.4,-25.2,40.5,-25.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#12274a"
            d="M40.5,-53.3C54.5,-47.5,67.6,-37.6,72.9,-24.9C78.2,-12.2,75.7,3.3,69.6,16.5C63.5,29.7,53.9,40.5,42,47.7C30.1,54.9,15.1,58.5,0.1,58.3C-15,58.1,-30.1,54,-42.8,46.4C-55.6,38.8,-66,27.7,-70.5,13.7C-75,0.1,-73.4,-16.8,-66.4,-30.8C-59.3,-44.8,-46.8,-55.9,-33.4,-60.5C-20.1,-65.1,-10,-63.2,1.6,-65.8C13.2,-68.4,26.4,-75.6,40.5,-70.8C54.5,-66.1,67.6,-49,72.9,-36.3C78.2,-23.5,75.7,-5.9,69.6,10.7C63.5,27.3,53.9,40.9,42,47.5C30.1,54.1,15.1,53.6,0.1,53.3C-15,53,-30.1,53.6,-42.8,51.9C-55.6,50.2,-66,46.1,-70.5,37.5C-75,28.9,-73.4,15.8,-66.4,0.6C-59.3,-14.6,-46.8,-29.2,-33.4,-34.1C-20.1,-39.1,-10,-34.2,1.6,-30.7C13.2,-27.3,26.4,-25.2,40.5,-25.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="bg-richblack-900 py-16 md:py-10 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-base font-semibold leading-7 text-white uppercase font-lato">
              Why Choose Us?
            </p>
            <h2 className="mt-2 text-3xl font-extrabold font-poppins tracking-tight text-white sm:text-4xl">
              Empowering Learning Through Innovation
            </h2>
            <p className="mt-6 text-lg leading-8 text-white font-lato">
              Our platform provides a complete and immersive learning experience
              designed to make education fun, interactive, and personalized.
            </p>
          </div>
          <div className="mx-auto mt-7 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <div className="border rounded border-white p-6">
                  <div key={index} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div
                        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg"
                        style={{ backgroundColor: '#3B82F6' }}
                      >
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                              index === 0
                                ? 'M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z'
                                : index === 1
                                ? 'M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z'
                                : index === 2
                                ? 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
                                : 'M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33'
                            }
                          />
                        </svg>
                      </div>
                      {feature.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-white font-lato">
                      {feature.description}
                    </dd>{' '}
                    {/* All text set to white */}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
