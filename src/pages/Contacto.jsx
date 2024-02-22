import Header from "../layout/Header"
import  Mail2  from "../components/Mail-2"
import  Footer  from "../layout/Footer"

export default function Contacto(){
    return(
        <main className='flex flex-col w-full h-screen bg-[url("images/Background2.svg")] bg-cover '>
            <Header/>  
            <br /> 
            <Mail2/>
           
            {/* <div><h1>Nuestro Telefono:</h1> <a href="tel:+"></a></div> */}
            <Footer/>
        </main>
    )
}
