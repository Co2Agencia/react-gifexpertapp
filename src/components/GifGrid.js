import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category)

    // getGifs() // Ahora se ejecuta con useEffect
    return (
        <div>
            <h3>{ category }</h3>
            
            { loading && <p className="animate__animated animate__flash"> Cargando.. </p> }

            <div className="lista-gifs">
                {
                    images.map(img => (
                        <GifGridItem key={ img.id } { ...img }/>
                    ))
                }
            </div>            
        </div>
    )
}
