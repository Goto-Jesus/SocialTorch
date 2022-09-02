import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
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
                    <Route path='/profile/' element={<Profile profilePage={props.state.profilePage} 
                    addPost={props.addPost}
                    currentPost={props.currentPost}/>} />
                    <Route path="/dialogs/" element={<Dialogs dialogsPage={props.state.dialogsPage} />} />
                    <Route path="/news/" element={<News />} />
                    <Route path="/music/" element={<Music />} />
                    <Route path="/settings/" element={<Settings />} />
                </Routes>
                {/*<Profile />*/}
                {/*<Dialogs />*/}
                {/*<News/>*/}
                {/*<Music/>*/}
                {/*<Settings />*/}
            </div>
        </div>

    );
}

export default App;
