'use client';

import { Button } from '@material-tailwind/react/components/Button';

interface ButtonPrimaryProps {
  children?: React.ReactNode;
  placeholder?: string;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  loading: boolean;
  className?: string;
}

const PrimaryButton: React.FC<ButtonPrimaryProps> = ({
  children,
  placeholder,
  variant,
  type,
  onClick,
  loading,
  className,
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
      className={className}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
