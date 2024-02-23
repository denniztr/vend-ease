'use client';

import { useRouter } from 'next/navigation';
import { ListItem } from '@material-tailwind/react';

interface BranchItemProps {
  id: number;
  path: string;
  label: string;
}

const BranchItem: React.FC<BranchItemProps> = ({ id, path, label }) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/dashboard/${path}`);
  };

  return <ListItem onClick={handleClick}>{label}</ListItem>;
};

export default BranchItem;
