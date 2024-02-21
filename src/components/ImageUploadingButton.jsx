import ImageUploading from "react-images-uploading";
import editBackgroundIcon from "../images/editBackgroundIcon.png";

const ImageUploadingButton = ({ value, onChange, ...props }) => {
  return (
    <ImageUploading value={value} onChange={onChange}>
      {({ onImageUpload, onImageUpdate }) => (
        <button
          color="primary"
          onClick={value ? onImageUpload : () => onImageUpdate(0)}
          {...props}
        >
          <img className="" src={editBackgroundIcon} alt="/" />
        </button>
      )}
    </ImageUploading>
  );
};

export default ImageUploadingButton;
