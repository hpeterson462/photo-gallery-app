import React from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.images.map((image) => <ImageItem key={image.title} image={image.url} />)
                }
            </div>
        )
    }
}