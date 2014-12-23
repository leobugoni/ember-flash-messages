import Em from 'ember';

export default Em.ObjectController.extend({

  actions: {
    showMessage: function(type, message, duration) {
      this.notify(type, message, duration);
    }
  }

});
