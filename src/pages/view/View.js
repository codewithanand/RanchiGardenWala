import React, { useState } from 'react'
import './view.scss'

import galleryData from '../../gallery'

const View = () => {
    const pictureId = window.location.pathname.split("/")[3];

    const [picture, setPicture] = useState(galleryData.data.gallery[pictureId-1])

    console.log(typeof(String(picture.url)))

    return (
        <div className='view'>
            <div className="container">
                <div className="left">
                    <img src={`/upload/${String(picture.url)}`} alt="" />
                </div>
                <div className="right">
                    <div className="title">{picture.title}</div>
                    <div className="desc">{picture.description}</div>
                </div>
            </div>
        </div>
    )
}

export default View