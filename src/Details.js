import React from 'react';
import { Link } from 'react-router-dom';
import Movies from './Movies';
import getMovies from './getMovies';

export default class Details extends React.Component {
  constructor(){
    super();
    this.state = {
      movieTitle: {}
    }
  }

  componentDidMount() {
    let details = this.props.match.params.details;
    let movieTitle = getMovies().find(movie => {return movie.id === details})
      this.setState({
        movieTitle: movieTitle
      })
   

  }

  render(){
    return(
      <div>
          <h1>{this.state.movieTitle.name} </h1>
          <Link to='/'>Back to home page</Link>
         
        </div>
    );
  }
}

