import user from './data/user.json';
import Profile from './components/Profile/Profile';
import WrapperPage from './components/WrapperPage/WrapperPage.jsx';

function App() {
  return (
    <WrapperPage>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </WrapperPage>
  );
}

export default App;
