import Component from '@glimmer/component';
import Song from '../../../utils/Song';

export default class MusicSong extends Component {
  args: {
    isActive: boolean;
    song: Song;
  }

  get featsString() : string {
    return (this.args.song.feat || []).join(', ');
  }
};
