import ButtonPrimary from './components/button';

export default function Home() {
  const placeholder = 'kuki';
  return (
    <div>
      <h1 className="text-2xl text-red-300"> Hello world! </h1>
      <ButtonPrimary placeholder={placeholder}>
        I am a button !
      </ButtonPrimary>
    </div>
  );
}
