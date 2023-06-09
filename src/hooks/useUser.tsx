import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { supabase } from "../database"
import { user } from "../stores/user"
import type { User } from "@supabase/supabase-js"

export default function useUser() : [User | undefined,boolean] {
    const $user = useStore(user)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const getUser = async () =>{
            setLoading(true)
            const {data:{session}} = await supabase.auth.getSession()
            user.set(session?.user)
            setLoading(false)
        }

        getUser()
    },[])

    return [$user,loading]
}