
import { Navigate } from 'react-router-dom'

function RequierAuth(){
  return <Navigate to={'/auth/login'}/>
}

export default RequierAuth