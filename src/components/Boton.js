import React from "react";

const BotonComponent = ({infoBoton, handleOnClick}) =>{
    return (
        <div class="container xxl">
            <br />
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
             class="btn btn-primary me-md-2" 
             type="button"
             onClick={()=>{
                handleOnClick();
             }}
             >{infoBoton}</button>

        </div>
        <br/>
        </div>
    );
}

export default BotonComponent;