import React from 'react';
import images from './data.js';

const option = [
    "1",
    "2",
    "3",
    "100"
]

export default class Horns extends React.Component {
    state = {
        horns: '1'
    }

    handleDropdown = (e) => {
        const animalHorn = e.target.value;
        this.setState({ horns: animalHorn })
    }

    render() {
        const filterHorns = images.filter(image => image.horns === Number(this.state.horns))
        return (
            <>
                <select onChange={this.handleDropdown}>
                    {
                        option.map(animalHorn => <option key={animalHorn} value={animalHorn}>{animalHorn}</option>)
                    }
                </select>
                {
                    filterHorns.map(images => <img src={images.url} alt={images.description} />)
                }
            </>
        )
    }
}
