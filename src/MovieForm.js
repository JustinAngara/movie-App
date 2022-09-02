import React from "react";

export default class MovieForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movieName:"",
            description:"",
            author:"",
            rating:1
        }
    }
    
    onSubmit = (event) => {
        event.preventDefault()
        this.props.addMovie()
    }
    handleTypeChange = (event) => {
        console.log(event);
        
    }
    render(){
        return(
            <div>
                <form>
                    
                    Movie Name:
                    <input type="text" value={this.state.typeValue}
                     onChange={this.handleTypeChange}></input><br/>
                    
                    Description:
                    <input type="text" value={this.state.typeValue}
                     onChange={this.handleTypeChange}></input><br/>
                    
                    Author:
                    <input type="text" value={this.state.typeValue}
                     onChange={this.handleTypeChange}></input><br/>
                    
                    Rating:
                    <input type="number" min ="1" max="5" value={this.state.typeValue}
                     onChange={this.handleTypeChange}></input><br/>
                    
                    <button className="btn btn-primary" onClick={ this.onSubmit() }>Submit</button>

                </form>
            </div>
        );
    }
}