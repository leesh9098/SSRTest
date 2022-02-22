import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prolog from './Prolog';
import Quiz from "./Quiz";
import Result from "./result/TestResult";
import EventQuiz from "./EventQuiz";
import Submit from "./Submit";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prolog />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/eventquiz" element={<EventQuiz />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyApp
