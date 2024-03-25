'use client';

import { useState } from 'react';
import {
  useForm,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';

import PrimaryInput from '@/app/ui/input';
import PrimaryButton from '@/app/ui/button';

import axios from 'axios';

const TodoForm = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      content: '',
      deadline: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    
    axios
      .post('/api/todo', data)
      .then((cb) => {
        console.log(cb);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="">
      <div>
        <h3>Добавить новую задачу</h3>
      </div>
      <div className="w-1/3">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <PrimaryInput
            id="title"
            label="Заголовок"
            type="text"
            variant="outlined"
            register={register}
          />
          <PrimaryInput
            id="content"
            label="Задача"
            type="text"
            variant="outlined"
            register={register}
          />
          <PrimaryInput
            id="deadline"
            label="Срок выполнения"
            type="text"
            variant="outlined"
            register={register}
          />
          <PrimaryButton type="submit" variant="filled" loading={loading}>
            Добавить
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
