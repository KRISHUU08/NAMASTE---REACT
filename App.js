// const heading = React.createElement("h1",
// { id: "head" },
// "Hi Krish!");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//Nested Structure Of Html //

const parent = React.createElement(
    "div", 
    {id: "parent"},
[React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I m h1 tag"),
    React.createElement("h2", {}, "I m h2 tag")]), React.createElement("div", {id: "child"}, [    //use array for two chilren
        React.createElement("h1", {}, "I m h1 tag"),
        React.createElement("h2", {}, "I m h2 tag")])]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




