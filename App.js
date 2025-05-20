import React from "react";
import ReactDOM from "react-dom/client";

//TODO: React Element
// const jsxHeading = <h1 className="head">Namaste React using jsx 🚀</h1>
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using jsx 🚀
    </h1>
)


//TODO: React Components
//! Class based components - Old way to write code
//! Functional based components - New way to write code

/* Both are same
const HeadingComponent = () => {
    return <h1>This is a functional components</h1>
}

 const HeadingComponent = () => (
   <h1 className="head">This is a functional components</h1>
 )
*/

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">This is a functional components</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
