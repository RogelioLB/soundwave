import { useStore } from "@nanostores/react"
import {FiSkipBack,FiSkipForward} from "react-icons/fi/index"
import { HiPause, HiPlay } from "react-icons/hi2/index"
import { player } from "../stores/player"
export default function Controls(){
    const $player = useStore(player)
    
    const handlePlay = async () => {
        if($player.playing) await $player.pause()
        else await $player.play()    
    }

    const handleSkip = () =>{
        $player.skip()
    }

    const handlePrevious = () =>{
        $player.previous()
    }
    
    return(
        <div className="flex gap-3 text-xl items-center">
            <button><FiSkipBack onClick={handlePrevious} /></button>
            <button className="bg-zinc-700 p-2 rounded-full" onClick={handlePlay}>
                {$player.playing ? <HiPause /> : <HiPlay />}
            </button>
            <button><FiSkipForward onClick={handleSkip}/></button>
        </div>
    )
}