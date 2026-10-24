
import { useState, useEffect } from "react";

function useLocalStorage(key, nilaiAwal) {
  const [data, setData] = useState(() => {
    const dataTersimpan = localStorage.getItem(key);

    if (dataTersimpan !== null) {
      return JSON.parse(dataTersimpan);
    }

    return nilaiAwal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
}

export default useLocalStorage;
