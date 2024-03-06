import { Button } from "@chakra-ui/react";
import React from "react";
import ImageUploading from "react-images-uploading";
import { BsFillImageFill } from "react-icons/bs";
/* ------------------------------------------------------ */

/* ------------------------------------------------------ */
const IdentityPic = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="PlaceImages_container">
      <h3> لاستكمال إضافة صورة من هويتك</h3>
      <p>
      يمكنكم الآن استكمال إضافة صورة من هويتك في حسابك لتحقيق أقصى درجات الأمان والحماية.
      </p>

      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              mb="1rem"
              leftIcon={<BsFillImageFill />}
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              اختار صورك من هنا
            </Button>
            &nbsp;
            <Button mb='1rem' variant="outline" onClick={onImageRemoveAll}>
              مسح كل الصور
            </Button>
            <div className="all_images">
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <Button
                      size="sm"
                      colorScheme="yellow"
                      onClick={() => onImageUpdate(index)}
                    >
                      تعديل
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="red"
                      onClick={() => onImageRemove(index)}
                    >
                      مسح
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default IdentityPic;
