import React, { useState, useEffect, useRef } from 'react';
import { usePdf } from 'react-pdf-js';

import '../styles/PDF.css';

const PDFViewer = () => {
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(0.8);
  const [pages, setPages] = useState(null);

 

  const renderPagination = (page, pages) => {
    if (!pages) {
      return null;
    }
    let previousButton = <p className="previous" onClick={() => setPage(page - 1)}> { "<" }</p>;
    if (page === 1) {
      previousButton = <p className="previous disabled">{ "<" }</p>;
    }
    let nextButton = <p className="next" onClick={() => setPage(page + 1)}>{ ">" }</p>;
    if (page === pages) {
      nextButton = <p className="next disabled">{ ">" }</p>;
    }

    return (
        <div className="pager">
          {previousButton}
          {nextButton}
        </div>
    );

  }


  const canvasEl = useRef(null);
 
  const [loading, numPages] = usePdf({
    file: 'Data/CV_Richard.pdf',
    page,
    scale,
    canvasEl,
  });
 
  useEffect(() => {
    setPages(numPages);
  }, [numPages]);
 
 
  return (
    <div>
      {loading }
      {renderPagination(page, pages)}
      <canvas ref={canvasEl} />
    </div>
  );
}
 
export default PDFViewer;