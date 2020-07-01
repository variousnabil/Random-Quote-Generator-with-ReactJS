import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',
      author: 'Johann Wolfgang von Goethe'
    };
  }
  componentDidMount() {
    const getRandomQuote = fetch('https://api.quotable.io/random');
    getRandomQuote.then(res => res.json())
      .then(res => {
        this.setState({
          quote: res.content,
          author: res.author
        });
      })
      .catch(err => console.log(err));
  }

  handleClick = () => {
    const getRandomQuote = fetch('https://api.quotable.io/random');
    getRandomQuote.then(res => res.json())
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
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">- {this.state.author}</div>
        <div id="footer">
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote}" ${this.state.author}`} id="tweet-quote"><i className="fa fa-twitter fa-lg"></i></a>
          <input type="button" onClick={this.handleClick} id="new-quote" value="New quote" />
        </div>
      </div>
    )
  }
}

export default App;
