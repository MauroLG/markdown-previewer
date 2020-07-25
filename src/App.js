import React from 'react';
import './App.css';
import marked from 'marked';
/*import parse from 'html-react-parser';*/
import DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

//Set options for marked
marked.setOptions({
    breaks: true,
    gmf: true,
})

//Setting the default editor text
let placeholder = 
`
# Welcome to my React Markdown Previewer for FCC!

## This is a sub-heading

### Here are some interesting stuff:

[This is a link to FreeCodeCamp](https://www.freecodecamp.org/)

\`\`\`
//Here I'm coding.
if (myFirstCode){
    console.log("Hello World!");
}

\`\`\`

\`console.log("Hi Human!")\`

* Here
    * we
        * have
            * a
                * list

> Here we have a block quote with a **bold text**

*And here is an image*:

![This is an alternative text](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)

`

class App extends React.Component {
constructor(props){
    super(props);
    this.state = {
        input: placeholder,
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
                <div className="containerEditor">
                    <div className="titleEditor"><FontAwesomeIcon icon={faTerminal} /> Editor</div>
                    <textarea className="textArea boxsizingBorder" rows="30" id="editor" value={this.state.input} onChange={this.handleChange}></textarea>                
                </div>
                <div className="containerPreview">
                    <div className="titlePreview"><FontAwesomeIcon icon={faMarkdown} /> Markdown Previewer</div>
                    <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(this.state.input))}} />
                </div>
            </div>
        );
    }
}

export default App;
