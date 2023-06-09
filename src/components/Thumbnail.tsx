interface Props{
    track_title?:string,
    track_author?:string,
    track_thumbnail?:string
}
export default function Thumbnail({track_thumbnail,track_author,track_title} : Props){
    return(
        <div className="flex items-center">
            <div className="max-sm:w-14 w-20 aspect-square rounded-md overflow-hidden">
                <img src={track_thumbnail} className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col p-3">
                <h4 className="text-xl max-md:text-base overflow-hidden text-ellipsis">{track_title}</h4>
                <span className="text-white/50 text-base max-md:text-xs">{track_author}</span>
            </div>
        </div>
    )
}
