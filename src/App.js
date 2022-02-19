import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import pokedex from "./assets/pokedex.jpg"
import TeamEditor from "./pages/TeamEditor";

const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
  
  * {
    font-family: 'Lato', sans-serif;
    margin: 0;

    a {
      text-decoration: none;
    }
  }

  body {
    height: 100vh;
    background: url(${pokedex});
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
  }
`;

function App() {
  return (
    <main>
      <Global styles={cssGlobal} />   
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/team-editor" element={<TeamEditor />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
