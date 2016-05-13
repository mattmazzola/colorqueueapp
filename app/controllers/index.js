import Ember from 'ember';
import fetch from "ember-network/fetch";

export default Ember.Controller.extend({
  availableColors: [
    { r: 255, g: 0, b: 0, a: 1, name: 'red' },
    { r: 255, g: 127, b: 0, a: 1, name: 'orange' },
    { r: 255, g: 255, b: 0, a: 1, name: 'yellow' },
    { r: 0, g: 255, b: 0, a: 1, name: 'green' },
    { r: 0, g: 0, b: 255, a: 1, name: 'blue' },
    { r: 75, g: 0, b: 130, a: 1, name: 'indigo' },
    { r: 143, g: 0, b: 255, a: 1, name: 'violet' }
  ],
  
  customColorString: 'rgba(91, 255, 214, 0.5)',
  customColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  
  actions: {
    colorChanged(colorString) {
      const rgbaRegex = /rgba?\(([\d]{1,3}),\s?([\d]{1,3}),\s?([\d]{1,3})(?:,\s?([.\d]{1,}))?\)/i;
      const matches = colorString.match(rgbaRegex);
      if(!matches) {
        return;
      }
      
      const [,r,g,b,a] = matches;
      
      const color = {
        r: parseInt(r),
        g: parseInt(g),
        b: parseInt(b),
        a: parseFloat(a) || 1
      };
      
      console.log(`colorChanged: ${JSON.stringify(color, null, '  ')}`);
      this.set('customColor', color);
    }
  }
});
