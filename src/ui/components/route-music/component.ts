import Component, { tracked } from '@glimmer/component';
import albums from '../../../utils/albums';
import Album from '../../../utils/Album';
import Song from '../../../utils/Song';

const THEME_COLOR_COUNT = 5;
const MOBILE_WIDTH_BREAKPOINT = 768;

export default class RouteMusic extends Component {
  element: HTMLElement;

  @tracked albumsContainerWidth: number = 0;
  @tracked albumsWidth: number = 0;
  @tracked themeColorIndex: number = Math.ceil((Math.random() * THEME_COLOR_COUNT));
  @tracked albums: Album[] = albums;
  @tracked activeAlbum: Album|null;
  @tracked activeSong: Song|null;
  @tracked playProgressPercentage: number = 0;
  @tracked windowWidth: number = window.innerWidth;
  @tracked isAlbumOpening: boolean = false;
  @tracked isAlbumClosing: boolean = false;

  @tracked('windowWidth') get isMobile() : boolean {
    return this.windowWidth <= MOBILE_WIDTH_BREAKPOINT;
  }

  @tracked ('isMobile') get orderedAlbums() : Album[] {
    if (this.isMobile) {
      return this.albums;
    }
    return [this.albums[1], this.albums[0], this.albums[2]];
  }

  @tracked('activeAlbum') get openedAlbumIndex() : number|undefined {
    if (this.activeAlbum) {
      return albums.indexOf(this.activeAlbum) + 1 || undefined;
    }
  }

  @tracked('albumsContainerWidth', 'albumsWidth', 'isMobile') get albumsWrapperElStyle() : string {
    const leftOffset = (this.albumsContainerWidth - this.albumsWidth) / 2;
    return this.isMobile || leftOffset > 0 ? '' : `transform: translateX(${leftOffset}px)`;
  }

  @tracked('activeAlbum', 'isMobile', 'orderedAlbums') get albumsElStyle() : string {
    if (this.activeAlbum && !this.isMobile) {
      const idx = this.orderedAlbums.indexOf(this.activeAlbum);
      const albumEl = this.element.querySelectorAll('.album')[idx];

      if (albumEl) {
        const bodyCenter = window.innerWidth / 2;
        const albumElCenter= albumEl.getBoundingClientRect().left + (albumEl.clientWidth / 2);
        const leftOffset = bodyCenter - albumElCenter;
        return `transform: translateX(${leftOffset}px)`;
      }
    }
    return '';
  }

  didInsertElement() {
    window.addEventListener('resize', () => this.updateLayout());
    requestAnimationFrame(() => this.updateLayout());
  }

  updateLayout() {
    this.windowWidth = window.innerWidth;
    const albumsWrapperEl = this.element.querySelector('.js-albums-wrapper');
    if (albumsWrapperEl) {
      this.albumsContainerWidth = albumsWrapperEl.clientWidth;
    }
    const albumsEl = this.element.querySelector('.js-albums');
    if (albumsEl) {
      this.albumsWidth = albumsEl.clientWidth;
    }
  }

  nextThemeColorIndex() {
    this.themeColorIndex = this.themeColorIndex === THEME_COLOR_COUNT ? 1 : this.themeColorIndex + 1;
  }

  toggleAlbumOpened(album: Album) {
    if (this.activeAlbum === album) {
      this.isAlbumClosing = true;
      this.activeSong = null;
      this.playProgressPercentage = 0;
    } else {
      this.activeAlbum = album;
      this.isAlbumOpening = true;
    }

    setTimeout(() => {
      if (this.isAlbumClosing) {
        this.activeAlbum = null;
      }

      if (this.isAlbumOpening && this.activeAlbum) {
        this.activeSong = this.activeAlbum.songs[0];
      }

      this.isAlbumOpening = false;
      this.isAlbumClosing = false;
    }, 1000);
  }

  setNextAlbumSongActive() {
    if (this.activeAlbum) {
      const idx = this.activeSong ? (this.activeAlbum.songs.indexOf(this.activeSong) + 1) : 0;
      this.activeSong = this.activeAlbum.songs[idx];
      this.nextThemeColorIndex();
    }
  }

  setPreviousAlbumSongActive() {
    if (this.activeAlbum) {
      const idx = this.activeSong ? (this.activeAlbum.songs.indexOf(this.activeSong) - 1) : 0;
      this.activeSong = this.activeAlbum.songs[idx];
      this.nextThemeColorIndex();
    }
  }

  updatePlayProgressPercentage(val: number) {
    this.playProgressPercentage = val;
  }

  playSong(song: Song) {
    if (this.activeAlbum && this.activeAlbum.songs.indexOf(song) >= 0) {
      this.activeSong = song;
      this.nextThemeColorIndex();
    }
  }
};
