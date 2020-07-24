import React from 'react';
import './App.css';
import marked from 'marked';
/*import parse from 'html-react-parser';*/
import DOMPurify from 'dompurify';

//Set options for marked
marked.setOptions({
    breaks: true,
    gmf: true,
})

class App extends React.Component {
constructor(props){
    super(props);
    this.state = {
        input: '',
    };

    this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
    this.setState({
        input: event.target.value,
    });
}

    render(){
        return (
            <div className="App">
                <textarea className="textArea" id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(this.state.input))}} />
            </div>
        );
    }
}

export default App;
