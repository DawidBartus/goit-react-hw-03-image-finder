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
        margin: '0 auto',
        gap: '30px',
        flexWrap: 'wrap',
        maxWidth: '1000px',
      }}
    >
      <ImageGalleryIteam images={images} />
    </ul>
  );
};

export default ImageGallery;
