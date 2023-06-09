import { useStore } from "@nanostores/react";
import Thumbnail from "./Thumbnail";
import { currentTrack, player, playlist } from "../stores/player";
import Controls from "./Controls";

export default function Player(){
    const $currentTrack = useStore(currentTrack)
    const $player = useStore(player)
    const $playlist = useStore(playlist)

    const handlePlaying = () =>{
        document.title = `SoundWave | Playing ${$currentTrack?.title}`
        player.set({...$player,playing:true})
    }

    const handlePause = () => {
        player.set({...$player,playing:false})
    }

    const handleEnded = () =>{
        $player.skip()
    }

    if($currentTrack===null) return null

    return(
        <div className="flex bg-neutral-900 py-4 px-8 rounded-t-3xl w-screen items-center justify-between">
            <audio src={$currentTrack?.src} hidden onPlaying={handlePlaying} onPause={handlePause} onEnded={handleEnded}/>
            <Thumbnail track_author={$currentTrack?.author} track_title={$currentTrack?.title} track_thumbnail={$currentTrack?.thumbnail}/>
            <Controls />
        </div>
    )
}