import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.onRendered(function(){
    this.$('.mailmodalbutton').leanModal();
    this.$('.cvmodalbutton').leanModal();
    this.$('.aboutmodalbutton').leanModal();        
})



Template.body.events({
  'click .mailmodalbutton': function (event) {
    event.preventDefault();

    $('.mailmodalbutton').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 100, // Transition in duration
      out_duration: 100, // Transition out duration
      
    });
  },

  'click .cvmodalbutton': function (event) {
    event.preventDefault();

    $('.cvmodalbutton').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 100, // Transition in duration
      out_duration: 100, // Transition out duration
      
    });
  },

  'click .aboutmodalbutton': function (event) {
    event.preventDefault();

    $('.aboutmodalbutton').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 100, // Transition in duration
      out_duration: 100, // Transition out duration
      
    });
  },

  'submit mailform': function(){
    var firstName = target.firstname.value;
    var lastName = target.lastname.value;
    var message = new String("FROM: " + firstName + " " + lastName + "MESSAGE: " + event.target.message );
    var email = target.email.value;
    $('.mailmodalbutton').closeModal();
    Meteor.call('sendEmail',email,message);
	},

  'submit cvform': function(){
    var message = "Simple CV request";
    var email = target.email.value;
    $('.mailmodalbutton').closeModal();
    Meteor.call('sendEmail',email,message);
  }

});