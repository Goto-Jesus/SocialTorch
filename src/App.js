import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Settings from "./components/Settings/Setting";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { Route, Routes } from "react-router-dom";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar sidebar={props.state.sidebar} />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/' element={<Profile store={props.store}/>}/>
                    <Route path="/dialogs/" element={<DialogsContainer store={props.store}/>} />
                    <Route path="/news/" element={<News />} />
                    <Route path="/music/" element={<Music />} />
                    <Route path="/settings/" element={<Settings />} />
                </Routes>
            </div>
        </div>

    );
}

export default App;
