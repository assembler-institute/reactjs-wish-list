`#react.js` `#master-in-software-engineering`

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Assembler School: React.js Todo List

In this project you will learn how to create a React.js todo list.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

See deployment for notes on how to deploy the project on a live system.

### The repository

First, you will need to `clone` or `fork` the repository into your Github
account:

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

```
$ git clone https://github.com/assembler-school/reactjs-todo-list.git
```

## Contents and Branches Naming Strategy

The repository is made up of several branches that include the contents of each
section.

The branches follow a naming strategy like the following:

- `main`: includes the main contents and the instructions
- `assembler-solution`: includes the solution

### Fetching All the Branches

In order to fetch all the remote branches in the repository, you can use the
following command:

```sh
$ git fetch --all
```

### List Both Remote Tracking Branches and Local Branches

```sh
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following
command:

```sh
$ git checkout -b <new_branch_name> <remote_branch_name>
```

### Installing

First, you will need to install the dependencies with: `npm install`.

Run the following command in your terminal after cloning the main repo:

```sh
$ npm install
```

### Running the Tests

The tests that validate your solution can be executed by runing the following
command:

```
$ npm run test
```

### Git `precommit` and `prepush` Hooks

In the `assembler-solution` branch you can see an implementation of these tools
if you'd like to use them.

## Deployment

In this pill we won't deploy the app.

## Technologies used

- `React.js`
- `@testing-library/react`
- `eslint`
- `prettier`
- `lint-staged`
- `husky`

## The Project

In this project you will build a todo app similar to the following screenshot.

<img src="src/img/app-view.jpg">

## Project requirements

This is an overview of the main requirements of this project. The exact ones are
found in the doc that the academic team will provide you.

- You must follow all the instructions of the project step-by-step
- You should always try to solve them by yourself before asking for help
- You should always help your team members and fellow students of the master so
  that you can all learn together and become better software developers and team
  members
- You must finish all the steps that are marked as `Required`
- **You must use semantic HTML5 elements for all the markup of the application**
- Once you are done, you can move on to the optional ones that are marked as
  `Extra 💯`

### 1. Styles and Layout

For this step you have to think of a layout for the app.

1. You **must** use `SCSS` for all the styles of the app and the
   [classnames](https://github.com/JedWatson/classnames#readme) npm package to
   handle any conditionally set classes
2. The overall layout must be a pixel perfect copy of the design we provide
3. The layout must be responsive so that it works in all device sizes

### 2. Show All the Todos

In this step you must implement the logic to render all the todos of the app.
This means that all the todos are rendered without taking into account if they
are completed or not.

1. **The todos must be created in the `App` component and passed as props to the
   page components**
2. **All the methods that modify the `<App />` state must also be passed as
   props**
3. If there are no todos created you must render a message telling the user that
   they can create their first todo to get started
4. You can also render an illustration that indicates users that they can create
   a todo to get started
   1. Feel free to create your own or use one from the internet, this is a great
      resource: [undraw.co](https://undraw.co/illustrations)

### 3. Creating Todos

1. Users must be able to create a new todo using the form in the app header
2. Users must be able to press the `enter` key on their keyboard to create the
   todo (if you implement it using semantic html5 this comes for free)
3. Once the todo is created it must be rendered in the list bellow the form

### 4. Editing Todos

Users must be able to edit the todos once they are created.

1. Clicking the todo name should open a form that allows users to edit the todo
   name.
   1. This can be implemented either in line or by filling out the new todo form
      with the details of the todo that was clicked
   2. We recommend that you implement a solution that allows users to edit the
      todo in line. This means that clicking the todo name replaces the todo
      with a form that has a value of the todo's name
   3. Then, by clicking on the done button or by pressing enter, the todo is
      edited and saved
2. Users should be able to delete todos by clicking the `X` button that is
   rendered when users hover over the todo name
3. Users must be able to mark a todo as completed when they press the `Done`
   button that is rendered when the user hovers over the todo name

### 5. Filtering Todos

In this step you will create a page for each todo type.

In order to allow users to navigate to a page you will need to complete the
footer of the app that you can see in the screenshot above.

You will have to render the following in the footer:

1. The total count of all the `active` todos
2. A link to the home page that renders `all` the todos, **both active and
   completed**
3. A link to the active todos page that renders the `active` todos
4. A link to the completed todos page that renders the `completed` todos

#### 5.1 All Todos

- Route: `/`
- Page Component: `Home`

In this page you will render all the todos, both completed or not.

#### 5.2 Completed Todos

- Route: `/completed`
- Page Component: `Completed`

In this page you will render all the **completed** todos.

You will need to think of a way to store or filter the todos that are completed.

A possible solution is to use `[].filter` or to store the todos in a different
`this.state` property.

Feel free to think of a solution for this requirement.

#### 5.3 Active Todos

- Route: `/active`
- Page Component: `Active`

In this page you will render all the **active** todos, that is, all the todos
that are not completed.

You will need to think of a way to store or filter the todos that are active.

A possible solution is to use `[].filter` or to store the todos in a different
`this.state` property.

Feel free to think of a solution for this requirement.

### 💯 Extras

#### 1. Store the todos in `localStorage`

All the todos are stored in `localStorage` so that users can refresh the app and
their previous todos are not lost.

#### 2. Clear all the Completed Todos

Users must be able to clear all the todos that are completed. You can implement
a button in the app footer that allows users to clear the completed todos.

#### 3: Light & Dark Mode Switch

You can implement a light & dark mode switch that can be toggled using the moon
icon in the app header.

## Project delivery

To deliver this project you must follow the steps indicated in the document:

- [Submitting a solution](https://www.notion.so/Submitting-a-solution-524dab1a71dd4b96903f26385e24cdb6)

## Resources

- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [reactjs.org](https://reactjs.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.danilucaci.com"><img src="https://avatars.githubusercontent.com/u/19062818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dani Lucaci</b></sub></a><br /><a href="https://github.com/assembler-school/vanilla-js-project-template/commits?author=danilucaci" title="Code">💻</a> <a href="https://github.com/assembler-school/vanilla-js-project-template/commits?author=danilucaci" title="Documentation">📖</a> <a href="#example-danilucaci" title="Examples">💡</a> <a href="#tool-danilucaci" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
