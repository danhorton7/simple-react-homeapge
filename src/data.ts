import { componentsImg, jsxImg, propsImg, stateImg } from './assets'

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'Components are the fundamental building blocks of a React application. They allow you to divide your UI into independent, reusable pieces that can be managed separately. By composing multiple components together, you can create complex user interfaces that are easier to maintain and scale.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}
`,
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It provides a concise and readable way to define the structure of your UI while allowing dynamic content through JavaScript expressions. JSX makes it easy to visualize your components’ output.',
    code: `
const element = <h1>Hello, world!</h1>;

function Greeting({ name }) {
  return <h2>Welcome, {name}!</h2>;
}

function App() {
  return (
    <div>
      {element}
      <Greeting name="React Developer" />
    </div>
  );
}
`,
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Props, short for properties, are used to pass data from one component to another. They allow you to make components reusable and configurable by passing dynamic data or functions as input. Props are immutable, meaning their values cannot be changed within the component receiving them.',
    code: `
function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard name="Alice" age={25} />
      <UserCard name="Bob" age={30} />
    </div>
  );
}
`,
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'State is a special object in React that allows components to manage and respond to dynamic data. When the state changes, the component automatically re-renders to reflect the new state. It is used for managing user interactions, dynamic content, and maintaining component behavior.',
    code: `
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function App() {
  return <Counter />;
}
`,
  },
]
