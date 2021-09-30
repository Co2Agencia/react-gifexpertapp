import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="lista-gif animate__animated animate__fadeInUp">
            <img src={url} alt={title}/>
            <h3>{ title }</h3>
        </div>
    )
}
