import React, { useEffect, useState } from "react";
import { fetchVideos } from "../api/file";
import { driveUrl } from "../utils";

function VideoGallery() {
  const [videoList, setVideoList] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetchVideos();
      setVideoList(data?.files);
    } catch (error) {
      console.log("error while fetching videos =", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex basis-4">
      {videoList.length > 0 &&
        videoList.map((res) => (
          <div className="text-red-500" key={res?.id}>
            <video
              src={`${driveUrl}=${res?.id}`}
              width={250}
              height={200}
              controls
            />
          </div>
        ))}
    </div>
  );
}

export default VideoGallery;
