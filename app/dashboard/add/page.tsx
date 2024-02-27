'use client';

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import SelectDefault from '@/app/ui/select';
import PrimaryInput from '@/app/ui/input';
import PrimaryButton from '@/app/ui/button';

import axios from 'axios';

export default function Home() {
  const loading = false;

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      city: '',
      address: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('in', data)
    axios.post('/api/company', data)
    .then((cb) => console.log(cb))
    .catch((error) => console.log(error))
  };

  return (
    <div>
      <h2 className="text4xl text-gray-600 font-semibold tracking-normal">
        Добавить
      </h2>
      <div>
        <SelectDefault />
      </div>
      <div className="mt-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <PrimaryInput
            id="name"
            label="Название компании"
            type="text"
            variant="outlined"
            register={register}
          />
          <PrimaryInput
            id="city"
            label="Город"
            type="text"
            variant="outlined"
            register={register}
          />
          <PrimaryInput
            id="address"
            label="Адрес"
            type="text"
            variant="outlined"
            register={register}
          />
          <PrimaryButton type="submit" variant="outlined" loading={loading}>
            Добавить
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
