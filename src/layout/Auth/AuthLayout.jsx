
import { Outlet } from 'react-router-dom'
import style from './auth.module.css'

function AuthLayout() {
  return (
    <div className={style.AuthLayout}>
        <div className={style.left}>
            <div className={style.lable}>Chat</div>
        </div>
        <Outlet/>
    </div>
  )
}

export default AuthLayout