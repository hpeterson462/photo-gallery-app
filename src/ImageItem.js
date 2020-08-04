import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return <img src={this.props.image} alt={this.props.title} />
    }
}
