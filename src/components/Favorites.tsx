import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import Playlist from "./Playlist";
import { getFavorites } from "../database";
import type {TrackInfo} from "../types/types"

export default function FavoritesPlaylist(){
    const [user] = useUser()
    const [tracks,setTracks] = useState<TrackInfo[]>()

    useEffect(()=>{
        const getAllTracks = async () =>{
            setTracks(await getFavorites(user?.id as string))
        }
        getAllTracks()
    },[])

    return(
        <>
            {tracks && <Playlist tracks={tracks} />}
        </>
    )
}