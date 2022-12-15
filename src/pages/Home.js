import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BotonComponent, PrincipalComponent, TablaUsuarioComponent } from "../components";



const Homepage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Usuario",{}, [navigate]))
    return(
        <div>
            <PrincipalComponent/>
            <BotonComponent infoBoton={'Ir a usuario'} handleOnClick={handleOnClick}/>

        </div>
    )
}

export default Homepage;