import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from "./ImageGallery.module.css"

const ImageGallery = (props) => {
  const data = props.images
  return (
    <ul className={css.gallery}>
      {data.map(image =>(
        <ImageGalleryItem key={image.id} src={image.webformatURL} alt={image.tags}/>
      ))}
    </ul>
  );
};
export default ImageGallery;
