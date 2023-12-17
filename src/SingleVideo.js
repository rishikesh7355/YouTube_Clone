import React from "react";

function SingleVideo({thumbImg, profileImg, title, channelName, views, timestamps, videoDuration}) {
    return(
        <div className="col-4">
            <div className="thumbnail-img relative">
                <img src={thumbImg} alt="" 
                className="thumb-img pointer"
                />
                <span className="videos_duration absolute">
                    {videoDuration}
                </span>
                <div className="video_header">
                    <span>
                        {title}
                    </span>
                </div>
                <div className="description_option d-flex">
                    <div className="profile_img">
                        <img src={profileImg}
                        className="channel_image pointer"
                        />
                    </div>
                    <div className="title d-flex align-items-center justify-contenet-center">
                        <span className="channelname">
                            {channelName}
                        </span>
                        <div className="time_description">
                            <span className="views">
                                {views} views .
                            </span>
                            <span className="timestamps">
                                {timestamps}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleVideo;