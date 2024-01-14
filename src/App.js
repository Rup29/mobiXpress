import './App.css';
import {Outlet
} from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer"
function App() {
  return (
  <div className='wapper'>
     <Header/>
    <Outlet />
    <Footer/>
  </div>
  );
}

export default App;
