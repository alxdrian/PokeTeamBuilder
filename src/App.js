import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
  
  * {
    font-family: 'Lato', sans-serif;
    margin: 0;
  }

  body {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background-color: #F6F6F9;
    padding: 5px;
  }
`;

function App() {
  return (
    <main>
      <Global styles={cssGlobal} />   
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
