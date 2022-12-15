import React from "react";
const TablaAutoComponent = ({autos, deleteCar, setAutoEditado}) =>{
    return(
        <div>
<table class="table table-bordered border-primary container xxl">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Marca</th>
      <th scope="col">Modelo</th>
      <th scope="col">Color</th>
      <th scope="col">Serial</th>
      <th scope="col">Motor</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
  {autos.map((auto)=>  (
      <tr>
      <th scope="row">1</th>
      <td>{auto.marca}</td>
      <td>{auto.modelo}</td>
      <td>{auto.color}</td>
      <td>{auto.serial}</td>
      <td>{auto.motor}</td>
      <td>
      <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteCar(auto.serial);
                  }}
                >
                 Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setAutoEditado(auto);
                  }}
                >
                 Editar
                </button>

      </td>
    </tr>
    ))}
  </tbody>
</table>
</div>
    );
};
export default TablaAutoComponent;