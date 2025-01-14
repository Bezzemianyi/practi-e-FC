import styles from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.nameCals}>Type</th>
          <th className={styles.nameCals}>Amount</th>
          <th className={styles.nameCals}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.rowsData} key={id}>
            <td className={styles.data}>{type}</td>
            <td className={styles.data}>{amount}</td>
            <td className={styles.data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
