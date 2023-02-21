import { useEffect, useState } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

// estos signos juntos : && ,  significan un ampersand logico que lo puedes poner para abreviar una condicion de si o no

export const GifGrid = ({ category }) => {

    const { images, IsLoading } = useFetchGifs( category);

    console.log({ images, IsLoading})

    return (
        <>

            <h3>{ category }</h3>
            {   
                IsLoading && ( <h2>Cargando...</h2> )
            
            }

            <div className="card-grid">
            
                {
                    images.map( (image) => ( 
                        <GifItem 
                            key={ image.id }
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
