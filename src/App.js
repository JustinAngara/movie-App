
import './App.css';
import MovieForm from "./MovieForm"
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      movieList: [
        {
          movieName: "Cars 2",
          description: "movie about cars",
          author: "disney",
          rating: 5
        }
      ]
    }
  }

  render(){
    return(
      <div className="center">
      
        <MovieForm />
   


      </div>
    );
  }
}

