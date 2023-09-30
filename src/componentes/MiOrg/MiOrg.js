import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    const [mostrar, actualidarMostrar] = useState(true)

    const manejarClick = () =>{
        console.log("mostrar/ocultar", !mostrar)
        actualidarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3> 
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg