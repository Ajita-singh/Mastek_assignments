ko.validation.rules.pattern.message = 'Invalid.';
ko.validation.configure({
    registerExtenders: true,
    messagesOnModified: true,
    insertMessages: true,
    parseInputAttributes: true,
    messageTemplate: null
});

var viewModel = {
    firstName: ko.observable().extend({required: true }),
    lastName: ko.observable().extend({ required: true }),
     items: [
        {
        "name": "male",
        "selected": ko.observable(true)},
    {
        "name": "female",
        "selected": ko.observable(false)}
   
    ],
 
    subscriptionOptions: ['LA', 'HOS'],
    subscription: ko.observable().extend({ required: true }),
  
    submit: function () {
       
        if (viewModel.errors().length == 0) {
            alert('Thank you.');
        } else {
            alert('Please check your submission.');
            viewModel.errors.showAllMessages();
            alert(viewModel.errors());
        }
    }
};
ko.bindingHandlers.radioCheck = {
    init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
        //initalize checked value of element
        element.checked = valueAccessor()();       
    }
};
viewModel.errors = ko.validation.group(viewModel);
ko.applyBindings(viewModel);