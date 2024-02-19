'use client';

import { Button } from '@material-tailwind/react/components/Button';

interface ButtonPrimaryProps {
  children?: React.ReactNode;
  placeholder?: string;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
  onClick: () => void
}

const PrimaryButton: React.FC<ButtonPrimaryProps> = ({
  children,
  placeholder,
  variant,
  onClick
}) => {
  return (
    <Button placeholder={placeholder} size="md" variant={variant} fullWidth onClick={onClick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
