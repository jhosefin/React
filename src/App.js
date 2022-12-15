import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Usuariopage, AutoPage } from './pages';

const App = () =>{
  return(
    //desde el navegador
    <BrowserRouter>
    {/*vamos a tener distintas rutas*/}
    <Routes>
          {/* Especificamos cada ruta */}
      <Route path='/' element={<Homepage/>} />
      <Route path='/usuario' element={<Usuariopage/>} />
      <Route path='/Auto' element={<AutoPage/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;