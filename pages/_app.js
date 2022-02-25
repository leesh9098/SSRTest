// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Prolog from '../Prolog';
// import Quiz from "./Quiz";
// import TestResult from "./TestResult";
// import EventQuiz from "./EventQuiz";
// import Submit from "./Submit";
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Prolog />} />
  //       <Route path="/quiz" element={<Quiz />} />
  //       <Route path="/result" element={<TestResult />} />
  //       <Route path="/eventquiz" element={<EventQuiz />} />
  //       <Route path="/submit" element={<Submit />} />
  //     </Routes>
  //   </BrowserRouter>
  // )
}

export default MyApp
