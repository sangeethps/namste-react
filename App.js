// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[React.createElement('h1',{},"iam a h1 element"),React.createElement('h2',{},"iam a h2 element")]),
    React.createElement("div",{id:"child"},[React.createElement('h1',{},"iam a h1 element"),React.createElement('h2',{},"iam a h2 element")])
]
        );



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
