import AuthForm from "./components/auth-form";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center bg-gray-200">
      <div className="mx-auto">
        <h1 className="sm:text-5xl text-3xl text-gray-700 font-semibold tracking-tight">
          VendEase
        </h1>
      </div>
      <div className="mx-auto">
        <div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
