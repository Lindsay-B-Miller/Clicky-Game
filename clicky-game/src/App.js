import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard"
import './App.css';
import images from "./images.json";
import shuffle from "shuffle-array";

const collection = { images };
// shuffle(collection.images);

// Counter
class App extends React.Component {
  state = {
    count: 0,
    highScore: 0,
    images,
    result: ""
  };

  handleClick = (id) => {
    console.log(this.state.images)
    let guessedCorrectly = false;
    const newArray = this.state.images.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem
    })
    guessedCorrectly
      ? this.handleCorrectGuess(newArray)
      : this.handleIncorrectGuess(newArray)
  };

  handleCorrectGuess = (newArray) => {
    this.highScore()
    this.setState({
      count: this.state.count + 1,
      images: shuffle(newArray),
      result: ""
    });
    ;
  }

  highScore = () => {
    if (this.state.highScore <= this.state.count) {
      this.setState({
        highScore: (this.state.count + 1)
      })
    }
  }

  handleIncorrectGuess = () => {
    this.setState({
      images: shuffle(collection.images),
      count: 0,
      result: "You lose! Try again"
    })
  }

  render() {
    return (
      < div >
        <Title count={this.state.count} highScore={this.state.highScore} result={this.state.result}>Clicky Game!</Title>
        <Wrapper>
          {
            this.state.images.map(image => {
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
