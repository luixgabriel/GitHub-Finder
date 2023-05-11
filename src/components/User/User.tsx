import { UserProps } from "../../types/user"

const User = ({login, avatar_url, followers, following, location}: UserProps) => {
    console.log(login)
  return (
    <div>
      User
    </div>
  )
}

export default User
