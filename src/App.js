import './App.css';
import GetData from './components/GetData';
import PostData from './components/PostData';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <h3>GET method - API Data Fecthing</h3>
      <GetData />
      <h3>ADD &amp; DELETE method - API Data Fecthing</h3>
      <PostData />
      <h3>Child Component to Parent Component to data sharing</h3>
      <ParentComponent />
    </div>
  );
}

export default App;
