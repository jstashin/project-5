1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById returns a single element by its ID where  getElementsByClassName returns all elements with specified class name.
querySelector selects the first element that matches with the given CSS selector where querySelectorAll selects the all elements
that matches with the given CSS selector.

2. How do you **create and insert a new element into the DOM**?
To create a new element into the DOM,document.createElement() is used.
To insert a new element ,appandChild() or append() is used.

3. What is **Event Bubbling** and how does it work?

Event bubbling is a process of DOM where if a event occurs in a element then it reaches to the document from its parent element.
If one button is clicked-
First event will enter into the target element to trigger it,then the event will enter into the buttons parent div,then it will reach parent,body,html and finally to the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation is a process in JavaScript where a single event listener is 
connected to a parent element to control events from multiple child elements.
It is useful because-
It's performace is very better.
It works in daynamic elements.
Code becomes easy and more cleaner.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() stops the the browser's default behavior where stopPropagation() stops the propagating up of the dom of an event.


