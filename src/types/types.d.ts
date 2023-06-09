export interface TrackInfo{
    id?: number | undefined;
    track_url?: string | undefined;
    track_name?: string | undefined;
    track_thumbnail?: string | undefined;
    albums?: {
        album_name: string;
        id_author: {
            artist_name: string;
        } | null;
    } | null | undefined;
}

export interface PlaylistTrack{
    title?:string,
    thumbnail?:string,
    trackid?:number,
    src?:string,
    author?:string
}