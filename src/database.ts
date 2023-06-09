import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types/supabase";

export const supabase = createClient<Database>(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY
,{
    auth:{detectSessionInUrl:true,persistSession:true,storage:localStorage}
})

export const getFavorites = async (userid:string) =>{
    if(userid===undefined){
        alert('Not logged in')
        location.replace('/')
    }
    const {data} = await supabase.from("favorites").select("tracks(id,track_url,track_name,track_thumbnail,albums(album_name,id_author:artists(artist_name)))").filter("id_user","eq",userid)
    const tracks = data?.map(({tracks})=>{
        return {...tracks}
    })
    console.log(tracks)
    return tracks
}

export const newFavorite = async (trackid:number,userid:string) =>{
    if(!userid){
        alert('Not logged in')
        return false
    }
    const {data} = await supabase.from("favorites").select("id,tracks(id),id_user").filter("id_track","eq",trackid).filter("id_user","eq",userid).limit(1).maybeSingle()
    console.log(data)
    if(data?.id_user) {
        await supabase.from("favorites").delete().eq("id",data.id).eq("id_user",userid)
        return false
    }
    await supabase.from("favorites").insert({id_track:trackid,id_user:userid})
    return true
}