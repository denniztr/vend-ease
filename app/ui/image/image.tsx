'use client';
import { Carousel, IconButton } from '@material-tailwind/react';
import Image from 'next/image';

const PrimaryImage = () => {
  return (
    <div className="relative">
      <div className="relative h-[25rem] w-[20rem] p-2 overflow-auto">
        <Carousel
          transition={{ duration: 1 }}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          <div className="bg-gray-200/50 h-full overflow-hidden relative">
            <Image
              alt="Image"
              src="/vending2.jpg"
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-gray-200/50 h-full overflow-hidden relative">
            <Image
              alt="Image"
              src="/vending3.jpg"
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-gray-200/50 h-full overflow-hidden relative">
            <Image
              alt="Image"
              src="/vending4.jpg"
              fill
              className="object-contain"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PrimaryImage;
