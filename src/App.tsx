import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/LoginPage.tsx';
import Signup from './page/Signup.tsx';
import Layout from './Layout/Layout.tsx';
import Dashboard from './page/Dashboard.tsx';
import Stock from "./page/Stock.tsx";
import AddNewItemsPage from "./page/AddNewItemsPage.tsx";
/*
import Items from './page/Items.tsx';
*/

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/items" element={<Layout><Stock  darkTheme={true} collapsed={true}/></Layout>} />
                <Route path="/" element={<Layout><Dashboard  darkTheme={true} collapsed={true}/></Layout>} />
                <Route path="/addnewitem" element={<Layout><AddNewItemsPage  darkTheme={true} collapsed={true}/></Layout>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;
