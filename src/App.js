import './App.css';
import { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Loading from './components/Loading';
import FrontPage from './components/FrontPage';
import EndPage from './components/EndPage';
import Ask from './components/Ask';
import Envelope from './components/Envelope'; 
import Destroy from './components/Destroy';
import Qrcode from './components/Qrcode';
// import Reel from './components/Reel';
import GiftBoxAnimation from '../src/GiftBoxAnimation';
import Video from './components/Video';
import Swipper from './components/Swipper';
import Audio from './components/Audio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setLoading("False");
    }, 2000);
  }, [])



  return (
    <>
      <Router>
      <LoadingBar
        color='#ff00ff'
        progress={progress}
        height={4}
        onLoaderFinished={() => setProgress(0)
        }
      />
        <Routes>
          <Route path='/' element={loading === true ? <Loading /> :
            <div id='valentizer' className={`valentizer`}>
              <FrontPage />
            </div>} >
          </Route>
          <Route path='/envelope' element={< Envelope setProgress={setProgress} />}>
          </Route>
          <Route path='/ask' element={<Ask setProgress={setProgress} />}>
          </Route>
          <Route path='/endpage' element={<EndPage setProgress={setProgress} />}>
          </Route>
          <Route path='/destroy' element={<Destroy setProgress={setProgress} />}>
          </Route>
          <Route path='/qrcode' element={<Qrcode setProgress={setProgress} />}>
          </Route>
          <Route path='/reel' element={<GiftBoxAnimation setProgress={setProgress} />}>
          </Route>
          <Route path='/video' element={<Video setProgress={setProgress} />}>
          </Route>
          <Route path='/swipper' element={<Swipper setProgress={setProgress} />}>
          </Route>
          <Route path='/audio' element={<Audio setProgress={setProgress} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
