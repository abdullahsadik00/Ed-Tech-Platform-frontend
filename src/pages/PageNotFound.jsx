import React from 'react';

const PageNotFound = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <button
              type="button"
              className="text-[#3C43C1] w-full border border-[#3C43C1] hover:bg-blue-800 focus:ring-4 focus:ring-[#3C43C1] font-medium rounded-lg text-sm px-5 py-2.5 me-2  focus:outline-none flex items-center justify-center mb-4"
            >
              Back to homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
