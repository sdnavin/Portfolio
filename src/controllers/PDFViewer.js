import React, { useState, useEffect, useRef } from 'react';
import { usePdf } from 'react-pdf-js';

import '../styles/PDF.css';

const PDFViewer = () => {
  let sizeOffset=0.26;
  const [page, setPage] = useState(1);
  console.log(window.innerWidth);
  const [scale, setScale] = useState((window.innerWidth>1000)?1:((window.innerWidth/1000)+sizeOffset));
  const [pages, setPages] = useState(null);

  var lastWindowSize=0;


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


 
  const HandleWindowResize=()=>{
    if((lastWindowSize===0&&window.innerWidth>1000)||(lastWindowSize===1000&&window.innerWidth<1000)){
        lastWindowSize=(window.innerWidth>1000)?1000:0;
        setScale((window.innerWidth>1000)?1:((window.innerWidth/1000)+sizeOffset));
    }
  }
 
  window.addEventListener('resize', HandleWindowResize);

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

