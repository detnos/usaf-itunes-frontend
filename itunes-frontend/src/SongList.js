import React from 'react';

function SongList(props) {

    return (
        <div className="SongList">
            <li>
                Title: {this.props.song.trackName} 
            </li>
        </div>
    );
}

export default SongList;
