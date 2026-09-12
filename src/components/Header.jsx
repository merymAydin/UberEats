import { useSelector } from 'react-redux'
import Gravatar from "react-gravatar";

const Header = () => {
    const user = useSelector((state)=>state.user);
    console.log(user);
    console.log(user);
  return (
    <div>
      {user && <span>{user.name}</span>}
      {user && <Gravatar email={user.email} />}
    </div>
  )
}

export default Header
