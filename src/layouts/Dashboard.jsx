import { FaBars, FaBook, FaCalendar, FaCalendarCheck, FaComments, FaHome, FaMailBulk, FaShopify, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

 
const Dashboard = () => {

  const [cart] = useCart();

  //TODO: load data from the server to have dynamic admin based on data
  // const isAdmin = true;

  const [isAdmin] = useAdmin()


    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/*  Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80  text-base-content">
            {/* Sidebar content here  */}

            {
              isAdmin ? <>
              
            <li> <NavLink to="/dashboard/adminhome"> <FaHome></FaHome> Admin Home </NavLink> </li>
            <li> <NavLink to="/dashboard/additem"> <FaUtensils></FaUtensils> Add Items </NavLink> </li>
            <li> <NavLink to="/dashboard/manageitems"> <FaBars></FaBars> Manage Items </NavLink> </li>
            <li> <NavLink to="/dashboard/bookings"> <FaBook></FaBook> Manage Bookings </NavLink> </li>
            <li> <NavLink to="/dashboard/allusers"> <FaUsers></FaUsers>  All Users </NavLink> </li>
             
              </> : <>
              
              <li> <NavLink to="/dashboard/userhome"> <FaHome></FaHome> User Home </NavLink> </li>
            <li> <NavLink to="/dashboard/reservations"> <FaCalendar></FaCalendar> Reservations </NavLink> </li>
            <li> <NavLink to="/dashboard/history"> <FaWallet></FaWallet> Payment History </NavLink> </li>
            <li>
               <NavLink to="/dashboard/mycart"> <FaShoppingCart></FaShoppingCart> My Cart
               <span className="badge badge-secondary">+{cart?.length || 0}</span>
                </NavLink>
             </li>
             <li> <NavLink to="/dashboard/review"> <FaComments></FaComments> Add Review </NavLink> </li>
             <li> <NavLink to="/dashboard/booking"> <FaCalendarCheck></FaCalendarCheck> My Booking </NavLink> </li>

              
              </>
            }

           
            <div className="divider"></div>
            <li> <NavLink to="/"> <FaHome></FaHome> Home</NavLink> </li>
            <li> <NavLink to="/menu"> <FaBars></FaBars> Our Menu</NavLink> </li>
            <li> <NavLink to="/order/salad"> <FaShopify></FaShopify> Shop</NavLink> </li>
            <li> <NavLink to="/contact"> <FaMailBulk></FaMailBulk> Contact</NavLink> </li>
             

          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;