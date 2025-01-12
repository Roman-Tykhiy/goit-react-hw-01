import css from "./TransactionHistory.module.css";
const Transactions = ({ items }) => {
    return (

        <div className={css.container}>
            <table className={css.table}>
  <thead className={css.theard}>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

                <tbody className={css.tbody}>
                    {items.map(({id, type, amount, currency}) => (<tr className={css.tr} key={id}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>))}
    
  </tbody>
</table>
</div>


   )
   
}

export default Transactions;