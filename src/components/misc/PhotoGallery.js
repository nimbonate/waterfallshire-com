import React, { useState, useCallback } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { GalleryImg } from "../../utils/styles/images";

export default function PhotoGallery(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    return (
      <>
        {
            props.photos && props.photos.map((photo, i) => {
                return (
                    <GalleryImg
                        margin="5px"
                        src={photo.src} 
                        alt={photo.alt}
                        onClick={() => openLightbox(i)} 
                        key={i}
                    />
                )
                
            })
        }
        {viewerIsOpen ? (
            <Lightbox
                mainSrc={props.photos[currentImage].src}
                nextSrc={props.photos[(currentImage + 1) % props.photos.length].src}
                prevSrc={props.photos[(currentImage + props.photos.length - 1) % props.photos.length].src}
                onCloseRequest={closeLightbox}
                onMovePrevRequest={() =>
                    setCurrentImage((currentImage + props.photos.length - 1) % props.photos.length)
                }
                onMoveNextRequest={() =>
                    setCurrentImage((currentImage + 1) % props.photos.length)
                }
            />
        ) : null}
      </>
    );
  }