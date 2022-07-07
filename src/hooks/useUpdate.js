import { useState } from "react";

function useUpdate() {
  const [update, setUpdate] = useState("success");
  return {
    update,
    setUpdate,
  };
}

export default useUpdate;
