import { useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const bindValue = {
    value,
    onChange: (e) => setValue(e.target.value)
  }

  const resetValue = () => {
    setValue(initialValue)
  }

  return { value, bindValue, resetValue }
}

export default useInput
