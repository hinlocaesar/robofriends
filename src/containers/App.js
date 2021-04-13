import React, {useState,useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App() {
const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState('');


useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
    },[]) // if you add count, only run if count changes.

const OnSearchChange =(event)=>{
    setSearchfield(event.target.value)
}
    
const filterRobots = robots.filter(robot=>{
     return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
 });

    if(robots.length===0){
        return <h1 className='tc'>LOAGING</h1>
    }else{
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={OnSearchChange}/>
                <Scroll>
                <ErrorBoundry>
               <CardList robots={filterRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
        );
    }
}
export default App;