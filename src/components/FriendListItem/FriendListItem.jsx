import PropTypes from 'prop-types';
import {
  CardFriend,
  StatusFriend,
  AvatarFriend,
  NameFriend,
} from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <CardFriend>
      <StatusFriend isOnline={isOnline} />
      <AvatarFriend src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </CardFriend>
  );
}

FriendListItem.defaultProps = {
  avatar:
    'https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
