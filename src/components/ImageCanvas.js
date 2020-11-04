import React, { useEffect } from 'react'
import p5 from 'p5'
import useSketch from '../hooks/useSketch'

function ImageCanvas({ width, height, showImage }) {
  const sketch = useSketch(width, height, 'canvas-ref')

  useEffect(() => {
    let isActive = true
    if (isActive) new p5(sketch)

    return () => {
      isActive = false
    }
  }, [sketch])

  return (
    <div className='image__canvas'>
      {showImage && (
        <button
          onClick={() => window.location.reload()}
          className='btn btn--primary btn--xl btn__canvas'
        >
          Generate Another Image
        </button>
      )}
      <div id='canvas-ref'></div>
    </div>
  )
}

export default ImageCanvas
