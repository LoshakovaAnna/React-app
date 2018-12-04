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
        const articles = this.props.art;

        const text = articles.text;
        const title = articles.title;

        const body = this.state.isOpen && <section className="card-text">{text}</section>;
        return (
            <div className="card mx-auto" style={{width: "50%" }}>
                <div className="card-header">
                    <h2>{title}
                        <button onClick={this.handleClick} className="btn btn-primary float-right">
                        {this.state.isOpen ? "open" : "closed"}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h3 className="card-subtitle text-muted">creation date: {(new Date().toDateString())}</h3>
                </div>
            </div>
        )
        };

    
    handleClick = () => {
        console.log("click is work");
        this.setState ({ isOpen : !this.state.isOpen    });
    }

}


export default Article;