import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  width: 400px;
  margin: 40px auto;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40%;
  margin: 50px;
  border-radius: 50%;
  border: 1px solid #9da09f;
`;

export const Name = styled.p`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
`;

export const Tag = styled.p`
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
`;

export const Location = styled.p`
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
`;

export const StatsList = styled.ul`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background-color: #e0e2e2;
  border: 1px solid #9da09f;
`;

export const StatsLabel = styled.span`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;

export const StatsQuantity = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
`;
