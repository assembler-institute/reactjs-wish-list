### First meeting

## 1. Layout

Using Bootstrap as much as possible

## 2. Structure (components & pages)

### App

Defining base elements:

* Title
* Light/Dark mode
* Create todo (component)
* Todolist (component via `BrowserRouter`. Has `filter` property)

	· Route 1: Home
	
	· Route 2: Completed
	
	· Route 3: Active
	
	* Todo

* NavBar (component & has `NavLinks` to filter)	
-
### this.state

```
this.state{

}
```


-
### Methods & properties needed

**Create todo** (component)

Using a `formik` form with `yup` validation.

* handleSubmit(): **create todo object** once submitted form. **Add a new object to state (todos)**.


Local storage:

```
  componentDidUpdate() {
    const { cartItems, products } = this.state;

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ cartItems, products }),
    );
  }

```


**Todo** (component)

Wrap all todo in a `<div>` to **hover** & show crossbar.

* handleClick(): **checkbox**
* handleRemove(): **crossbar**
* handleEdit(): when user clicks on todo.

* key: use `uuid` to create id.
* done: `boolean`
* text: `string`


**Todo list** (component)




**Navbar** (component)




## TODO


## DONE

Installed `yup`& `formik`