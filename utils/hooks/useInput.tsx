import React, { ChangeEvent, useCallback, useState } from 'react';

type UseInput = [
  value: string,
  onChangeInput: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void,
  reset: () => void,
];

const useInput = (initialValue: string = ''): UseInput => {
  const [value, setValue] = useState(initialValue);

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  const reset = useCallback(() => {
    setValue('');
  }, []);

  return [value, onChangeInput, reset];
};

export default useInput;
