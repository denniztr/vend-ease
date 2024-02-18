import PrimaryButton from '@/app/components/button';

export default function Home() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center bg-gray-200">
      <div className="mx-auto">
        <h1 className="sm:text-5xl text-3xl text-gray-700 font-semibold tracking-tight">
          VendEase
        </h1>
      </div>
      <div className="mt-16 mx-auto">
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <PrimaryButton variant="outlined">
            Зарегистрироваться как сотрудтник
          </PrimaryButton>
          <PrimaryButton variant="outlined">
            Зарегистрировать компанию
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
