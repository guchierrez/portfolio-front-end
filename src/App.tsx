import { useContext, useEffect, useState } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "./provider/MainContext";
import { Loading } from "./components/Loading";

function App() {
  const { translation } = useContext(MainContext);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [translation]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {loading ? <Loading /> : <RoutesMain />}
    </>
  );
}

export default App;
