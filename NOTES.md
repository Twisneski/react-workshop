# What is React?

React can be described as simply a function that takes some properties and renders some html.
It's a little more complicated than that, but for illustrative purposes:

```
function renderLink(props) {
 return '<a href="'+ props.url+'">'+ props.label +'</a>'
}
```

This looks similar to Stateless components:

```javascript
function Link(props) {
 return `<a href="${props.url}">${props.label}</a>`
}
```

Would be consumed like: <Link url='http://google.com' label="Google" />

The same component could be written with ES6 class syntax like:

```javascript
class Link extends React.Component {
 render() {
   let props = this.props;
   return (
     return `<a href="${props.url}">${props.label}</a>`
   )
 }
}
```

And would be consumed the same way as the stateless component: <Link url='http://google.com' label="Google" />


 - Props (Properties) - Just like HTML attributes, props are used to configure the behavior of a component (tag)
 - State - Similar to props, state are values that can change. Think of props as static configuration, and state as mutable.
 - JSX - JSX is a syntax extension to Javascript that looks like XML/HTML. It allows you to write your applications in a natural way, as if it were HTML to compose your application from sets of components.
 - Life Cycle Methods: render, componentDidMount, componentWillReceiveProps, etc.
 - Reusable Components: A component is a unit of UI. A button, a form, a collection of buttons. It is the thing your users interact with.
 - Stateless Component: A reusable component that only uses props, does not have any internal state.
                      Can write pure functions that return JSX, instead of having to go through
                      the ceremony of writing a class with a render method.



#What is Redux?

Redux is a way to manage application state for your application.
3 Principles: Single source of truth, State is read-only, Changes are made with pure functions.

The whole state of your app is stored in an object tree inside a single store.
The only way to change the state tree is to emit an action, an object describing what happened.
To specify how the actions transform the state tree, you write pure reducers.

- Store -  A single place to access all of your application state.
- Action - A message describing an event that has taken place.
- Action Creator - A mechanism to create actions.
- Reducer - A way to listen for messages and update the store according to the data in the messages.


# Thinking in components.
> Breaking down the app. What is needed?

How can we break the UI into a component hierarchy?
 - Todo App
   - Add Todo Form
   - Todo Item
     - Label
     - Toggle Button
     - Delete Button
   - Remaining Count
   - Filter Controls
     - Filter Button
   - Clear Button
