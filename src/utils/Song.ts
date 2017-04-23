interface ISong {
  title: string
  duration: number
  fileName: string
  feat: string[]
}

export default class Song implements ISong {
  title = ''
  duration = 0
  fileName = ''
  feat = []

  constructor(data: ISong) {
    this.title = data.title;
    this.duration = data.duration;
    this.fileName = data.fileName;
    this.feat = data.feat;
  }
}
