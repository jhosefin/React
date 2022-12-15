import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AutoFormComponent, TablaAutoComponent,BotonComponent } from "../components";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const auto1=[
  {
      marca:'nissan',
      modelo:'pequeño',
      color:'rojo',
      serial:'9563214-8',
      motor:'0909987',
  },
  {
    marca:'nissan',
    modelo:'pequeño',
    color:'azul',
    serial:'987687-0',
    motor:'0909987'
  }
  ];

const AutoPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/",{},[navigate]))
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: pink[600],
          '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[600],
        },
      }));
      const label = { inputProps: { 'aria-label': 'Color switch demo' } };

      const [car, setCar] = useState(auto1);
      const [autoEditado, setAutoEditado]= useState(null);

    const autoDelete =(serialAuto)=>{
        const changeCar = car.filter(auto => auto.serial !== serialAuto);
        setCar(changeCar)
    }

    const carAdd =(auto)=>{
      const addAuto =[
        //mantenme los datos que tengo en user y agregame lo que yo tengo aqui(usuario)
        ...car, auto
      ]
      // luego actualizamos o setteamos el state
      setCar(addAuto);
    };
  
    const carEdit =(autoEditado)=>{
      const editCar = car.map(auto =>(auto.serial === autoEditado.serial ? autoEditado: auto))
  
      setCar(editCar);
    }
    return(
        <div>
            <AutoFormComponent carAdd={carAdd} autoEditado={autoEditado} setAutoEditado={setAutoEditado} carEdit={carEdit}/>
            <GreenSwitch {...label} defaultChecked />
            <TablaAutoComponent autos = {car} deleteCar = {autoDelete} setAutoEditado={setAutoEditado}/>
            <BotonComponent infoBoton={"Ir a Home"} handleOnClick={handleOnClick}/>
        </div>
    );
};

export default AutoPage;
