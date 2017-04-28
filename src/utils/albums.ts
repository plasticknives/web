import Album from './album';
import Song from './song';

const albumsJSON = [{
  title: 'Both Sides Of The Atlantic',
  coverUrl: 'images/albums/both-sides-of-the-atlantic.png',
  link: 'https://plasticknives.bandcamp.com/album/both-sides-of-the-atlantic',
  songs: [{
    title: 'Housewife Stash Party',
    fileName: 'songs/both-sides-of-the-atlantic/01-housewife-stash-party.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Crossfire',
    fileName: 'songs/both-sides-of-the-atlantic/02-crossfire.mp3',
    feat: ['Diyala'],
    duration: 30
  }, {
    title: 'Big Bag Of Tricks',
    fileName: 'songs/both-sides-of-the-atlantic/03-big-bag-of-tricks.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Dying Kings',
    fileName: 'songs/both-sides-of-the-atlantic/04-dying-kings.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Crta',
    fileName: 'songs/both-sides-of-the-atlantic/05-crta.mp3',
    feat: ['Sara Renar'],
    duration: 30
  }, {
    title: 'Broad Stroke',
    fileName: 'songs/both-sides-of-the-atlantic/06-broad-stroke.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Both Sides Of The Atlantic',
    fileName: 'songs/both-sides-of-the-atlantic/07-both-sides-of-the-atlantic.mp3',
    feat: [],
    duration: 30
  }]
}, {
  title: 'Body Language',
  coverUrl: 'images/albums/body-language.jpg',
  link: 'https://plasticknives.bandcamp.com/album/body-language',
  songs: [{
    title: 'Goldrush',
    fileName: 'songs/body-language/01-goldrush.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Gonna Throw Myself Around',
    fileName: 'songs/body-language/02-gonna-throw-myself-around.mp3',
    feat: ['Diyala'],
    duration: 30
  }, {
    title: 'Secret Lvl',
    fileName: 'songs/body-language/03-secret-lvl.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Ballgagger',
    fileName: 'songs/body-language/04-ballgagger.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Body Language',
    fileName: 'songs/body-language/05-body-language.mp3',
    feat: ['Sara Renar'],
    duration: 30
  }, {
    title: 'Dying Kings',
    fileName: 'songs/body-language/06-dying-kings.mp3',
    feat: [],
    duration: 30
  }]
}, {
  title: 'Tongue In Cheek',
  coverUrl: 'images/albums/tongue-in-cheek.png',
  link: 'https://plasticknives.bandcamp.com/album/tongue-in-cheek',
  songs: [{
    title: 'Eyes On The Prize',
    fileName: 'songs/tongue-in-cheek/01-eyes-on-the-prize.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Future Ex',
    fileName: 'songs/tongue-in-cheek/02-future-ex.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Milk Teeth',
    fileName: 'songs/tongue-in-cheek/03-milk-teeth.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Pleasure Delayer',
    fileName: 'songs/tongue-in-cheek/04-pleasure-delayer.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Hooker Hickey',
    fileName: 'songs/tongue-in-cheek/05-hooker-hickey.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'You Get The Worst Of Me',
    fileName: 'songs/tongue-in-cheek/06-you-get-the-worst-of-me.mp3',
    feat: ['Hrvoje Malić'],
    duration: 30
  }, {
    title: 'Tongue In Cheek',
    fileName: 'songs/tongue-in-cheek/07-tongue-in-cheek.mp3',
    feat: [],
    duration: 30
  }, {
    title: 'Residue',
    fileName: 'songs/tongue-in-cheek/08-residue.mp3',
    feat: [],
    duration: 30
  }]
}];

const albums = albumsJSON.map((albumJSON) => {
  const album = new Album();
  album.title = albumJSON.title;
  album.link = albumJSON.link;
  album.coverUrl = albumJSON.coverUrl;
  album.songs = albumJSON.songs.map((songJSON) => new Song(songJSON));
  return album;
});

export default albums;
