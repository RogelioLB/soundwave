export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      albums: {
        Row: {
          album_name: string
          album_photo: string
          created_at: string | null
          id: number
          id_artist: number | null
        }
        Insert: {
          album_name: string
          album_photo: string
          created_at?: string | null
          id?: number
          id_artist?: number | null
        }
        Update: {
          album_name?: string
          album_photo?: string
          created_at?: string | null
          id?: number
          id_artist?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "albums_id_artist_fkey"
            columns: ["id_artist"]
            referencedRelation: "artists"
            referencedColumns: ["id"]
          }
        ]
      }
      artists: {
        Row: {
          artist_name: string
          artist_photo: string
          created_at: string | null
          id: number
        }
        Insert: {
          artist_name: string
          artist_photo: string
          created_at?: string | null
          id?: number
        }
        Update: {
          artist_name?: string
          artist_photo?: string
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string | null
          id: number
          id_track: number | null
          id_user: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          id_track?: number | null
          id_user?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          id_track?: number | null
          id_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_id_track_fkey"
            columns: ["id_track"]
            referencedRelation: "tracks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_id_user_fkey"
            columns: ["id_user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tracks: {
        Row: {
          created_at: string | null
          id: number
          track_album: number
          track_name: string
          track_thumbnail: string
          track_url: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          track_album: number
          track_name: string
          track_thumbnail: string
          track_url: string
        }
        Update: {
          created_at?: string | null
          id?: number
          track_album?: number
          track_name?: string
          track_thumbnail?: string
          track_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "tracks_track_album_fkey"
            columns: ["track_album"]
            referencedRelation: "albums"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}