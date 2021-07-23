import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <header>
        <FontAwesomeIcon icon="stopwatch" color="#117bc2" className="iconH" />
        <p>React Counter v2</p>
      </header>
    </>
  );
};

export default Header;
