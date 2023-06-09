import { useStore } from "@nanostores/react";
import Track from "./Track";
import { currentTrack, player, playlist } from "../stores/player";
import { useEffect } from "react";
import { HiPlay } from "react-icons/hi2";
import type { TrackInfo } from "../types/types";


export default function Playlist({tracks}:{tracks:TrackInfo[] | null  | undefined}){
    const $playlist = useStore(playlist)
    const $player = useStore(player)

    const playPlaylist = async () =>{
        await loadPlaylist()
        if($playlist!==null && $playlist!==undefined){
            await currentTrack.set($playlist[0])
            console.log($playlist)
            await $player.play()
        }
    }

    const loadPlaylist = async() =>{
        const tracksInfo = tracks?.map((track)=>{
            return {
                title:track.track_name,
                thumbnail:track.track_thumbnail,
                trackid:track.id,
                src:track.track_url,
                author:track.albums?.id_author?.artist_name
            }
        })
        await playlist.set(tracksInfo)
    }
    useEffect(()=>{
        if($playlist === null || $playlist === undefined) loadPlaylist()
    },[])

    return(
        <div className="bg-zinc-900 p-8 rounded-3xl mb-28 flex flex-col gap-9 relative">
            <button onClick={async()=>await playPlaylist()} className="bg-green-600 p-3 rounded-full -top-3 -left-3 absolute">
                <HiPlay />
            </button>
            {
                tracks?.map(track=>(<Track key={track.id} trackid={track.id} src={track.track_url} title={track.track_name} thumbnail={track.track_thumbnail} author={track.albums?.id_author?.artist_name} />))
            }
        </div>
    )
}