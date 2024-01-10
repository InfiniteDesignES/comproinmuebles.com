import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 fixed top-6 left-12 w-[55rem] h-[3rem] flex-shrink-0 bg-600">
      <div>logo</div>
      <nav className='flex gap-8'>
        <Link to="">Vender ahora</Link>
        <Link to="">Valora tu vivienda</Link>
        <Link to="">Contacto</Link>
      </nav>
    </header>
  );
}
