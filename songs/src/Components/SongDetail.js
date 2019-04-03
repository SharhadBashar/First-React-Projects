import React from 'react';
import {connect} from 'react-redux';

class SongDetail extends React.Component {
    render() {
        if (!this.props.song) {
            return <div>Select a song</div>;
        }
        return (
            <div>
                {this.props.song.title} <br />
                {this.props.song.duration}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail); 