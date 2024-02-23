import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <footer className="h-[21rem] bg-600 text-03">
      <div className="flex justify-between items-end p-20 min-h-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img width={'80px'} src='/logos/LogoNoBG.png' />
              <img width={'200px'} src='/logos/linkey2.jpg' />
            </div>
            <div className="text-sm">
              <span>&copy;Copyright 2024</span>
              <br />
              <span>ComproInmuebles</span>
            </div>
          </div>
          <div className="text-lg flex gap-16">
            <Link to="" className="hover:underline">
              Política de Privacidad
            </Link>
            <Link to="" className="hover:underline">
              Términos y Condiciones
            </Link>
            <Link to="" className="hover:underline">
              Cookies
            </Link>
            <Link to="" className="hover:underline">
              Vender
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
