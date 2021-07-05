import styled from '@emotion/styled';

export const CardFriend = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const StatusFriend = styled.span`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#07861c' : '#ad0c14')};
`;
export const AvatarFriend = styled.img`
  margin-right: 20px;
`;
export const NameFriend = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: #1e2020;
`;
