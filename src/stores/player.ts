import { atom } from "nanostores";

export const currentTrack = atom<{
    title:string,
    thumbnail:string,
    trackid?:number,
    src:string,
    author:string
}|null>(null)

export const player = atom({
    playing:false,
    play: ()=> {
        const player = document.querySelector("audio")
        if(player?.paused) player.play()
        else player?.pause()
    }
})