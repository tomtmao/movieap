import React, { Component } from 'react';
import { Player, BigPlayButton } from 'video-react';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Player autoPlay src={this.props.url}>
                <BigPlayButton position="center" />
            </Player>
        );
    }
}

export default Video;