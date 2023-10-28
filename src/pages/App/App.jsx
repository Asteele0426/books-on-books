import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Index from '../Index/IndexPage';
import MyBookPage from '../MyBookPage/MyBookPage';
import BookList from '../BookListPage/BookListPage';
import EditBookPage from '../EditBookPage/EditBookPage';
import NavBar from '../../components/NavBar/NavBar';
import TestPage from '../MyBookPage/TestPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/mybooks" element={<TestPage user={user}/>} />
              <Route path="/books" element={<BookList user={user} />} />
              <Route path="/" element={<Index />} />
              <Route path="/edit" element={<EditBookPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
