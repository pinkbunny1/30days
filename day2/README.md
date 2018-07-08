# Day 2 : CSS Transform and transition

- Make the clock hands move by using CSS Transform, Transition and vanilla Javascript
- Good resources to read on transform: https://tympanus.net/codrops/css_reference/transform/
- Syntax on transition
  'transition : property to apply transform, time-taken, transition-function, delay-time-before-start'

- Big Take-away : CSS selector 'getElementsByClassName' returns a NodeList not an element, therefore needs to use index to access its element. Took me a while to figure it out because it kept giving me error when I used it without index.

- Extra thought: Although this was a short and simple code to implement, it took me a while when I played around with the given code and tried to implement it my way. Through that I learned that getElementsByClassName returns a different data type, which was quite awesome to discover. Always read the documents documents documents !!! NodeList is different from Array as the proto NodeList is limited whereas Array offers a big set of protos such as filter(), join() etc.. Often times, NodeList can be converted to Array to use those methods

- Resource from https://wesbos.com/
