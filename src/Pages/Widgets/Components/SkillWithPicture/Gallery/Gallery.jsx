import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Gallery1 from '../../../../../assets/images/gallery1.jpg'
import Gallery2 from '../../../../../assets/images/gallery2.jpg'
import Gallery3 from '../../../../../assets/images/gallery4.jpg'
import Gallery4 from '../../../../../assets/images/gallery1.jpg'

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [ Gallery1, Gallery2, Gallery3, Gallery4, Gallery1, Gallery3 ];

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setPhotoIndex((photoIndex + 1) % images.length);
    };

    const prevImage = () => {
        setPhotoIndex((photoIndex + images.length - 1) % images.length);
    };

    return (
        <div>
            <div className="image-grid">
                {images.map((src, index) => (
                    <div key={index} className="image-wrapper">
                        <img
                            src={src}
                            alt={`Image ${index}`}
                            onClick={() => openLightbox(index)}
                            className='galleryIcons'
                        />
                    </div>
                ))}
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={prevImage}
                    onMoveNextRequest={nextImage}
                />
            )}
        </div>
    );
};

export default Gallery;
