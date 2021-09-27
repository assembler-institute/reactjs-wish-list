import React, { Component } from "react";
import Input from "../Components/Input";
import TodoList from "../Components/TodoList"
import Footer from "../Components/Footer"
import "./home.scss";





class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            listToDos: [],
        };
        this.addItem = this.addItem.bind(this);
         this.editItem=this.editItem.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
      }
    addItem(value) {
        const newToDo = {
        id: Math.random(),
        value:value,
        }
        const{listToDos}=this.state
        listToDos.push(newToDo);
        this.setState({
        listToDos,
        newToDo:"",
       
        }); 
      }; 
    editItem(id,check,value,done){
      const{listToDos}=this.state
      listToDos.find((item) =>{
        if(item.id===id){
        item.done=!done
          }
        });
        this.setState({
          listToDos:listToDos,
          
          }); 
          

    };

    deleteItem(id) {
      const{listToDos}=this.state
      const updatedList = listToDos.filter(item => item.id !== id);
      this.setState({ 
      listToDos: updatedList,
      
      }); 
      console.log(listToDos);
    }
  render(){
    return (
      <>
      <main className="container mt-5">
        <div className="container-lg">
          <h1 className="title">TO DO</h1>
        </div>
       
          <section className="row container-lg input__todo">
            <Input handelSubmit={this.addItem}
                    handelEdit={this.editItem}

            />
            </section>
          <section className="row container-lg">
            <TodoList items={this.state.listToDos}
                    handleRemove={this.deleteItem}
                    handelEdit={this.editItem}
            />
            <Footer />
          </section>
        </main>
        </>
      );
    }
  }

  export default Home
  