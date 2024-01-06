
import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer1() {
    const opts = {
        width: '100%',
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: 'PrwEOURVKtA', 
        },
    };

    return <YouTube videoId="PrwEOURVKtA" opts={opts} />;
}

export default VideoPlayer1;