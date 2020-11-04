import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const ImageForm = ({
  setShowImage,
  width,
  height,
  bindHeightValue,
  bindWidthValue,
  resetHeightValue,
  resetWidthValue
}) => {
  const [errorMessage, setErrorMessage] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    if (!width || !height)
      return setErrorMessage('Both of the fields are required!')
    if (isNaN(width) || isNaN(height)) {
      return setErrorMessage('Invalid field types!')
    }

    setShowImage(true)
    setErrorMessage('')
  }

  const handleErrorAlert = () => {
    setErrorMessage('')
    resetWidthValue()
    resetHeightValue()
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        {errorMessage && (
          <div className='error__container alert alert--danger'>
            {' '}
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              style={{ marginRight: '.5rem' }}
            />
            {errorMessage}
            <button className='btn btn__close' onClick={handleErrorAlert}>
              &times;
            </button>
          </div>
        )}
        <input type='text' placeholder='Width of image' {...bindWidthValue} />
        <input type='text' placeholder='Height of image' {...bindHeightValue} />
        <button className='btn btn--primary btn--lg'>Generate</button>
      </form>
    </div>
  )
}

export default ImageForm
