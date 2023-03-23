import ImageGalleryIteam from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = props => {
  const { images } = props;
  console.log('gere', images);
  return (
    <ul
      className="gallery"
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
