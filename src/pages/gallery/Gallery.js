import React, { useState } from 'react'
import "./gallery.scss"

import galleryData from '../../gallery'
import { Link } from 'react-router-dom'

const Gallery = () => {
    const [allPictures, setAllPictures] = useState(galleryData.data.gallery)

    const galleryItem = allPictures.map(item => 
        <div className="galleryItem" key={item.id}>
            <Link to={`/gallery/view/${item.id}`}>
                <img src={item.url} alt="" />
                <dev className="title">{item.title}</dev>
            </Link>
        </div>
    )

    return (
        <div className='gallery'>
            <div className="galleryContainer">
                {galleryItem}
            </div>
        </div>
    )
}

export default Gallery