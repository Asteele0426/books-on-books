import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Index from '../Index/IndexPage';
import MyBookPage from '../MyBookPage/MyBookPage';
import BookList from '../BookListPage/BookListPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/mybooks" element={<MyBookPage />} />
              <Route path="/books" element={<BookList />} />
              <Route path="/" element={<Index />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
