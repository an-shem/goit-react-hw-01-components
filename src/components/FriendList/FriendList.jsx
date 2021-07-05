import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { ListFriends } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <ListFriends>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ListFriends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
