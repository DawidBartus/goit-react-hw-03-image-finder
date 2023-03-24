import React from 'react';

const ImageGalleryIteam = props => {
  const { images } = props;
  const galleryItemStyle = {
    listStyle: 'none',
    width: '300px',
    display: 'flex',
    alignItems: 'flex-end',
  };
  const imageStyle = {
    width: '300px',
    height: '200px',
    objectFit: 'fill',
  };
  return (
    <>
      {images.length > 0 &&
        images.map(({ id, largeImageURL, previewURL, type, tags }) => {
          return (
            <li className="gallery-item" key={id} style={galleryItemStyle}>
              <img
                style={imageStyle}
                dataid={largeImageURL}
                src={previewURL}
                alt={tags + type}
              />
            </li>
          );
        })}
    </>
  );
};
export default ImageGalleryIteam;
