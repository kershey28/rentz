import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import Essentials from './essentials/Essentials';
import PopupForm from './portals/PopupForm';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

import Ducati from './pages/Ducati';
import Suzuki from './pages/Suzuki';
import BMW from './pages/BMW';
import Harley from './pages/Harley';
import Triumph from './pages/Triumph';
import Kawasaki from './pages/Kawasaki';

const App = () => {
  // to connect the observer to showcase
  const location = useLocation();
  const showcaseHomeRef = useRef(null);
  const showcaseDucatiRef = useRef(null);
  const showcaseSuzukiRef = useRef(null);
  const showcaseBMWRef = useRef(null);
  const showcaseKawasakiRef = useRef(null);
  const showcaseHarleyRef = useRef(null);
  const showcaseTriumphRef = useRef(null);

  const findingshowcaseActiveRef = () => {
    if (location.pathname === '/ducati') return showcaseDucatiRef;
    if (location.pathname === '/suzuki') return showcaseSuzukiRef;
    if (location.pathname === '/bmw') return showcaseBMWRef;
    if (location.pathname === '/kawasaki') return showcaseKawasakiRef;
    if (location.pathname === '/harley') return showcaseHarleyRef;
    if (location.pathname === '/triumph') return showcaseTriumphRef;
    if (location.pathname === '/') return showcaseHomeRef;
  };
  const showcaseActiveRef = findingshowcaseActiveRef();

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="container-main">
      {/* Navs */}
      <Essentials showcaseRef={showcaseActiveRef} />

      {/* Popup */}
      {showModal && <PopupForm onClose={closeModalHandler} />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home ref={showcaseHomeRef} />} />

        <Route
          path="/ducati"
          element={
            <Ducati ref={showcaseDucatiRef} onShowModal={showModalHandler} />
          }
        />
        <Route
          path="/suzuki"
          element={
            <Suzuki ref={showcaseSuzukiRef} onShowModal={showModalHandler} />
          }
        />
        <Route
          path="/bmw"
          element={<BMW ref={showcaseBMWRef} onShowModal={showModalHandler} />}
        />
        <Route
          path="/kawasaki"
          element={
            <Kawasaki
              ref={showcaseKawasakiRef}
              onShowModal={showModalHandler}
            />
          }
        />
        <Route
          path="/harley"
          element={
            <Harley ref={showcaseHarleyRef} onShowModal={showModalHandler} />
          }
        />
        <Route
          path="/triumph"
          element={
            <Triumph ref={showcaseTriumphRef} onShowModal={showModalHandler} />
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
