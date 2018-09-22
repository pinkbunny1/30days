 # Day 8 : React this.setState(function) vs this.setState(obj)

 - I have been doing personal projects using React and totally love the use of components and make them reusable and reactive to events ! This rids of messy codes where it uses class or id values of elements to handle events.


 - State is an object that manages the component's data. This data that component is showing to the browser is reactive to events and when changed, React re-renders the component to show a new state(data) to browser. Tah-dah ! how beautiful !


 - This state must **NOT** be changed directly but only via setState() method of component. Recently I learnt that setState can take either *object* or *function* as an argument and it got me wondering **WHY** so I did some digging & reading in the internet.

## setState()
 - setState() method is only available in *class* component

 - setState() adds each request to a queue. This means that "React may delay it, and then update several components in a single pass." *-React Docs*

 ## When to use *object* in setState:
 - new state is **NOT** dependent on the previous state. For example, when the state is updated using value is not related to the previous state. It could be a user input as username or age or keyword for searching.
 `this.setState({userName:'Jane'})`


 ## When to use *function* in setState:
 - new state is **DEPENDENT** on the previous state.  The states takes previous state value and do some calculations and takes the returned value. For example like budgeting where the sum of money is updated based on the previous amount.
`this.setState((state, props) => {
  return { sumAmount : state.sumAmount + props.income}
  })`
 Here `state` in function is a reference to component state at the time this method was applied. so it gets the latest state value.
 - setState() is an async operation and multiple calls during the same cycle will batch the calls together like so.
 `Object.assign(
    previousState,
    {quantity: state.quantity + 1},
    {quantity: state.quantity + 1},
    ...
  )`
  This would result in quantity key object to override its previous same key objects and only calls it once. So the quantity in state would only increment once.
