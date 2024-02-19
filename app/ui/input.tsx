'use client';

import { Input } from '@material-tailwind/react/components/Input';

interface PrimaryButtonProps {
  label: string;
  type?: string;
  variant: 'standard' | 'outlined' | 'static';
}

const PrimaryInput: React.FC<PrimaryButtonProps> = ({
  label,
  type,
  variant,
}) => {
  return (
    <div>
      <Input label={label} type={type} variant={variant} size="lg" />
    </div>
  );
};

export default PrimaryInput;
