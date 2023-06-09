import {TbLogin} from "react-icons/tb/index"
import useUser from "../hooks/useUser"

export default function Avatar(){
    const [user,loading] = useUser()
    if(loading) return null

    return(
        <>
            {!loading && user ? 
                <a href="/profile" className="max-sm:w-6 max-sm:h-6 w-10 h-10 rounded-full overflow-hidden">
                    <img src={user?.user_metadata.avatar_url} />
                </a> : 
                <a href="/signin" className="text-xl font-medium flex gap-2 items-center"><TbLogin /><span className="max-sm:hidden">SignIn</span></a>
            }
        </>
    )
}