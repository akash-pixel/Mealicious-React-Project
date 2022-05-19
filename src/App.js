import { GiKnifeFork } from "react-icons/gi";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Category from "./Components/Category";
import Pages from "./Components/Pages/Pages";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo>
            <Link to={"/Mealicious-ReactProject"}>
              <h1 className="companyName"> Mealicios</h1>
            </Link>
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled.div`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 200;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
