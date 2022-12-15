import React from "react";
import { useState, useEffect } from "react";

const initialAuto = {
  marca: "",
  modelo: "",
  color: "",
  serial: "",
  motor: "",
};

const AutoFormComponent = ({
  carAdd,
  autoEditado,
  setAutoEditado,
  carEdit,
}) => {
  const [auto, setAuto] = useState(initialAuto);
  const { marca, modelo, color, serial, motor } = auto;
  //el hook useEffect siempre esta pendiente si la variable que tiene dentro de sus corchete cambia el debera hacer
  useEffect(() => {
    if (autoEditado !== null) {
      setAuto(autoEditado);
    } else {
      setAuto({
        marca: "",
        modelo: "",
        color: "",
        serial: "",
        motor: "",
      });
    }
  }, [autoEditado]);

  const handleInputChange = (e) => {
    //esta funcion se llama cada vez que nosotros escribimos algo en algun input de
    //nuestra pagina
    const changedFormValue = {
      //va a tener los datos que tiene usuario de los input que no he tocado
      //pero va a actualizar el atributo que cambio por su nuevo valor
      ...auto,
      [e.target.name]: e.target.value,
    };
    setAuto(changedFormValue);
  };
  return (
    <div class="container xxl">
      {autoEditado!==null ? <h1>Editar Auto</h1>:<h1>Ingrese Auto</h1>}
      <div class="col">
        <input
          type="text"
          class="form-control border-success"
          placeholder="Marca"
          aria-label="Marca"
          id="inputMarca"
          name="marca"
          value={marca}
          onChange={handleInputChange}
        ></input>
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control border-success"
          placeholder="Modelo"
          aria-label="Modelo"
          id="inputModelo"
          name="modelo"
          value={modelo}
          onChange={handleInputChange}
        ></input>
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control border-success"
          placeholder="Color"
          aria-label="Color"
          id="inputColor"
          name="color"
          value={color}
          onChange={handleInputChange}
        ></input>
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control border-success"
          placeholder="Serial"
          aria-label="Serial"
          id="inputSerial"
          name="serial"
          value={serial}
          onChange={handleInputChange}
        ></input>
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control border-success"
          placeholder="Motor"
          aria-label="Motor"
          id="inputMotor"
          name="motor"
          value={motor}
          onChange={handleInputChange}
        ></input>
      </div>
      {autoEditado !== null ? (
        <button
          type="button"
          class="btn btn-success"
          onClick={() => carEdit(auto)}
        >
          Editar auto
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-success"
          onClick={() => carAdd(auto)}
        >
          Ingresar auto
        </button>
      )}

      {autoEditado != null ? (
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => setAutoEditado(null)}
        >
          Cancelar
        </button>
      ) : (
        <></>
      )}
      <br />
    </div>
  );
};

export default AutoFormComponent;
