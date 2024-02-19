import VenderAhora from '../botones/VenderAhora';

export default function Titulo() {
  return (
    <main className="h-screen">
      <div className="pt-[15rem] flex flex-col justify-center items-center text-03">
        <h1 className="md:text-8xl text-6xl font-extrabold text-center">
          Compro
          <br />
          Inmuebles
        </h1>
        <h2 className="mt-6 font-medium text-2xl text-center">Vende tu Casa Rápidamente y Sin Complicaciones.</h2>
        <VenderAhora />
      </div>
    </main>
  );
}
