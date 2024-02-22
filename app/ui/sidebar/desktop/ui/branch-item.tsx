'use client';

import { useRouter } from 'next/navigation';
import { ListItem } from '@material-tailwind/react';

interface BranchItemProps {
  id: number;
  href: string;
  label: string;
}

const BranchItem: React.FC<BranchItemProps> = ({ id, href, label }) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/dashboard/${href}`);
  };

  return <ListItem onClick={handleClick}>{label}</ListItem>;
};

export default BranchItem;
