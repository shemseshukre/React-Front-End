
import './App.css';
import SignIn from './components/pages/SignIn'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Sidenav from './components/pages/Sidenav'
import { About } from './components/pages/About';
import { Settings } from './components/pages/Settings';
import { Home } from './components/pages/Home';



// const myStyle = {
//   backgroundImage:
//    "url('"https://unsplash.com/@sarahdorweiler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sarah Dorweiler</a> on <a href="https://unsplash.com/photos/green-leafed-plant-on-clear-glass-vase-filled-with-water-x2Tmfd1-SgA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"')",
//   height: "100vh",
//   marginTop: "-70px",
//   fontSize: "50px",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// };

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
