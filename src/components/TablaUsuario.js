import React from "react";
import BotonComponent from "./Boton";

const TablaUsuarioComponent = ({usuarios, deleteUser, setUsuarioEditado}) =>{
    return(
        <div>
<table class="table table-success table-striped container xxl">
  <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Rut</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Correo</th>
        <th scope="col">Dirección</th>
        <th scope="col">Ciudad</th>
        <th scope="col">Zip</th>
        <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    {usuarios.map(usuario=>  (
      <tr>
      <th scope="row">1</th>
      <td>{usuario.rut}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.apellido}</td>
      <td>{usuario.correo}</td>
      <td>{usuario.direccion}</td>
      <td>{usuario.ciudad}</td>
      <td>{usuario.zip}</td>
      <td>
        {/* se añaden los botones con las funciones correspondientes de eliminar y editar */}
      <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.rut);
                  }}
                >
                 Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario);
                  }}
                >
                 Editar
                </button>

      </td>
    </tr>
    ))}

  </tbody>
</table>
<br/>
<br/>
</div>
    );
}

export default TablaUsuarioComponent;