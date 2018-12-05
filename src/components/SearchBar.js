import React from 'react';
import ReactDom from 'react-dom';


class SearchBar extends React.Component{
    state = {term : ''}

    onFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    // onInputChange(event){
    //     console.log(event.target.value);
    //     this.setState({term : event.target.value})
    //     // this.props.onSubmit(this.state.term)
    // }

    render() {
        return (
            // <div className = "ui segment">
                <form className="ui form" onSubmit = {this.onFormSubmit}>
                <div className="ui action input">
                {/* <label htmlFor="imageSearch">Image-Search</label> */}
                <input 
                placeholder = "Search For Images..."
                id="imageSearch" 
                type='text' 
                value = {this.state.term} 
                onChange={e => this.setState({term : e.target.value})}
                // onChange = {(e) => this.onInputChange(e)} 
                />
                <button className="ui icon button">
                <i className="search icon"></i>
                </button>
                </div>
                
                </form>
            
            //  </div>
        )   
    }

}

export default SearchBar;