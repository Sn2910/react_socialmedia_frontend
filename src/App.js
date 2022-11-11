import Home from "./pages/home/Home";
import PersonIcon from '@mui/icons-material/Person';
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
 
  return (
    <div>
     
     <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="/login"
          element={ <Login/>}
        />
           <Route
          path="/register"
          element={ <Register/>}
        />
           <Route
          path="/profile/:userId"
          element={ <Profile/>}
        />
      </Routes> 

    </div>
  );
}

export default App;
