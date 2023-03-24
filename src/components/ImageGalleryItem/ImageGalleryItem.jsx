import React from 'react';

const ImageGalleryIteam = props => {
  const { images } = props;
  console.log(images);
  return (
    <>
      {images.length > 0 &&
        images.map(({ id, largeImageURL, previewURL, type, tags }) => {
          return (
            <li
              className="gallery-item"
              key={id}
              data-id={largeImageURL}
              style={{
                listStyle: 'none',
              }}
            >
              <img
                style={{
                  width: '300px',
                }}
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
