import React from "react";

export default class MovieForm extends React.Component{

    onSubmit = (event) => {
        event.preventDefault()
        
    }

    render(){
        return(
            <div>
                <form>
                    
                    Movie Name:
                    <input type="text"></input><br/>
                    
                    Description:
                    <input type="text"></input><br/>
                    
                    Author:
                    <input type="text"></input><br/>
                    
                    Rating:
                    <input type="number" min ="1" max="5"></input><br/>
                    
                    <button className="btn btn-primary" onClick={ this.onSubmit() }>Submit</button>

                </form>
            </div>
        );
    }
}