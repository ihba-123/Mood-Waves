import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { app} from '../config/Firebase.conifg';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
function GoogleLogin() {
  const firebaseauth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  // const navigate = useNavigate();
  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseauth,googleProvider).then((useCre) => {
      console.log(useCre);
    })
  }
  return (
    <button className="flex items-center justify-center bg-white text-black py-2 px-4 border border-gray-300 rounded-lg w-full hover:border-gray-500 transition duration-300"onClick={loginWithGoogle} >
  <FcGoogle  className="w-5 h-5 mr-3" />
  <span className="font-bold text-gray-600">Sign in with Google</span>
</button>


  )
}

export default GoogleLogin
