import React from "react";
import { Link } from "react-router";

function VideoCard() {
  return (
    <div className="relative w-full h-screen md:h-auto">
      <video
        className="w-full h-full object-cover md:h-[60vh]"
        autoPlay
        muted
        controls
        loop
      >
        <source
          src="../../../public/videos/project_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-zinc-50 bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4 text-center md:text-center">
          Create Your Team
        </h1>
        <Link to="/signup">
          <a
            href="#"
            className="text-xl bg-[#0891b2] px-6 py-3 rounded-full hover:bg-[#0891b2]"
          >
            Join Now
          </a>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;
