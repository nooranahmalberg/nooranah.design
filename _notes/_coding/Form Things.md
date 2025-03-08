---
title: Form Things
---

Input tags are self-closing so no need for closing tag or /.

Label tags need to be closed. Put them above the input tag.

Use for tag to link a label with the input by id.  
The name property is needed to access the data from the form.  
Placeholder tag for placeholder.

Input type="submit" for a submit button.  
Using button in the form also works.  
There's no need to link the button because the default behaviour for buttons in a form is submit.  
Specifying the button type="submit" explicitly helps make reading the code easier.

Input types: [https://www.w3schools.com/html/html_form_input_types.asp](https://www.w3schools.com/html/html_form_input_types.asp)

## Validation attributes

- Adding the attribute 'required' to an input tag makes the field compulsory.
- 'minlength' lets me set the minimum amount of characters for a field
- 'maxlength' sets the maximum length of characters
- 'min' sets the minimum value allowed (numeric). 'max' does the same but for the maximum value.

### Pattern attribute

Custom validation pattern for complex validation:

```
pattern="[a-zA-Z0-9]+"
```

a-z covers lower caps. A-Z covers upper caps. 0-9 refers to numeric values. + means string of any length is allowed. Without the +, only single character strings will be allowed

### RegEx

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)  
[#todo-learning](app://obsidian.md/index.html#todo-learning)

## Overriding the default behaviour on submit

When a form is submitted, it resets the form and the url captures all the data because it assumes that data is going to be sent to a server.

Set an id on the form tag.  
Then, target that form element in JS.  
Add an event listener on that element. Instead of 'click', the event we are listening for here is submit.  
Function(e) where 'e' refers to events to any event on the page.  
e.preventDefault() will now cancel all default behaviour.

## Button types in form

Type =

- Submit
- Reset
- Button
    - This will stop the default behaviour of the button so it no longer acts as a submit button as well

### FormData
A special kind of function that holds all the form's data submitted by a user.

```
const formDataEl = new FormData(formEl)
```

Needs an uppercase when declared.  
formEl is the form element that's been declared.

## Getting the form data

```
const data = formDataEl.get('name')
```

.get method is needed to get into the object and find the information I want.  
name is what's specified under name for the input in HTML.