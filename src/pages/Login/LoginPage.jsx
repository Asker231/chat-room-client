import { Link } from 'react-router-dom'
import style from './login.module.css'

function LoginPage() {
  return (
    <div className={style.login}>
      <div className={style.wrap}>
      <div className={style.lable}>
            <h1>Welcome Back</h1>
            <p>Enter your email and password to access your account</p>
        </div>
        <form className={style.form}>
        <TextField type="Email" pls={"Enter your email . . ."}/>
        <TextField type="Password" pls={"Enter your password . . ."}/>
        <Button lable={"Login"}/>
        </form>
        <div className={style.redirect}>
            Нет аккаунта ? <Link to={"/auth/register"}>Регистрация</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

// eslint-disable-next-line react/prop-types
const TextField = ({type,pls})=>{
  return  <div className={style.textField}>
  <input type={type} placeholder={pls}/>
</div>
}

// eslint-disable-next-line react/prop-types
const Button = ({lable})=>{
  return <button className={style.button}>{lable}</button>
}