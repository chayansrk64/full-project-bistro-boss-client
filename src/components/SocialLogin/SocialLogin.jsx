import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            const userDetails = {name: loggedUser.displayName, email: loggedUser.email}

            fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(userDetails)
              })
              .then(res => res.json())
              .then(() => {
                navigate(from, {replace: true});
              })

        })

    }
  return (
    <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
