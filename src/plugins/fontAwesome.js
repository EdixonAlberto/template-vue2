import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faEnvelope);

const fontAwesome = {
  install(Vue) {
    Vue.component('fa-icon', FontAwesomeIcon);
  }
};

export { fontAwesome };
