import Ember from 'ember';

export function showDomainName(params/*, hash*/) {
  if (params[0]) {
    return params[0].match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/)[0];
  }
}

export default Ember.Helper.helper(showDomainName);
