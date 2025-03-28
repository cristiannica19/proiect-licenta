import React from 'react'
import { auth } from '../firebase/firebase'
import useShowToast from './useShowToast'
import { useSignOut } from "react-firebase-hooks/auth"
import useAuthStore from '../store/authStore'

const useLogout = () => {
const [signOut, isLoggingOut, error] = useSignOut(auth)
const showToast = useShowToast()
const logOutUser = useAuthStore((state) => state.logout)

const handleLogout = async () => {
try {
    await signOut()
    localStorage.removeItem("user-info")
    logOutUser()
}
catch (error) {
    showToast("Error", error.message, "error")

}
}
  return {handleLogout, isLoggingOut, error}
  
}

export default useLogout