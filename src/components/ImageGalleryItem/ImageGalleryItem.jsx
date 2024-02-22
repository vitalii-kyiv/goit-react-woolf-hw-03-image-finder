const ImageGalleryItem = props => {
  const {src, alt} = props
  return (
    <li className="galleryItem">
      <img src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem