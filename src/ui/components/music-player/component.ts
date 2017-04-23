import Component, { tracked } from '@glimmer/component';
import Song from '../../../utils/Song';

export default class MusicPlayer extends Component {
  element: HTMLElement;
  audioEl: HTMLAudioElement;
  args: {
    activeSong: Song;
    playNext: () => void;
    playPrevious: () => void;
    updatePlayProgressPercentage: (number) => void;
  };

  @tracked isPlaying: boolean = false;

  didInsertElement() {
    this.audioEl = this.element.querySelector('.js-music-player-audio') as HTMLAudioElement;
  }

  startPlayback() {
    this.audioEl.play();
  }

  stopPlayback() {
    this.audioEl.pause();
  }

  togglePlayPause() {
    if (!this.isPlaying) {
      this.startPlayback();
    } else {
      this.stopPlayback();
    }
  }

  onAudioPause() {
    this.isPlaying = false;
  }

  onAudioPlaying() {
    this.isPlaying = true;
  }

  onAudioTimeUpdate() {
    const song = this.args.activeSong;
    if (song) {
      this.args.updatePlayProgressPercentage((this.audioEl.currentTime / song.duration) * 100);
    } else {
      this.args.updatePlayProgressPercentage(0);
    }
  }
};
