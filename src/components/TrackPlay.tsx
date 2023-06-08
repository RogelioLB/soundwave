import { useStore } from "@nanostores/react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiPlay, HiPause } from "react-icons/hi2";
import { currentTrack, player } from "../stores/player";
import { useEffect, useState } from "react";

interface Props{
    title:string,
    author:string,
    thumbnail:string,
    trackid?:number,
    src:string,
}

export default function TrackPlay(track:Props){
    const $currentTrack = useStore(currentTrack)
    const $player = useStore(player)

    const handlePlay = () =>{
        currentTrack.set(track)
        $player.play()
    }

    return(
        <div className="flex border-slate-50 border rounded-full items-center gap-2 justify-between">
            <AiOutlineHeart className="ml-4 text-xl max-sm:hidden"/>
            <button onClick={handlePlay} className={`max-md:text-sm ${$currentTrack?.trackid === track.trackid ? "bg-green-600" : ""} p-2 text-2xl flex items-center justify-center rounded-full border border-slate-50`}>
                {($currentTrack?.trackid === track.trackid && $player.playing) ? <HiPause /> : <HiPlay />}
            </button>
        </div>
    )
}