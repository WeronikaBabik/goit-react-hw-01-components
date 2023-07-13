import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friend/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../info/user.json';
import data from '../info/data.json';
import friends from '../info/friends.json';
import transactions from '../info/transactions.json';

export const App = () => {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <h2>Friends</h2>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
