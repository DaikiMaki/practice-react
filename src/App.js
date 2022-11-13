import logo from './logo.svg';
import './App.css';
import BlogList from './components/BlogList';

function App() {
  return (
    <BlogList
      title={"初めてのReact"}
      content={"ハンズオンで学習していきます"}
    >
    </BlogList>
  );
}

export default App;
