
import NavInfo from "../components/NavInfo"
import Header from "../layout/Header"


export default function InfoLegal () {
    return(
        <div className="flex flex-col ">
            <Header/>
            <div className="w-full p-5 mt-32 mb-20 text-2xl bg-800 text-50">Informacion legal</div>
            <div className="flex flex-col w-full text-left ">
                <NavInfo/>
            </div>
        </div>
    )
}
