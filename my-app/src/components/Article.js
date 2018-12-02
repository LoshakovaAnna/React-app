import React, {Component} from 'react';

class Article extends Component{
  /*
    constructor(props){
        super(props);
        this.state = {
            isOpen : false
        };
    }*/
    state = {
        isOpen : false
    };

    render(){
       
    const text = this.props.text;
    const title = this.props.title;

    const body = this.state.isOpen && <section>{text}</section>;
    return (
        <div>
            <h2>{title}
                <button onClick={this.handleClick} style={{marginLeft:"10px"}}>
                {this.state.isOpen ? "open" : "closed"}
                </button>
            </h2>
            {body}
            <h3>creation date: {(new Date().toDateString())}</h3>
        </div>
    )
    };

    
    handleClick = () => {
        console.log("click is work");
        this.setState ({ isOpen : !this.state.isOpen    });
    }

}


export default Article;