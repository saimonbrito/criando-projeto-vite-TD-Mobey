import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummryCard } from "./styles";



export function Summary(){
  return(
    <SummaryContainer>
      <SummryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummryCard>

      <SummryCard>
        <header>
          <span>Saida</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummryCard>

      <SummryCard variant="green">
        <header >
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummryCard>
    </SummaryContainer>
  )
}