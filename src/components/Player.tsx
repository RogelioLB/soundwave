import { useStore } from "@nanostores/react";
import Thumbnail from "./Thumbnail";
import { currentTrack, player } from "../stores/player";
import Controls from "./Controls";
import TrackBar from "./TrackBar";
import { useRef } from "react";

export default function Player(){
    const $currentTrack = useStore(currentTrack)
    const $player = useStore(player)
    const audioRef = useRef<HTMLAudioElement>(null)

    const handlePlay = () =>{
        player.set({...$player,playing:true})
    }

    const handlePlaying = () =>{
        document.title = `SoundWave | Playing ${$currentTrack?.title}`
        player.set({...$player,duration:audioRef.current?.duration as number,currentTime:audioRef.current?.currentTime as number})
    }

    const handlePause = () => {
        player.set({...$player,playing:false})
    }

    const handleEnded = () =>{
        $player.skip()
    }

    if($currentTrack===null) return null

    return(
        <div className="flex bg-neutral-900 py-4 px-8 rounded-t-3xl w-screen gap-48 items-center max-sm:justify-between max-sm:gap-2">
            <audio ref={audioRef} src={$currentTrack?.src} hidden onPlaying={handlePlay} onTimeUpdate={handlePlaying} onPause={handlePause} onEnded={handleEnded}/>
            <div>
                <Thumbnail track_author={$currentTrack?.author} track_title={$currentTrack?.title} track_thumbnail={$currentTrack?.thumbnail}/>
            </div>
            <div className="flex flex-1 max-sm:flex-none gap-4">
                <Controls />
                <TrackBar />
            </div>
        </div>
    )
}