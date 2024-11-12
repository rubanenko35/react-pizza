import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import Loader from "./Loader.jsx";

function AppLayout(props) {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';


  return (
    <div className="layout">
      {isLoading && <Loader/>}
      <Header></Header>

      <main>
        <Outlet></Outlet>
      </main>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
