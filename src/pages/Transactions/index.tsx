import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { PriceHighlight, TransactionsConteiner, TransactionsTable} from "./styles";

export function Transactions(){
  return(
    <div>
       <Header/>
       <Summary/>

        <TransactionsConteiner>
            <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <PriceHighlight variant="income">
                  R$ 12.00,00
                </PriceHighlight>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>
              <tr>
                <td width="50%">Hamburger</td>
                <PriceHighlight variant="outcome"> - R$ 59,00
                </PriceHighlight>
                <td>Alimento </td>
                <td> 10/04/2022 </td>
              </tr>
            
            </tbody>
          </TransactionsTable>
        </TransactionsConteiner>
    </div>
  )
}