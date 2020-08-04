import React from 'react';
import images from './data.js';
import './App.module.css';
import ImageList from './ImageList.js';
import { render } from '@testing-library/react';
import Header from './Header.js';

const option = [
  "narwhal",
  "rhino",
  "unicorn",
  "unilego",
  "triceratops",
  "markhor",
  "mouflon",
  "addax",
  "chameleon",
  "lizard",
  "dragon"
]

class App extends React.Component {
  state = {
    keyword: 'narwhal'
  }

  handleDropdown = (e) => {
    const animal = e.target.value;
    this.setState({ keyword: animal })
  }

  render() {
    const filterImages = images.filter(image => image.keyword === this.state.keyword)

    return (
      <>
        <Header />

        <select onChange={this.handleDropdown}>
          {
            option.map(animal => <option key={animal} value={animal}>{animal}</option>)
          }
        </select>
        {
          filterImages.map(image => <p></p>)
        }

        <ImageList images={filterImages} />
      </>
    )
  }
}

export default App;
