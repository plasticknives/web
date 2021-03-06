import Component, { tracked } from '@glimmer/component';
import Album from '../../../utils/Album';
import Song from '../../../utils/Song';

export default class MusicAlbum extends Component {
  args: {
    index: number;
    album: Album;
    activeAlbum: Album;
    toggleOpened: (Album) => void;
    activeSong: Song;
    playProgressPercentage: number;
    isOpening: number;
    playSong: (Song) => void;
  };

  @tracked('args') get albumIndex() : number {
    return this.args.index + 1;
  }

  @tracked('args') get isOpened() : boolean {
    return this.args.album === this.args.activeAlbum;
  }

  @tracked('args') get isOtherOpened() : boolean {
    return !!this.args.activeAlbum && this.args.album !== this.args.activeAlbum;
  }

  @tracked('args') get styleAttributeValue() : string {
    const percentage = this.args.playProgressPercentage;
    return this.isOpened && percentage ? `width: ${percentage}%` : '';
  }
};
