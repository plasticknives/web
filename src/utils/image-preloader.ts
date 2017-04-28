let loadCount: number = 0;

const imagesToPreload: string[] = [
  'images/icons/pause.png',
  'images/headers/1.svg',
  'images/headers/2.svg',
  'images/headers/3.svg',
  'images/headers/4.svg',
  'images/headers/5.svg'
];

function onImgLoad() {
  loadCount++;
  if (loadCount === imagesToPreload.length) {
    console.log('Preloaded all images');
  }
}

function preloadImage(src: string) {
  var img = new Image();
  img.src = src;
  img.onload = onImgLoad;
}

export default function preloadImages() {
  for (var i = 0; i < imagesToPreload.length; i++) {
    preloadImage(imagesToPreload[i]);
  }
}
