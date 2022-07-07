import { useState, useEffect } from "react";

function useRequestDelay(request) {
  const [loading, setLoading] = useState("loading");
  const [data, setData] = useState();

  useEffect(() => {
    async function APIRequest() {
      try {
        const response = await request();
        setData(response.data);

        if (response.status === 200) {
          setLoading("success");
        }
      } catch (error) {
        alert("Algo mal ocurrio " + error.message);
      }
    }

    APIRequest();
  }, []);

  return {
    loading,
    data,
    setData,
  };
}

export default useRequestDelay;
