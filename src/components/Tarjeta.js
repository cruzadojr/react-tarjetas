import React from 'react'
import  PropTypes from 'prop-types'


import './Tarjetas.css'


function Tarjeta({title, imageRaiz, text, url}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__rotateIn'>
        <div className='overflow'>
            <img src={imageRaiz} alt='' className='card-img-top'/>
        </div>
       
        <div className='card-body text-warning'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-light'>
                {
                    text ? text: 'El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.'
                }
            </p>
            <a href={url} className='btn btn-outline-info rounded-0' target="_blank" rel="noreferrer">
                Navega a esta pelicula
            </a>
        </div>
    </div>
  )
}

// validacion de titulo, texto, url, imagen porque se exporta como string
Tarjeta.propTypes = {                       
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageRaiz: PropTypes.string,
    text: PropTypes.string

}

export default Tarjeta