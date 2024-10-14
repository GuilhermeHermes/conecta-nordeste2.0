import {auth} from "@/auth"

const UsersPage = async () => {
  const session = await auth()
  session?.user.role
    return (  
        <div>
          {JSON.stringify(session)}
        </div>
    );
}
 
export default UsersPage