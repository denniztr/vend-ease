'use client';

interface BodyProps {
  branch: any
}

const Body: React.FC<BodyProps> = ({ branch })  =>{
  return <h1>{branch.label}</h1>;
}

export default Body;
