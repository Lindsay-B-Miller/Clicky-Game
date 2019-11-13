import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard"
import './App.css';
import images from "./images.json";
import shuffle from "shuffle-array";

const collection = { images };
shuffle(collection.images);

// Counter
class App extends React.Component {
  state = {
    count: 0,
    highScore: 0
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    shuffle(collection.images)
  };


  render(props) {
    return (
      < div >
        <Title count={this.state.count} highScore={this.state.highScore}>Clicky Game!</Title>
        <Wrapper>
          {images.map(image => {
            return <ImageCard
              image={image.image}
              id={image.id}
              clicked={image.clicked}
              handleClick={this.handleClick}
            />
          })
          }
        </Wrapper >
      </div >
    )
  }
}


export default App;
