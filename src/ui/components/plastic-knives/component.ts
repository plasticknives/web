import Component from '@glimmer/component';
import preloadImages from '../../../utils/image-preloader';

export default class PlasticKnives extends Component {
  didInsertElement() {
    preloadImages();
  }
};
