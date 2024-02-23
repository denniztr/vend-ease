'use client';

import { Branch } from '@/app/interface/branch';


interface BodyProps {
  equipment: Branch;
}

const Body: React.FC<BodyProps> = ({ equipment }) => {
  return (
    <div className="w-[30rem] h-[30rem]">

    </div>
  );
};

export default Body;
