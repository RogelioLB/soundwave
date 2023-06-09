import { useStore } from "@nanostores/react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiPlay, HiPause } from "react-icons/hi2";
import { currentTrack, player, playlist } from "../stores/player";

interface Props{
    title?:string,
    author?:string,
    thumbnail?:string,
    trackid?:number,
    src?:string,
}

export default function TrackPlay(track:Props){
    const $currentTrack = useStore(currentTrack)
    const $playlist = useStore(playlist)
    const $player = useStore(player)

    const handleClick = async() =>{
        await currentTrack.set(track)
        if($player.playing) await $player.pause()
        else await $player.play()
    }

    const handlePlay = async () =>{
        await currentTrack.set(track)
        await $player.play()
    }

    return(
        <div className="flex border-slate-50 border rounded-full items-center gap-2 justify-between">
            <AiOutlineHeart className="ml-4 text-xl max-sm:hidden"/>
            {
                ($currentTrack?.trackid === track.trackid) ? 
                <button onClick={handleClick} className={`max-md:text-sm ${$currentTrack?.trackid === track.trackid ? "bg-green-600" : ""} p-2 text-2xl flex items-center justify-center rounded-full border border-slate-50`}>
                {   $player.playing ? <HiPause /> : <HiPlay />}
                </button>
                :
                <button onClick={handlePlay} className={`max-md:text-sm p-2 text-2xl flex items-center justify-center rounded-full border border-slate-50`}>
                    <HiPlay />
                </button>
            }
        </div>
    )
}