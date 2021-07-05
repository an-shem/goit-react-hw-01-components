import {
  TransactionHistoryTable,
  TransactionHistoryThead,
  TransactionHistoryTbody,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryThead>

      <TransactionHistoryTbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </TransactionHistoryTbody>
    </TransactionHistoryTable>
  );
}

export default TransactionHistory;
