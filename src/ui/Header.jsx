import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header(props) {
  return (
    <header>
      <Link to='/'>Fast React Pizza</Link>
      <SearchOrder />
      <p>Oleks</p>
    </header>
  );
}

export default Header;
