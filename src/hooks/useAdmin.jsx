import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from './useAxiosSecure';

 
const useAdmin = () => {
   const {user} = useAuth();
   const [axiosSecure] = useAxiosSecure();
   // used axiosSecure and react query
   const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
     queryKey: ['isAdmin', user?.email],
     queryFn: async () => {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log(res);
        return res.data.Admin;
     }
     
   })

   return[isAdmin, isAdminLoading]

};

export default useAdmin;