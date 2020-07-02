import React from 'react';
import { AnimateOnChange } from 'react-animation';
import Particles from 'react-particles-js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',
      author: 'Johann Wolfgang von Goethe'
    };
  }

  handleClick = () => {
    this.fetchQuote();
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    const getRandomQuote = fetch('https://api.quotable.io/random');
    getRandomQuote
      .then(res => res.json())
      .then(res => {
        this.setState({
          quote: res.content,
          author: res.author
        });
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="root">
        <Particles width="100vw" height="100vh" className="container" params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}></Particles>
        <div id="quote-box">
          <div id="text">
            <AnimateOnChange
              animationIn="fadeInUp"
              animationOut="fadeOut"
              durationOut={500}>{this.state.quote}</AnimateOnChange>
          </div>
          <div id="author">
            <AnimateOnChange
              animationIn="fadeInUp"
              animationOut="fadeOut"
              durationOut={500}>- {this.state.author}</AnimateOnChange>
          </div>
          <div id="footer">
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=programming&text="${this.state.quote}" ${this.state.author}`} id="tweet-quote"><i className="fa fa-twitter fa-lg"></i></a>
            <input type="button" onClick={this.handleClick} id="new-quote" value="New quote" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

