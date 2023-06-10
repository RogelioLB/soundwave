import { useStore } from "@nanostores/react"
import "../styles/trackbar.css"
import { player } from "../stores/player"
import type { ChangeEvent } from "react"

const formatSeconds = (sec:number) =>{
    if(Number.isNaN(sec)) return '00:00'
    const time = (sec / 60).toString().split(".")
    const minutes = Number(time[0])
    const minutesParsed = minutes < 10 ? "0"+minutes : minutes
    const seconds =  (Number("."+time[1]) * 60)
    const secondsParsed = Number.isNaN(seconds) ? '00' : seconds < 10 ? "0"+seconds.toFixed(0) : seconds.toFixed(0)
    return `${minutesParsed}:${secondsParsed}`
}

export default function TrackBar(){
    const $player = useStore(player)
    const percentage = (($player.currentTime / $player.duration) * 100).toFixed(0)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        $player.player().currentTime = Number(e.target.value)
    }


    return(
        <div className="flex-1 flex items-center text-base font-medium gap-2 max-sm:hidden">
            <span>{formatSeconds($player.currentTime)}</span>
            <input onChange={handleChange} value={$player.currentTime} max={$player.duration} type="range" className="flex-1 trackbar" style={{backgroundSize:`${percentage}% 100%`}}/>
            <span>{formatSeconds($player.duration)}</span>
        </div>
    )
}