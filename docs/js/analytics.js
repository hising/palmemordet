import {isDev} from './utils';

class Analytics {

  init() {
    if (isDev) {
      (function(window, document, tagName, scriptSource, trackerName){

        window['GoogleAnalyticsObject'] = trackerName;

        window[trackerName] = window[trackerName] || function(){
            (window[trackerName].q = window[trackerName].q || []).push(arguments);
          };

        window[trackerName].l = 1 * new Date();
        let scriptElement = document.createElement(tagName);
        let scriptCollection = document.getElementsByTagName(tagName)[0];
        scriptElement.async = 1;
        scriptElement.src = scriptSource;
        scriptCollection.parentNode.insertBefore(scriptElement, scriptCollection);

      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-186744-112', 'auto');

      this.trackPageview(location.hash.replace('#', ''));
    }
  }

  trackPageview(path) {
    ga('send', 'pageview', path);
  }

  trackEvent(category, action, label = null, value = null, nonInteraction = false) {
    let payload = {
      eventCategory: category,
      eventAction: action,
      nonInteraction
    };

    if (label) {
      payload.eventLabel = label;
    }

    if (value) {
      payload.eventValue = value;
    }

    ga('send', 'event', payload);
  }

}

export const analytics = new Analytics();
