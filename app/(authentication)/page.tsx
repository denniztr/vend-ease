import AuthForm from './ui/authForm';

export default function Home() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center bg-gray-50">
      <div className="">
        <h1 className="sm:text-5xl text-3xl text-gray-700 font-semibold tracking-tight">
          VendEase
        </h1>
      </div>
        <AuthForm />
    </div>
  );
}
