import { useState } from 'react'
// import { Button, Navbar } from 'flowbite-react';

import Navbar from './componentes/navbar';
import Calesita from './componentes/calesita';
import TarjetaEventos from './componentes/tarjetaEventos';
import TarjetaCentros from './componentes/tarjetaCentros';
import FAQ from './componentes/FAQ';
import PiePag from './componentes/PiePag';

import hogar from './img/padre-cajade.png'

function App() {


  return (
    <div className='px-32 pb-10 bg-gray-500'>
      <Navbar />
      {/* primer calesita la principal, llamaria interactuaria con el backend para consumir slides que se definen en el dashboard */}
      <Calesita />

      {/* segunda calesita mas chica, con noticias, y tambien un espacio para eventos. Ambas cosas se definen en el dashboard y serian accesibles por la pagina contenido */}
      <div className='flex flex-row justify-between '>
        <div className='w-[70%]'>
          <Calesita />
        </div>
        <div className='w-[30%] bg-white'><TarjetaEventos /></div>
      </div>

      {/* quienes somos, seria contenido estatico una vez que lo haga, tiene que ser responsive */}
      <div className='h-56 sm:h-64 xl:h-80 2xl:h-96 bg-green-600'>
        <div >Quienes Somos</div>
        <div >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veritatis exercitationem suscipit animi provident quibusdam recusandae repellat culpa, quos beatae modi, ipsa natus obcaecati. Tenetur similique molestiae vel esse dolores?</div>
        <img src={hogar} alt="" className='max-h-[15rem]' />
      </div>

      {/* como producimos, tambien seria contenido estatico una vez que lo haga, tiene que ser responsive */}
      <div className='h-56 sm:h-64 xl:h-80 2xl:h-96 bg-yellow-600'>
        <div >como producimos</div>
        <div >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam veritatis exercitationem suscipit animi provident quibusdam recusandae repellat culpa, quos beatae modi, ipsa natus obcaecati. Tenetur similique molestiae vel esse dolores?</div>
        <img src={hogar} alt="" className='max-h-[15rem]' />
      </div>

      <div className='bg-rose-500 p-5'>
        <div className='p-5'>Los centros</div>
        <div className='flex flex-row justify-between'>
          <TarjetaCentros />
          <TarjetaCentros />
          <TarjetaCentros />
        </div>
      </div>

      <FAQ />

      <PiePag />
    </div>
  )
}

export default App
