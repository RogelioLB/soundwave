import Thumbnail from "./Thumbnail";
import TrackPlay from "./TrackPlay"

interface Props{
    title?:string,
    author?:string,
    thumbnail?:string,
    trackid?:number,
    src?:string,
}
export default function Track(props:Props){
    const {author,thumbnail,title} = props
    return(
        <div className="flex justify-between items-center gap-4">
            <Thumbnail track_author={author} track_thumbnail={thumbnail} track_title={title} />
            <TrackPlay {...props} />
        </div>
    )
}
