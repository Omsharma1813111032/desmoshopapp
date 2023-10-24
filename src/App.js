import './App.css';
import Items from './components/Items';
import PropsItem from './components/PropsItem';
import Counter from './IncDcrproject.js/Counter';
import data from './Practice/data';
import ToDo from './Practice/ToDo';
// import Form from "./components/Form"
import Frame from "./PropsComponentProject/Frame"



function App() {

  const propsBetterWay = [
    {
      name:"Om Sharma",
      age:20,
      branch:"CSE",
      college:"KEC"
    },
    {
      name:"Rudra Sharma",
      age:19,
      branch:"CSE",
      college:"KEC"
    },
    {
      name:"Harsh Sharma",
      age:20,
      branch:"IT",
      college:"KEC"
    },
    {
      name:"Krishna Sharma",
      age:20,
      branch:"IT",
      college:"KEC"
    },
  ];


  
    
  


  return (
    <div className="App">
      
      <Counter />

      <div className='todo'>
        <ToDo  title={data().info[0].title}  date={data().info[0].date} year={data().info[0].year} month={data().info[0].month} />
        <ToDo  title={data().info[1].title}  date={data().info[1].date} year={data().info[1].year} month={data().info[1].month}  />
        <ToDo  title={data().info[2].title}  date={data().info[2].date} year={data().info[2].year} month={data().info[2].month}  />
        <ToDo  title={data().info[3].title}  date={data().info[3].date} year={data().info[3].year} month={data().info[3].month}  />
      </div>
      
      
        <Frame name="Nirma"/>
        <Frame name="Maggie"/>


        <Items/>
       <PropsItem  name={propsBetterWay[0].name}  age={propsBetterWay[0].age} branch = {propsBetterWay[0].branch} college={propsBetterWay[0].college}>Hello JI</PropsItem>
      
    </div>
  );
}

export default App;
