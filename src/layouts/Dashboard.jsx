import { FaBars, FaCalendar, FaContao, FaHome, FaMailBulk, FaShopify, FaShoppingCart, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

 
const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/*  Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Sidebar content here  */}
            <li> <Link> <FaHome></FaHome> User Home </Link> </li>
            <li> <Link> <FaCalendar></FaCalendar> Reservations </Link> </li>
            <li> <Link> <FaWallet></FaWallet> Payment History </Link> </li>
            <li> <Link> <FaShoppingCart></FaShoppingCart> My Cart </Link> </li>
            <div className="divider"></div>
            <li> <Link to="/"> <FaHome></FaHome> Home</Link> </li>
            <li> <Link to="/menu"> <FaBars></FaBars> Our Menu</Link> </li>
            <li> <Link to="/order/salad"> <FaShopify></FaShopify> Shop</Link> </li>
            <li> <Link to="/contact"> <FaMailBulk></FaMailBulk> Contact</Link> </li>
             

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;