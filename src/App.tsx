import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import ContactList from "./Components/ContactList";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Comps component={<ContactList />} />
    }, {
      path: 'test',
      element: <Comps component={<h1>this is test </h1>} />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function Comps(props: { component: any; }) {
  const component = props.component;
  return (
    <div className="flex flex-row">
      <div className="basis-1/6">
        <Sidebar />
      </div>
      <div className="w-full">
        {component}
      </div>
    </div>
  )
}
export default App;
