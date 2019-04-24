
import alert from '../components/diyAlert.vue'
import Vue from 'vue'
const ConfirmConstructor = Vue.extend(alert);

const MessageBox = function(options, callback) {
    if (Vue.prototype.$isServer) return;
    if (typeof options === 'string') {
      options = {
        message: options
      };
      if (arguments[1]) {
        options.title = arguments[1];
      }
      if (arguments[2]) {
        options.type = arguments[2];
      }
    } else if (options.callback && !callback) {
      callback = options.callback;
    }
  
    if (typeof Promise !== 'undefined') {
      return new Promise((resolve, reject) => { // eslint-disable-line
        msgQueue.push({
          options: merge({}, defaults, MessageBox.defaults, options),
          callback: callback,
          resolve: resolve,
          reject: reject
        });
  
        showNextMsg();
      });
    } else {
      msgQueue.push({
        options: merge({}, defaults, MessageBox.defaults, options),
        callback: callback
      });
  
      showNextMsg();
    }
  };
