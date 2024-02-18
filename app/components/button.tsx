'use client';

import { Button } from '@material-tailwind/react';

interface ButtonPrimaryProps {
  children?: React.ReactNode;
  placeholder?: string;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
}

const PrimaryButton: React.FC<ButtonPrimaryProps> = ({
  children,
  placeholder,
  variant,
}) => {
  return (
    <Button placeholder={placeholder} size="md" variant={variant}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
