import Song from './song';

interface IAlbum {
    title: string
    songs: Song[]
    link: string
    coverUrl: string
}

export default class Album implements IAlbum {
    title = ''
    songs = []
    link = ''
    coverUrl = ''
}
