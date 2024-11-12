import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to='/'>Fast React Pizza</Link>
      <p>Oleks</p>
    </header>
  );
}

export default Header;
