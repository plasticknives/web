import App from './main';
import { ComponentManager, setPropertyDidChange } from '@glimmer/component';

const app = new App();
const containerElement = document.getElementsByTagName('body')[0];

setPropertyDidChange(() => {
  app.scheduleRerender();
});

app.registerInitializer({
  initialize(registry) {
    registry.register(`component-manager:/${app.rootName}/component-managers/main`, ComponentManager)
  }
});

app.renderComponent('plastic-knives', containerElement, null);

app.boot();
