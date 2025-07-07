import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js" ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieBox from "./Moviebox.js" ;
import Details from "./Details.js"
import Moviedetail from "./Moviedetail.js"
import { useEffect, useState} from "react" ;
import SignIn from './Signin.js';

function App() {
  const t1 = "Top-Rated>" ;
  const t2 = "Must Watch>" ;
  const t3 = "Classics>" ;
  const [loadingStates, setLoadingStates] = useState({
      1: true,
      2: true,
      3: true,
  });
  const handleSignIn = (user) => {
    console.log('Signed in as:', user);
  };

  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route 
            path = "/"
            element = {<>
              <h1 className = "desc" id = "first">{t1}</h1>
              <MovieBox page = {1} loading={loadingStates[1]} setLoadingStates={setLoadingStates}/>
              <h1 className = "desc">{t2}</h1>
              <MovieBox page = {2} loading={loadingStates[2]} setLoadingStates={setLoadingStates}/>
              <h1 className = "desc" >{t3}</h1>
              <MovieBox page = {3} loading={loadingStates[3]} setLoadingStates={setLoadingStates} />
            </>}
            />

            <Route
            path = "/details"
            element = {<Details/>}
            />

            <Route 
            path="/signin" 
            element={<SignIn onSignIn={handleSignIn} />} 
            />
          </Routes>
      </div>
      </Router>
  );
}
export default App;
