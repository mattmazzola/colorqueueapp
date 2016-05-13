import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('color');
  },
  
  baseAddress: 'http://colorqueueapi.azurewebsites.net',
  
  actions: {
    addColor(color) {
      console.log(`POST color: ${color}`);
      fetch(`${this.baseAddress}/colors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;'
        },
        body: JSON.stringify(color)
      });
    },
    
    clear() {
      this.store.unloadAll('color');
      console.log(`POST clear`);
      fetch(`${this.baseAddress}/clear`, {
        method: 'POST'
      });
    },
    
    removeColor(color) {
      this.store.unloadRecord(color);
      console.log(`DELETE color: ${color.get('order')}`);
      fetch(`${this.baseAddress}/colors/${color.get('order')}`, {
        method: 'DELETE'
      });
    }
  }
});
