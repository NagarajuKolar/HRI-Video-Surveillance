import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Uploads.css';
import { FaUpload, FaTimes } from 'react-icons/fa';
import { IoMdCloudUpload } from "react-icons/io";

function Uploads() {
    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);

    const handleVideoUpload = (e) => {
        const files = Array.from(e.target.files);
        const videoData = files.map((file) => ({ file, url: URL.createObjectURL(file), }));
        setVideos((prev) => [...prev, ...videoData]);
    };
    const handleRemove = (index) => {
        const newVideos = [...videos];
        URL.revokeObjectURL(newVideos[index].url);
        newVideos.splice(index, 1);
        setVideos(newVideos);
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const imageData = files.map((file) => ({
            file,
            url: URL.createObjectURL(file)
        }));
        setImages((prev) => [...prev, ...imageData]);
    };


    const handleRemoveImg = (index) => {
        const newImages = [...images];
        URL.revokeObjectURL(newImages[index].url);
        newImages.splice(index, 1);
        setImages(newImages);
    };


    return (
        <>
            <div className='full-cont'>
                <div className="container upload-wrapper ">
                    <div className="row">

                        <div className="col-md-6 upload-box text-center d-flex flex-column justify-content-center align-items-center">
                            <FaUpload size={60} className="upload-icon mb-3" />
                            <p className="mb-1 fw-semibold">Drag and drop video files to upload</p>
                            <label className="btn uploading-btn mt-3">
                                <IoMdCloudUpload className='me-2 upload-btnlogo' />Select Files
                                <input type="file" accept="video/*" multiple onChange={handleVideoUpload} hidden />
                            </label>
                        </div>

                        <div className="col-md-6 ">
                            <h6 className="mb-3 text-center text-white fw-bold">Video Previews</h6>
                            <div className="video-preview-grid ms-5">
                                {videos.map((video, index) => (
                                    <div className="video-wrapper" key={index}>
                                        <button className="close-btn" onClick={() => handleRemove(index)} aria-label="Remove">
                                            <FaTimes size={12} />
                                        </button>
                                        <div className="video-thumb-wrapper" title={video.file.name}>
                                            <video src={video.url} width="100" height="100" className="video-thumb" muted preload="metadata" controls
                                                onClick={(e) => e.target.requestFullscreen()} />
                                            <div className="video-overlay">{video.file.name}</div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container upload-imagewrapper">
                    <div className="row">

                        <div className="col-md-6 upload-imagebox text-center d-flex flex-column justify-content-center align-items-center">
                            <FaUpload size={60} className="upload-icon mb-3" />
                            <p className="mb-1 fw-semibold"> Drop image files For Identification</p>
                            <label className="btn uploading-btn mt-3">
                                <IoMdCloudUpload className='me-2 upload-btnlogo' />Select Images
                                <input type="file" accept="image/*" multiple onChange={handleImageUpload} hidden />
                            </label>
                        </div>

                        <div className="col-md-6">
                            <h6 className="mb-3 text-center text-white fw-bold">Image Previews</h6>
                            <div className="video-preview-grid ms-5">
                                {images.map((img, index) => (
                                    <div className="image-wrapper" key={index}>
                                        <button className="imgpre-close-btn" onClick={() => handleRemoveImg(index)} aria-label="Remove">
                                            <FaTimes size={12} />
                                        </button>
                                        <div className="video-thumb-wrapper" title={img.file.name}>
                                            <img src={img.url} width="100" height="100" alt="preview" className="video-thumb" />
                                            <div className="video-overlay">{img.file.name}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Uploads;
