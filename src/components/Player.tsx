import { useStore } from "@nanostores/react";
import Thumbnail from "./Thumbnail";
import { currentTrack, player } from "../stores/player";

export default function Player(){
    const $currentTrack = useStore(currentTrack)
    const $player = useStore(player)

    const handlePlaying = () =>{
        document.title = `SoundWave | Playing ${$currentTrack?.title}`
        player.set({...$player,playing:true})
    }
    const handlePause = () => {
        player.set({...$player,playing:false})
    }

    if($currentTrack===null) return null

    return(
        <div data-turbo-permanent id="audio-player" className="fixed bottom-0 animate-fade-up flex bg-neutral-900 py-4 px-8 rounded-t-3xl w-screen">
            <audio src={$currentTrack.src} autoPlay hidden onPlaying={handlePlaying} onPause={handlePause}/>
            <Thumbnail track_author={$currentTrack.author} track_title={$currentTrack.title} track_thumbnail={$currentTrack.thumbnail}/>
        </div>
    )
}