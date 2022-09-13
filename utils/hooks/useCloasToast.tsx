import React, { useEffect } from "react";

const useCloseTimeout = (
  watch: boolean,
  callback: any,
  timeout: number = 2000,
) => {
  useEffect(() => {
    if (!watch) return;
    const time = setTimeout(callback, timeout);

    return () => {
      clearTimeout(time);
    };
  }, [watch]);
};
export default useCloseTimeout;
