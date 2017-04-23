import Album from './album';
import Song from './song';

const albumsJSON = [{
  title: 'Both Sides Of The Atlantic',
  link: 'https://plasticknives.bandcamp.com/album/both-sides-of-the-atlantic',
  songs: [{
    title: 'Housewife Stash Party',
    fileName: 'songs/housewife-stash-party.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Crossfire',
    fileName: 'songs/crossfire.mp3',
    feat: ['Diyala'],
    duration: 30
  }, {
    title: 'Big Bag Of Tricks',
    fileName: 'songs/big-bag-of-tricks.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Dying Kings',
    fileName: 'songs/dying-kings.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Crta',
    fileName: 'songs/crta.mp3',
    feat: ['Sara Renar'],
    duration: 30
  }, {
    title: 'Broad Stroke',
    fileName: 'songs/broad-stroke.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Both Sides Of The Atlantic',
    fileName: 'songs/both-sides-of-the-atlantic.mp3',
    feat: [],
    duration: 30
  }]
}, {
  title: 'Tongue In Cheek',
  link: 'https://plasticknives.bandcamp.com/album/tongue-in-cheek',
  songs: [{
    title: 'Eyes On The Prize',
    fileName: 'songs/eyes-on-the-prize.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Future Ex',
    fileName: 'songs/future-ex.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Milk Teeth',
    fileName: 'songs/milk-teeth.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Pleasure Delayer',
    fileName: 'songs/pleasure-delayer.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Hooker Hickey',
    fileName: 'songs/hooker-hickey.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'You Get The Worst Of Me',
    fileName: 'songs/you-get-the-worst-of-me.mp3',
    feat: ['Hrvoje Malić'],
    duration: 30
  }, {
    title: 'Tongue In Cheek',
    fileName: 'songs/tounge-in-cheek.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Residue',
    fileName: 'songs/residue.mp3',
    feat: [],
    duration: 30
  }]
}, {
  title: 'Uknown',
  link: 'bla',
  songs: []
}];

const albums = albumsJSON.map((albumJSON) => {
  const album = new Album();
  album.title = albumJSON.title;
  album.link = albumJSON.link;
  album.songs = albumJSON.songs.map((songJSON) => new Song(songJSON));
  return album;
});

export default albums;
