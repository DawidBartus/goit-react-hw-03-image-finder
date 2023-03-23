import React from 'react';

const ImageGalleryIteam = props => {
  const { images } = props;
  console.log(images.length);

  return (
    <>
      {images.length > 0 &&
        images.map(({ id, webformatURL, type, tags }) => {
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
                src={webformatURL}
                alt={tags + type}
              />
            </li>
          );
        })}
    </>
  );
};
export default ImageGalleryIteam;
