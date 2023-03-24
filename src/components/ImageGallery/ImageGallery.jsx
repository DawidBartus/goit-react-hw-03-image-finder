import ImageGalleryIteam from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = props => {
  const { images, handleClick } = props;

  return (
    <ul
      className="gallery"
      onClick={handleClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px auto',
        gap: '15px',
        flexWrap: 'wrap',
        maxWidth: '1000px',
      }}
    >
      <ImageGalleryIteam images={images} />
    </ul>
  );
};

export default ImageGallery;
