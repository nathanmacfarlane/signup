import { useCallback, useEffect } from "react";

export const useKeypress = (keyCode: number, onPress: () => void) => {
  const callBack = useCallback((event) => {
    if (event.keyCode === keyCode) {
      onPress()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", callBack, false);

    return () => {
      document.removeEventListener("keydown", callBack, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}