import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
import { Document,Page } from 'react-pdf/dist/entry.parcel';

export default class resume extends Component {

  state = {
    numPages: null,
    pageNumber: 1,
  }
 

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file='./Data/CV_Richard.pdf'
          onLoadSuccess={this.onDocumentLoadSuccess.bind(this)}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
