import { atom } from "nanostores";

export const currentTrack = atom<{
    title?:string,
    thumbnail?:string,
    trackid?:number,
    src?:string,
    author?:string
}|null | undefined>(null)

export const player = atom({
    player:()=>document.querySelector("audio"),
    playing:false,
    play: async ()=> {
        const $player = player.get()
        await $player.player()?.play()
    },
    pause: async ()=>{
        const $player = player.get()
        await $player.player()?.pause()
    },
    skip: async ()=>{
        const $playlist = playlist.get()
        const $currentTrack = currentTrack.get()
        const $player = player.get()
        if($playlist!==null && $playlist!==undefined){
            const index = $playlist?.findIndex(track=>track.trackid === $currentTrack?.trackid)
            if(index===$playlist?.length-1) await currentTrack.set($playlist[0])
            else await currentTrack.set($playlist[index+1])
            $player.play()
        }
    },
    previous: async()=>{
        const $playlist = playlist.get()
        const $currentTrack = currentTrack.get()
        const $player = player.get()
        if($playlist!==null && $playlist!==undefined){
            const index = $playlist?.findIndex(track=>track.trackid === $currentTrack?.trackid)
            if(index===0) await currentTrack.set($playlist[$playlist.length-1])
            else await currentTrack.set($playlist[index-1])
            $player.play()
        }
    }
})

export const playlist = atom<{
    title?:string,
    thumbnail?:string,
    trackid?:number,
    src?:string,
    author?:string
}[] | undefined | null>(null)