import React from "react";
import "./Videos.css"
import SingleVideo from "./SingleVideo";

function Videos(){
    return(
        <div className="videos">
            <div className="row">
                <SingleVideo
                 thumbImg="https://www.shutterstock.com/shutterstock/photos/2174922633/display_1500/stock-vector-cartoon-beard-handsome-character-casual-man-seat-at-desk-working-on-laptop-a-developer-of-project-2174922633.jpg"
                 profileImg="https://yt3.ggpht.com/ytc/APkrFKZCB8Du5V9Tx6DvgFSwCnUWv8wXya2n97oRc7aF_w=s88-c-k-c0x00ffffff-no-rj"
                 title="MERN Tutorial for Beginners" 
                 channelName="Programming With Mosh"
                 views="5.2M"
                 timestamps="11 months ago"
                 videoDuration="1:30:49"
                />
            </div>
            <div className="row">
                <SingleVideo
                 thumbImg="https://www.shutterstock.com/shutterstock/photos/1568210053/display_1500/stock-vector-react-emblem-blue-atom-on-black-backgroung-1568210053.jpg"
                 profileImg="https://yt3.ggpht.com/ytc/APkrFKZCB8Du5V9Tx6DvgFSwCnUWv8wXya2n97oRc7aF_w=s88-c-k-c0x00ffffff-no-rj"
                 title="ReactJs Full Course with Projects" 
                 channelName="Programming Knowledge"
                 views="1.2M"
                 timestamps="1 month ago"
                 videoDuration="10:3:09"
                />
            </div>
            <div className="row">
                <SingleVideo
                 thumbImg="https://www.shutterstock.com/shutterstock/photos/1925021480/display_1500/stock-vector-javascript-emblem-on-the-black-background-with-code-lines-vector-illustration-1925021480.jpg"
                 profileImg="https://yt3.ggpht.com/ytc/APkrFKZCB8Du5V9Tx6DvgFSwCnUWv8wXya2n97oRc7aF_w=s88-c-k-c0x00ffffff-no-rj"
                 title="JavaScript Tutorial" 
                 channelName="JavaScript Mastery"
                 views="100k"
                 timestamps="1 year ago"
                 videoDuration="2:30:49"
                />
            </div>
            <div className="row">
                <SingleVideo
                 thumbImg="https://www.shutterstock.com/shutterstock/photos/1757407322/display_1500/stock-vector-vector-collection-of-web-development-shield-signs-html-css-javascript-react-js-angular-vue-1757407322.jpg"
                 profileImg="https://yt3.ggpht.com/ytc/APkrFKZCB8Du5V9Tx6DvgFSwCnUWv8wXya2n97oRc7aF_w=s88-c-k-c0x00ffffff-no-rj"
                 title="FullStack Tutorial One shot" 
                 channelName="Telusco"
                 views="2.2M"
                 timestamps="10 months ago"
                 videoDuration="11:30:49"
                />
            </div>
            <div className="row">
                <SingleVideo
                 thumbImg="https://www.shutterstock.com/shutterstock/photos/723749530/display_1500/stock-vector-background-screen-saver-on-breaking-news-breaking-news-live-on-world-map-background-vector-723749530.jpg"
                 profileImg="https://yt3.ggpht.com/ytc/APkrFKZCB8Du5V9Tx6DvgFSwCnUWv8wXya2n97oRc7aF_w=s88-c-k-c0x00ffffff-no-rj"
                 title="Top headlines for today" 
                 channelName="India Today"
                 views="40k"
                 timestamps="1 hour ago"
                 videoDuration="30:49"
                />
            </div>
            <div className="row">
                <SingleVideo
                 thumbImg="https://www.shutterstock.com/shutterstock/photos/2346844363/display_1500/stock-photo-singing-song-thrush-turdus-philomelos-perched-at-green-background-photo-from-ognyanovo-in-2346844363.jpg"
                 profileImg="https://yt3.ggpht.com/ytc/APkrFKZCB8Du5V9Tx6DvgFSwCnUWv8wXya2n97oRc7aF_w=s88-c-k-c0x00ffffff-no-rj"
                 title="Inside Amazon Rainforest" 
                 channelName="discovery"
                 views="6.2M"
                 timestamps="10 months ago"
                 videoDuration="8:49"
                />
            </div>
            
        </div>
    )
}
export default Videos;