import './Table.css';
function Table(props){
    return(
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((i)=>(
            <tr key={i.year}>
            <td>{i.year}</td>
            <td>{i.savingsEndOfYear.toFixed(2)}</td>
            <td> {i.yearlyInterest.toFixed(2)}</td>
            <td>{Number(props.intialInvestment)+Number(i.yearlyContribution)*Number(i.year)}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    
    )
}

export default Table;