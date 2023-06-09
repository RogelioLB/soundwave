import { useEffect, useState } from "react";
import { supabase } from "../database";
import useUser from "./useUser";

export default function useFavorite(id_track:number){
    const [favorite,setFavorite] = useState(false)
    const [user] = useUser()

    useEffect(()=>{
        const getFavorite = async () =>{
            if(user===undefined) return console.log('no loged in')
            const {data} = await supabase.from("favorites").select("tracks(id)").eq("id_user",user.id).filter("id_track","eq",id_track).limit(1).single()
            setFavorite(data?.tracks ? true : false)
        }

        getFavorite()
    },[user])

    return favorite
}