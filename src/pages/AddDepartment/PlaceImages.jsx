import { Button } from "@chakra-ui/react";
import React from "react";
import ImageUploading from "react-images-uploading";
import { BsFillImageFill } from "react-icons/bs";
import { Upload } from 'antd';
import ImgCropProps from 'antd-img-crop';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
/* ------------------------------------------------------ */

/* ------------------------------------------------------ */
const PlaceImages = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="center mt-6">
            <div className="container-cus p-3">

        <div className="PlaceImages_container center">
            <h3>مكان اقامتك</h3>
            <p>
                خصوصيتك أولا : تحن نحافظ على سرية عنوانك السكني للمسافر فقط بعد تأكيد
                حجزه
            </p>

            <ImageUploading className="center"
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
                                    <div className=''>


                        <Button
                            mb="1rem"
                            leftIcon={<BsFillImageFill />}
                            style={isDragging ? { color: "green" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                            >
                            اختار صورك من هنا
                        </Button>
                </div>
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
                                            colorScheme="green"
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
                            </div>
                                            </div>
    );
};

export default PlaceImages;
