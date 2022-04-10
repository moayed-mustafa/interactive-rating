import { Dispatch, SetStateAction, useState } from 'react'

interface IUseBooleanreturn {
  value: boolean,
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void,
  setFalse: () => void,
  toggle: () => void,
}

function useBoolean(defaultValue?: boolean): IUseBooleanreturn {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(value => !value);

  return { value, setValue, setTrue, setFalse, toggle }
}

export default useBoolean;