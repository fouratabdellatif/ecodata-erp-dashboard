import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import MyForm from "components/MyForm";

function App() {

  // console.log(user);

  return (
    <div className="app">
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MyForm />} />
      </Routes>
    </div>
  );
}

export default App;
