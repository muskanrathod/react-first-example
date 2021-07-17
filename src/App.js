import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";

const Footer = () => {
  return <div className="foot">
  <ul className="rows">
    <li>React example</li>
    <li>React example</li>
    <li>React example</li>
    <li>React example</li>
    <li>React example</li>
    <li>React example</li>
  </ul>
</div>
};

const App = () => {
  return <>
    <div><h1 className="header">My First React Example Website</h1></div>
    <About />
    <div><Home /></div>
    <div><Home /></div>
    <div><Home /></div>
    <div><Home /></div>
    <div><Home /></div>
    <div><Home /></div>
    <Footer />
  </>
}

// const styling = {backgroundColor: "greenYellow", marginTop: "100px"};

// const App = () => {
//   // let x = "love you";
//   // let morning = true;
//   // let obj = {
//   //   name: 'muskan',
//   //   company: 'advantal',
//   // };
//   const hello = (param) => {
//     console.log(param);
//     alert(param);
//     //return <p>called</p>
//   };

//   return(
//     <>
//     {/* <h1>Hello World</h1>
//     <h1>hayyyyeee</h1>
//     <h1>{x}</h1>
//     <p>
//       Name {obj.name}
//       Company {obj.company}
//     </p>
//     <p>{hello()}</p>
//     {helloo()} 
//     <p>Greeting : {morning ? "good morning" : "good evening"}</p>
//     <p>{morning && "good morning"}</p> */}
//     <h1 style={styling}>Hello World</h1>
//     <button 
//       onClick={()=>{
//         hello("hello");
//       }}
//       >
//         Click Me
//     </button>
//     <input type="text" placeholder="enter some text" onKeyPress={() => alert("pressed")} />
//     </>
//   );
// };

export default App;
