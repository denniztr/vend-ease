'use client';

import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import toast from 'react-hot-toast';

import PrimaryInput from '@/app/ui/input';
import PrimaryButton from '@/app/ui/button';

import axios from 'axios';

type Variant = 'LOGIN' | 'REGISTER';

export const AuthForm = () => {
  const router = useRouter();
  const session = useSession();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(session);

    if (session?.status === 'authenticated') {
      router.push('/dashboard')
    }

  }, [session, router]);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') setVariant('REGISTER');
    if (variant === 'REGISTER') setVariant('LOGIN');
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    if (variant === 'LOGIN') {
      signIn('credentials', { ...data, redirect: false })
        .then((cb) => {
          cb?.error && toast.error(cb.error);

          cb?.status === 200 && toast.success('Успешная авторизация');
        })
        .finally(() => setLoading(false));
    }

    if (variant === 'REGISTER') {
      axios
        .post('/api/register', data)
        .then((cb) => {
          cb.status === 200 && toast.success('Успешная регистрация');
        })
        .catch((error) => toast.error(error.response.data))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-6 shadow rounded sm:px-10">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <>
              <PrimaryInput
                id="name"
                label="Имя"
                type="text"
                variant="standard"
                register={register}
              />
            </>
          )}
          <PrimaryInput
            id="email"
            label="Электронная почта"
            type="email"
            variant="standard"
            register={register}
          />
          <PrimaryInput
            id="password"
            label="Пароль"
            type="password"
            variant="standard"
            register={register}
          />
          <div className="py-6">
            <PrimaryButton type="submit" variant="filled" loading={loading}>
              {variant === 'REGISTER' ? 'Зарегистрироваться' : 'Войти'}
            </PrimaryButton>
          </div>
        </form>
        <div className="flex flex-row flex-wrap gap-2 text-sm text-gray-800">
          <div>
            <p>
              {variant === 'REGISTER' ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}
            </p>
          </div>
          <div onClick={toggleVariant}>
            <p className="underline cursor-pointer">
              {variant === 'REGISTER' ? 'Войти' : 'Зарегистрироваться'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
