import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import NewHome from './components/NewHome';
import './index.css'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NewHome />
    }
  ])

  return (
    <div className="w-full overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
