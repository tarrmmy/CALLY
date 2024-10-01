import React from 'react'
import { useSetRecoilState } from 'recoil'
import authAtom from '../atoms/auth.atom'
import { notification } from 'antd'
import { useNavigate } from 'react-router'
import Loading from '../loading'
import { supabaseClient } from '../../supabase.config'

function Logout() {
  const navigate = useNavigate()
  const setAuth = useSetRecoilState(authAtom)
  setAuth({ isLoggedIn: false, user: null })
  supabaseClient.auth.signOut();
  setTimeout(() => {
    navigate("/sign-in")
    notification.success({ message: "Logged out", key: "update-able" })
  }, 2000);
  return (<Loading />)
}

export default Logout