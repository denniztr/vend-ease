'use client';


import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-auto  h-10 w-10 md:h-12 md:w-12">
        <Image src="/avatar_placeholder.jpg" alt="Avatar" fill />
      </div>
    </div>
  );
};

export default Avatar;
