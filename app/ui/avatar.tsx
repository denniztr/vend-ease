import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-auto  h-8 w-8">
        <Image src="/avatar_placeholder.jpg" alt="Avatar" fill />
      </div>
    </div>
  );
};

export default Avatar;
