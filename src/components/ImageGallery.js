import React, { useEffect, useState } from "react";
import { fetchImages } from "../api/file";
import { driveUrl } from "../utils";

function ImageGallery() {
  const [imageList, setImageList] = useState([]);

  const getImages = async () => {
    try {
      const data = await fetchImages();
      console.log("image data =", data);
      setImageList(data?.files);
    } catch (error) {
      console.log("error while fetching videos =", error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      {imageList?.length > 0 &&
        imageList.map((data) => (
          <div key={data.id}>
            <img src={`${driveUrl}=${data?.id}`} width={400} height={400} />
          </div>
        ))}
    </div>
  );
}

export default ImageGallery;
