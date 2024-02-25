'use client';

import { Button } from '@material-tailwind/react/components/Button';

interface ButtonPrimaryProps {
  children?: React.ReactNode;
  placeholder?: string;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void
}

const PrimaryButton: React.FC<ButtonPrimaryProps> = ({
  children,
  placeholder,
  variant,
  type,
  onClick
}) => {
  return (
    <Button placeholder={placeholder} size="md" variant={variant} fullWidth onClick={onClick} type={type} >
      {children}
    </Button>
  );
};

export default PrimaryButton;
