import logo from './logo.svg';
import './App.css';
import Technologies_ from './Technologies_';
import Header_ from './Header_';
import Footer_ from './Footer_';

// function App() { // вызов по старому типу
//   return (
//     <div className="App">
//     </div>
//   );
// }

// const App = () => {  // стрелочный вариант
//   return(
//     <div>
//       <Header /> // тег компонента Header который является функцией описаной ниже...
//       <div className="App">
//         <ul>
//           <li>html</li>
//           <li>css</li>
//           <li>js</li>
//           <li>react</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

const App_ = () => {
  return (
    <div>
      <Header_ />
      <Technologies_ />
      <Aboute_ />
      <Footer_ />
    </div>
  );
}



const Aboute_ = () => {
  return (
    <div>
      <h1>My Name Vadya</h1>
    </div>
  );
}
export default App_;
