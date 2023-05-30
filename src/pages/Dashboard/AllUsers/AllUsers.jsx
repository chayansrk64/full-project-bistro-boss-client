import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserAlt, FaUserCog, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

    const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
    });

    const handleDelete = user => {
        console.log(user);
    }

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is an Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }


    return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h2 className="text-2xl">all users: {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) =>  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td> {user.role === "Admin" ? "Admin" : 
                     <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-white hover:text-orange-500 bg-orange-500"> <FaUserShield></FaUserShield>   </button>
                     
                    } </td>
                    <td>
                    <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white hover:text-red-500 bg-red-500"> <FaTrash></FaTrash>   </button>

                    </td>
                  </tr> )
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
