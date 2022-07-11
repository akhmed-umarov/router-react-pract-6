import Header from "../header-link/Header";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import FirstPage from "./first-page/FirstPage";



function App() {
  return (
    <Router>
    <div className="App">
          <main>
            <Routes>
                  <Route path={'/'} element={<Header/>}>
                      <Route path={'first'} element={<FirstPage/>}>
                          <Route path=":id" element={<p>First page second page</p>}/>
                      </Route>
                      <Route path={'second'} element={<p>second</p>}/>
                      <Route path={'three'} element={<p>three</p>}/>
                  </Route>
                  <Route path="*" element={<p>Error page</p>}></Route>
            </Routes>
        </main>   
    </div>
  </Router>
  );
}

export default App;
