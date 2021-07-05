import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './components/Profile/Profile';
import WrapperPage from './components/WrapperPage/WrapperPage';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <WrapperPage>
      <br />
      <br />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <br />
      <br />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <br />
      <br />
      <FriendList friends={friends} />
      <br />
      <br />
      <TransactionHistory items={transactions} />
      <br />
      <br />
    </WrapperPage>
  );
}

export default App;
