import Header from "../layout/Header"
import  Mail  from "../components/Mail"

export default function Contact(){
    return(
        <main className="flex flex-col w-100">
            <Header/>  
            <br /> 
            <Mail/>
           
            {/* <div><h1>Nuestro Telefono:</h1> <a href="tel:+"></a></div> */}
        </main>
    )
}
