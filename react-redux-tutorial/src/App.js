import React from "react";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import Counter from "./components/Counter";
import TodosContainer from "./containers/TodosContainer";

const App = () => {
  return (
    <div>
      <CounterContainer number={0}/>
      <hr/>
      <TodosContainer />
    </div>
  )
}
export default App;
