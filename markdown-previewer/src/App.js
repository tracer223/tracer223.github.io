import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.joshhendersondev.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

const marked = require("marked");

class App extends Component {

  state = {
    markdown: placeholder
  };

  markdownUpdate = (markdown) => {
    this.setState({markdown});
  }

  render() {

    let {markdown}=this.state;

    return (
      <div className="App container">
        <div>
         <FormGroup controlId="formControlsTextarea">
          <ControlLabel id="inputLabel">Markdown Input</ControlLabel>
          <FormControl componentClass="textarea" id="editor" value={markdown} onChange={(event) => this.markdownUpdate(event.target.value)}></FormControl>
         </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div id="preview" dangerouslySetInnerHTML = {{__html: marked(markdown)}}>
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
