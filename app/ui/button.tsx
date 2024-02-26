'use client';

import { Button } from '@material-tailwind/react/components/Button';

interface ButtonPrimaryProps {
  children?: React.ReactNode;
  placeholder?: string;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void
  loading: boolean
}

const PrimaryButton: React.FC<ButtonPrimaryProps> = ({
  children,
  placeholder,
  variant,
  type,
  onClick,
  loading
}) => {
  return (
    <Button 
      placeholder={placeholder} 
      size="md" 
      variant={variant} 
      fullWidth 
      onClick={onClick} 
      type={type} 
      disabled={loading}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
