import React from 'react';

const ImageGalleryIteam = props => {
  const { images } = props;

  return (
    <>
      {images.length > 0 &&
        images.map(({ id, largeImageURL, type, tags }) => {
          return (
            <li
              className="gallery-item"
              key={id}
              style={{
                listStyle: 'none',
              }}
            >
              <img
                style={{
                  width: '300px',
                }}
                src={largeImageURL}
                alt={tags + type}
              />
            </li>
          );
        })}
    </>
  );
};
export default ImageGalleryIteam;
