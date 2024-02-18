'use client';

import { Button } from '@material-tailwind/react';

interface ButtonPrimaryProps {
  children?: React.ReactNode;
  placeholder?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  placeholder,
}) => {
  return (
    <Button
      placeholder={placeholder}
      variant="gradient"
      size="md"
      loading={false}
      fullWidth
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
