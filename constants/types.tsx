export interface Song {
  title: string | undefined;
  artist: string | undefined;
}

export interface LyricsType {
  success: boolean;
  requestedtitle: string;
  requestedartist?: string;
  resolvedtitle?: string;
  resolvedartist?: string;
  lyrics?: string;
  errmsg?: string;
}

export type RootStackParamList = {
  Home: undefined;
  Lyrics: { song: Song } | undefined;
};
