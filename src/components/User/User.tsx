import { UserProps } from "../../types/user"

const User = ({login, avatar_url, followers, following, location}: UserProps) => {
    console.log(login)
  return (
    <div>
        <img src={avatar_url} alt={login}/>
    </div>
  )
}

export default User
