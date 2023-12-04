import React from 'react'
import Tarjeta from './Tarjeta'

import brave from '../assets/brave.jpg'
import terminator from '../assets/terminator.jpeg'
import dia from '../assets/dia.jpeg'



const cuadros = [
    {
        id: 1,
        title: 'Corazon Valiente',
        image: brave,
        url: 'https://www.youtube.com/watch?v=uY6oRW9Vn4c'
    },
    {
        id: 2,
        title: 'Terminator 2',
        image:  terminator, 
        url: 'https://www.youtube.com/watch?v=cJ4R3_t5DEY'
    },
    {
        id: 3,
        title: 'Día de Entrenamiento',
        image: dia,
        url: 'https://www.youtube.com/watch?v=WDzNQetxuJc'
    },

]

function Tarjetas() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cuadros.map(cuadro => (
                    <div className='col-md-4' key={cuadro.id}>
                       <Tarjeta title={cuadro.title} imageRaiz={cuadro.image} url={cuadro.url} />    
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Tarjetas