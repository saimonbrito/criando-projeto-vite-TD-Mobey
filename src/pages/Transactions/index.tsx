import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/searchForm";
import { Summary } from "../../components/summary";
import { PriceHighlight, TransactionsConteiner, TransactionsTable} from "./styles";
import { TransactionContext } from "../../components/contexts/TransactionContext";


export function Transactions(){
 const {transaction} = useContext(TransactionContext);
 
  return(
    <div>
       <Header/>
       <Summary/>

        <TransactionsConteiner>
        <SearchForm/>
            <TransactionsTable>
            <tbody>
              {transaction.map(transaction => {
                return(
                  <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <PriceHighlight variant={transaction.type}>
                  {transaction.price}
                  </PriceHighlight>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAT}</td>
                </tr>

                )
              })}
            
            </tbody>
          </TransactionsTable>
        </TransactionsConteiner>
    </div>
  )
}