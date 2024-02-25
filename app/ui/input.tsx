'use client';

import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';
import { Input } from '@material-tailwind/react/components/Input';

interface PrimaryButtonProps {
  id: string;
  label: string;
  type?: string;
  variant: 'standard' | 'outlined' | 'static';
  register: UseFormRegister<FieldValues>;
  required?: boolean
}

const PrimaryInput: React.FC<PrimaryButtonProps> = ({
  id,
  label,
  type,
  variant,
  register,
  required
}) => {
  return (
    <div>
      <Input 
        label={label} 
        type={type} 
        variant={variant} 
        size="lg" 
        {...register(id, { required })} 
      />
    </div>
  );
};

export default PrimaryInput;
