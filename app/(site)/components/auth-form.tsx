'use client';

import PrimaryInput from '@/app/components/input';


export const AuthForm = () => {
  return (
    <div>
      <h3 className="text-gray-800 font-medium">Регистрация</h3>
      <div>
        <form>
          <PrimaryInput />
          <PrimaryInput />
          <PrimaryInput />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
