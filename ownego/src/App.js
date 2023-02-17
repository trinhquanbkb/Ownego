import './App.css';
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './util/configRoute'


function App() {

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((p) => {
          const Element = p.component;
          const Layout = p.layout
          if (Layout) {
            return (
              <Route path={p.pathLayout} element={<Layout />} >
                <Route path={p.path} element={<Element />} />
              </Route>
            )
          } else {
            return (
              <Route path={p.path} element={<Element />} />
            )
          }
        })}
      </Routes>
    </div>
  );
}

export default App;
