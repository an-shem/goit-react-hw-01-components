import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import Profile from './components/Profile/Profile';
import WrapperPage from './components/WrapperPage/WrapperPage';
import Statistics from './components/Statistics/Statistics';

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
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
    </WrapperPage>
  );
}

export default App;
