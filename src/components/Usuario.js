import React from "react";
import { useState, useEffect } from "react";

//se inicializa un funcion con los datos que se van a ingresar en mi form
const initialUsuario = {
  rut: "",
  nombre: "",
  apellido: "",
  correo: "",
  ciudad: "",
  contrasena: "",
  direccion: "",
  ciudad: "",
  zip: "",
};

const UsuarioComponent = ({
  userAdd,
  usuarioEditado,
  setUsuarioEditado,
  userEdit,
}) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const {
    rut,
    nombre,
    apellido,
    correo,
    contrasena,
    direccion,
    ciudad,
    zip,
  } = usuario;
  //el hook useEffect siempre esta pendiente si la variable que tiene dentro de sus corchete cambia el debera hacer algo
  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        rut: "",
        nombre: "",
        apellido: "",
        correo: "",
        ciudad: "",
        contrasena: "",
        direccion: "",
        ciudad: "",
        zip: "",
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    //esta funcion se llama cada vez que nosotros escribimos algo en algun input de
    //nuestra pagina
    const changedFormValue = {
      //va a tener los datos que tiene usuario de los input que no he tocado
      //pero va a actualizar el atributo que cambio por su nuevo valor
      ...usuario,
      [e.target.name]: e.target.value,
    };
    setUsuario(changedFormValue);
  };
  return (
    <div class="container xxl">
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Formularios
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Menú
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  {/* <li><a class="dropdown-divider" href="#">mas accion</a></li> */}
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <br />
      </nav>
      <br />
      <br />
      <br />
      <div class="row">
        {/* aca se puede cambiar el titulo dependiendo de lo que se requiera hacer */}
        {usuarioEditado !== null ? (
          <h1>Editar Usuario</h1>
        ) : (
          <h1>Ingrese Usuario</h1>
        )}
        <div class="col-md-6">
          <label for="inputRut" class="form-label">
            Rut
          </label>
          <input
            type="text"
            class="form-control border-info"
            id="inputRut"
            /* se hace el llamado del valor que sera ingresado identificandolo */
            name="rut"
            value={rut}
            onChange={handleInputChange}
          />
        </div>
        <div class="col">
          <label for="inputNombre" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control border-info"
            placeholder="First name"
            aria-label="First name"
            id="inputNombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="col">
          <label for="inputApelido" class="form-label">
            Apellido
          </label>
          <input
            type="text"
            class="form-control border-info"
            placeholder="Last name"
            aria-label="Last name"
            id="inputApellido"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Correo
          </label>
          <input
            type="email"
            class="form-control border-info"
            id="inputEmail4"
            name="correo"
            value={correo}
            onChange={handleInputChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control border-info"
            id="inputPassword4"
            name="contrasena"
            value={contrasena}
            onChange={handleInputChange}
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Dirección
          </label>
          <input
            type="text"
            class="form-control border-info"
            id="inputAddress"
            placeholder="1234 Main St"
            name="direccion"
            value={direccion}
            onChange={handleInputChange}
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Ciudad
          </label>
          <input type="text" 
          class="form-control border-info" 
          id="inputCity" 
          name="ciudad"
          value={ciudad}
          onChange={handleInputChange}
            />
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Zip
          </label>
          <input type="text" 
          class="form-control border-info" 
          id="inputZip" 
          name="zip"
            value={zip}
            onChange={handleInputChange}
            />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input border-success"
              type="checkbox"
              id="gridCheck"
            />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}

        {usuarioEditado != null ?       
        <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>:<></>}
      </form>
      <br />
    </div>
  );
};

export default UsuarioComponent;
