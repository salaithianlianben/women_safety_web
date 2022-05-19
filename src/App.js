import { Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './pages/auth/login';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Home from './pages/home';
import { auth, db, logout } from "./config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { DASHBOARD, LOGINPAGE, USERMANAGEMENT } from "./routes";
import { useEffect } from 'react';
import Navigator from './components/navigator';
import DashboardPage from './pages/dashboard';
import UserManagement from './pages/user-management';

function App() {

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    // console.log(user)
    if (user) return navigate("/dashboard");
    else return navigate("/login")

    // fetchUserName();
  }, [user, loading]);

  return user ? 
      <Navigator>
        <Routes>
      
      <Route path={DASHBOARD} element={<DashboardPage/>} exact />
      <Route path={USERMANAGEMENT} element={<UserManagement/>} exact />
      </Routes>
      </Navigator>:<Routes>
      <Route path={LOGINPAGE} element={<Login/>} exact />
      </Routes>
  ;
}

export default App;
