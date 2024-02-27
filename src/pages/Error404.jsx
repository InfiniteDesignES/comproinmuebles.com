
import Tarjeta404 from '../components/Tarjeta404'
import Layout from '../layout/Layout.jsx';

export default function Error404(){
    return(  
        <Layout  >
            <section className='h-screen bg-[url("images/Background.svg")] bg-cover' >
                <Tarjeta404></Tarjeta404>
            </section>                  
        </Layout>     
    )
}