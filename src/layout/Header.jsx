import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {





  
    // <div className='w-full md:w-[55rem] px-4 mt-4 h-[3rem] absolute top-0 left-0 z-10'>
    //   <header className="relative flex items-center justify-between w-full h-full px-4 rounded-md text-03 bg-600">
    //     <a href="/" className='flex items-center gap-2'>
    //       <img width={'40px'} src='/logos/LogoNoBG2.png' />
    //       <div className="font-semibold">Compro Inmuebles</div>

    //     </a>
    //     <nav className={`gap-8 font-medium md:flex md:static absolute top-[2.5rem] left-0 bg-600 md:w-auto w-full md:p-0 py-8 flex-col md:flex-row md:text-right text-center rounded-md flex transition-all ${claseMenu}`}>
    //       <Link to="">Vender ahora</Link>
    //       <Link to="">Valora tu vivienda</Link>
    //       <Link to="Contact">Contacto</Link>
    //     </nav>
    //     <button onClick={showMenuMobile} className='block md:hidden menu_icon'>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //     </button>
    //   </header>
    // </div>





  const [claseMenu, setClaseMenu] = useState("hidden");

  const showMenuMobile = () => {
    if (claseMenu == "hidden") {
      setClaseMenu("flex")
    } else {
      setClaseMenu("hidden")
    }
  }

  return (
    <div className='w-full md:w-[55rem] px-4 mt-4 h-[3rem] absolute top-0 left-0 z-10'>
      <header className="relative flex items-center justify-between w-full h-full px-4 rounded-md text-03 bg-600">
        <a href="/" className='flex items-center gap-2'>
          <img width={'40px'} src='/logos/LogoNoBG2.png' />
          <div className="font-semibold">Compro Inmuebles</div>

        </a>
        <nav className={`gap-8 font-medium md:flex md:static absolute top-[2.5rem] left-0 bg-600 md:w-auto w-full md:p-0 py-8 flex-col md:flex-row md:text-right text-center rounded-md flex transition-all ${claseMenu}`}>
          <Link to="">Vender ahora</Link>
          <Link to="">Valora tu vivienda</Link>
          <Link to="Contact">Contacto</Link>
        </nav>
        <button onClick={showMenuMobile} className='block md:hidden menu_icon'>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>
    </div>

  );
}

  
