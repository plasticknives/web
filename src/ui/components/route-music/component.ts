import Component, { tracked } from '@glimmer/component';
import albums from '../../../utils/albums';
import Album from '../../../utils/Album';
import Song from '../../../utils/Song';

const THEME_COLOR_COUNT = 5;

export default class RouteMusic extends Component {
  element: HTMLElement;

  @tracked albumsContainerWidth: number = 0;
  @tracked albumsWidth: number = 0;
  @tracked themeColorIndex: number = Math.ceil((Math.random() * THEME_COLOR_COUNT));
  @tracked albums: Album[] = albums;
  @tracked activeAlbum: Album|null;
  @tracked activeSong: Song|null;
  @tracked playProgressPercentage: number = 0;

  @tracked('activeAlbum') get openedAlbumIndex() : number|undefined {
    if (this.activeAlbum) {
      return albums.indexOf(this.activeAlbum) + 1 || undefined;
    }
  }

  @tracked('albumsContainerWidth', 'albumsWidth') get albumsWrapperElStyle() : string {
    const leftOffset = (this.albumsContainerWidth - this.albumsWidth) / 2;
    return `transform: translateX(${leftOffset}px)`;
  }

  @tracked('activeAlbum') get albumsElStyle() : string {
    if (this.activeAlbum) {
      const idx = albums.indexOf(this.activeAlbum);
      const albumEl = this.element.querySelectorAll('.album')[idx];

      if (albumEl) {
        const bodyCenter = document.body.clientWidth / 2;
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
    this.activeAlbum = this.activeAlbum === album ? null : album;

    if (this.activeAlbum) {
      this.activeSong = this.activeAlbum.songs[0];
    } else {
      this.activeSong = null;
    }
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
};
