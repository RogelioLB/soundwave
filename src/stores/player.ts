import { atom } from "nanostores";
import type { PlaylistTrack } from "../types/types";

export const currentTrack = atom<PlaylistTrack |null | undefined>(null)

export const player = atom({
    player:()=>document.querySelector("audio") as HTMLAudioElement,
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
    },
    duration:0,
    currentTime:0
})

export const playlist = atom<PlaylistTrack[] | undefined | null>(null)

export const page_playlist = atom<PlaylistTrack[] | undefined | null>(null) 