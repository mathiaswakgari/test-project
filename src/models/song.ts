export interface Song {
  id?: number;
  title?: string;
  thumbnailUrl?: string;
  albumTitle?: string;
}

export interface ISongState {
  data: Song;
  isLoading: boolean;
  errors: string;
}

export interface SongsStateType {
  song: ISongState;
}
