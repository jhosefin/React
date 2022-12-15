import React, { useCallback, useState } from "react";//se añade el useState que es un Hook que permite añadir el estado de React al componente de la función user.
import { useNavigate } from "react-router-dom";
import {
  UsuarioComponent,
  BotonComponent,
  TablaUsuarioComponent,
} from "../components";

const usuario1 = [
  {
    nombre: "Joseph",
    apellido: "Joestar",
    correo: "jo.jo@gmail.com",
    rut: "9563214-8",
    ciudad: "caracas",
  },
  {
    nombre: "Josuke",
    apellido: "Higashikata",
    correo: "jo.jo@gmail.com",
    rut: "1563214-8",
    ciudad: "caracas",
  },
];

const Usuariopage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));
  //En este momento state vale lo mismo que usuario 1
  //genera una función setteadora que me va a permitir cambiar los datos de usuario1 sin afectarlo directamente
  const [user, setUser] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado]= useState(null);

  //esta función me permite eliminar un usuario
  const userDelete = (rutUsuario) => {
    const changeUser = user.filter((usuario) => usuario.rut != rutUsuario);
    setUser(changeUser);
  };
  //esta me permite añadirlo
  const userAdd =(usuario)=>{
    const addUsuario =[
      //esta mantiene los datos que tengo en user y me agrega lo que yo tengo aqui(usuario)
      ...user, usuario
    ]
    // luego actualizamos o setteamos el state
    setUser(addUsuario);
  };

  //esta funcion me permite editar al usuario 
  const userEdit =(usuarioEditado)=>{
    //aqui se le indica si el rut del usuario que quiero editar existe solo edite, pero si no existe ingresa un usuario
    const editUser = user.map(usuario =>(usuario.rut === usuarioEditado.rut ? usuarioEditado: usuario))

    setUser(editUser);
  }
  return (
    <div>
        {/* aca añadimos los nombres de las funciones */}
      <UsuarioComponent userAdd ={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
      <BotonComponent infoBoton={"Ir a autos"} handleOnClick={handleOnClick} />
      <TablaUsuarioComponent usuarios={user} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>
    </div>
  );
};

export default Usuariopage;
