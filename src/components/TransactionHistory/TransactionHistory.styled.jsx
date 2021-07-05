import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 1px solid #dfeff091;
  table-layout: fixed;
  width: 600px;
  margin: 0 auto;
`;

export const TransactionHistoryThead = styled.thead`
  & th {
    text-transform: uppercase;
    font-weight: bold;
    padding: 15px;
    color: #fff;
    background: #47cddf;
    border: 1px solid #47cddf;
  }
`;

export const TransactionHistoryTbody = styled.tbody`
  & td {
    padding: 15px;
    border: 1px solid #eee;
    text-align: center;
    text-transform: uppercase;
    color: #5e5b5b;
  }

  tr:nth-of-type(odd) {
    background: #fff;
  }

  tr:nth-of-type(even) {
    background: #dbedf0;
  }
`;
