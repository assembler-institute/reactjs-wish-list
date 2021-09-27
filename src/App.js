import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import Home from './Home'

class App extends Component {

  render(){
    return (
      <>
      <Switch>

      <Route
          path="/"
          exact
          render={(routeProps) => (
          <Home 
            {...routeProps}
          />
            )}/>
      <Route
          path="/Actives"
          exact
          render={(routeProps) => (
            <TodoList
            {...routeProps}
            items={this.state.listToDos}
                    handleRemove={this.deleteItem}
                    handelEdit={this.editItem}
            />)}/>
             <Route
          path="/Done"
          exact
          render={(routeProps) => (
            <TodoList
            {...routeProps}
            items={this.state.listToDos}

                    handleRemove={this.deleteItem}
                    handelEdit={this.editItem}
            />)}/>
            </Switch>
      </>
    )
    }
}

export default App