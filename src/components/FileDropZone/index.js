import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

import './styles.css';

class FileDropZone extends Component {
  constructor() {
    super()
    this.state = {
      files: [], 
      dropzoneActive: false }
  }

  onDrop(files){
    this.setState({
      files
    });
  }

  onDrag() {
    this.setState({
      visible: true,
      dropzoneActive: false
    })
  }

  onDragEnter() {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false
    })
  }
  
  render() {
      const overlayStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: '2.5em 0',
        background: 'rgba(0,0,0,0.5)',
        textAlign: 'center',
        color: '#fff'
      };
      return (
        <Dropzone id="file-drop-zone" 
          disableClick
          onDrop={this.onDrop.bind(this)}
          onDragEnter={this.onDragEnter.bind(this)}
          onDragLeave={this.onDragLeave.bind(this)}>
            { this.dropzoneActive && <div style={overlayStyle}>Drop files...</div> }
            <div>
              <p>Drop a file or folder to start upload.</p>
            <aside>
              <h2>Dropped Files</h2>
              <ul>
                {
                  this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
              </ul>
            </aside>
          </div>
        </Dropzone>
      );
    }
  }
  
  export default FileDropZone;
  