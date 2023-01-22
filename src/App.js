import logo from "./logo.svg";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Navbar title="Textify" about="About" home="Home" />
      {/* <Navbar /> */}
      <Textform />
    </>
  );
}

export default App;
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  home: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Jinga lala hu ",
};
