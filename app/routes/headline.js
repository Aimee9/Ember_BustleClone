import Ember from 'ember';

export default Ember.Route.extend({
  mdoel(params) {
    return this.store.findRecord('headline', params.headline.id);
  },
});
