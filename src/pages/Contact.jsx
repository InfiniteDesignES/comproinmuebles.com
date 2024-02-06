import Header from "../layout/Header"
import  Mail  from "../components/Mail"

export default function Contact(){
    return(
        <main className="fixed flex flex-col h-fit top-40 left-16">
            <Header/>   
            <Mail/>
           
            {/* <div><h1>Nuestro Telefono:</h1> <a href="tel:+"></a></div> */}
        </main>
    )
}
