import styled from '@emotion/styled';

export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 40px auto 0px;
  border: 1px solid rgb(199, 202, 202);
  background-color: #fff;
`;

export const StatisticTitle = styled.h2`
  margin: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  text-transform: uppercase;
  color: rgb(68, 66, 66);
`;

export const StatLlist = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: ${({ color }) => color};
  border: 1px solid rgba(185, 187, 186, 0.479);
`;

export const Label = styled.span`
  margin: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #dae0e0;
`;

export const Percentage = styled.span`
  margin-bottom: 14px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  text-transform: uppercase;
  color: #dae0e0;
`;
