# B15-A05-Devstack-Assignment

My project is a simple React website where users can explore different
web development technologies and create their own development stack.

Users can see technologies like React, Node.js, PostgreSQL, JavaScript,
TypeScript, Docker etc. They can add technologies to their stack and also
remove them when needed.

# Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Toastify
- JSON
- Vite
- HTML5

# Features

## 1. Explore Technologies
Users can see different technologies with their name, icon, category,
description, difficulty level and rating.

## 2. Build Your Own Stack
Users can add technologies to "Your Stack" and create their own development
stack. Same technology can't be added two times.

## 3. Add and Remove Technologies
Users can remove a single technology or remove all technologies from the stack.
Toast notifications are also shown when adding or removing technologies.

---

# i. What is JSX, and why is it used in React?

JSX is a syntax used in React which lets us write HTML like code inside
JavaScript. It makes the UI code easier to understand and write.

# ii. What is the difference between props and state?

Props are used to send data from a parent component to a child component.
Props are basically read-only, child component should not change it.

State is data which is managed inside a component and it can change when
something happens in the application.

In simple way, props comes from parent and state is managed by the component
itself.

# iii. What does the useState hook do, and where did you use it in this project?

useState is a React hook which is used to store and change data in a
component.
In this project I used useState for storing the selected technologies in
the stack.

For example:
const [stack, setStack] = useState([]);
When I add or remove a technology, the stack state is updated and the UI
changes automatically.
I also used it for the mobile navbar menu.

# iv. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used when we want to do something after the component renders.
It is useful for things like fetching data, API calls etc.

In this project I used useEffect to load the technology data from the
JSON file when the website loads.

useEffect(() => {
    // load JSON data
}, []);

The empty [] means this effect runs when the component is loaded.

# v. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.

It helps React understand which item is changed, added or removed. This makes
the UI update properly.

For example:

technologies.map((technology) => (
    <TechnologyCard
        key={technology.id}
        technology={technology}
    />
))

Here I used the technology id as the key because every id is unique.

# vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things in the UI depending on
a condition.

I used it in the "Your Stack" section.

When there is no technology in the stack, it shows an empty message:

{stack.length === 0 ? (
    <p>No technologies selected yet.</p>
) : (
    stack.map((technology) => (
        // show selected technology
    ))
)}

So if the stack is empty, the empty message is shown. Otherwise the selected
technologies are displayed.

# vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We can pass data from parent to child using props.
For example, in my project the parent sends technology data to the
TechnologyCard component:

<TechnologyCard
    technology={technology}
    onAdd={handleAdd}
/>

The child can send something back by calling a function that was passed
from the parent as a prop.
In my project, when the user clicks the "Add to Stack" button inside the
child component, it calls:

onAdd(technology);

Then the parent component handles the adding part.

So basically parent gives data or function to child through props, and child
can call that function to communicate back with the parent.
