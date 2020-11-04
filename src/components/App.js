import React, { useState } from 'react'
import useInput from '../hooks/useInput'
import ImageCanvas from './ImageCanvas'
import '../styles/App.css'
import ImageForm from './ImageForm'

function App() {
  const {
    value: width,
    bindValue: bindWidthValue,
    resetValue: resetWidthValue
  } = useInput('')
  const {
    value: height,
    bindValue: bindHeightValue,
    resetValue: resetHeightValue
  } = useInput('')
  const [showImage, setShowImage] = useState(false)

  return (
    <div className='container'>
      {!showImage ? (
        <ImageForm
          setShowImage={setShowImage}
          bindHeightValue={bindHeightValue}
          bindWidthValue={bindWidthValue}
          width={width}
          height={height}
          resetWidthValue={resetWidthValue}
          resetHeightValue={resetHeightValue}
        />
      ) : (
        <ImageCanvas width={width} height={height} showImage={showImage} />
      )}
    </div>
  )
}

export default App
