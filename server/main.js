import {
  Meteor
}
from 'meteor/meteor';

Meteor.methods({
  'test' () {
    console.log('method called on server side');
    return 'Success';
  }
});
