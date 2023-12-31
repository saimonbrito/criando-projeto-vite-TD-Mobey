import styled from "styled-components";


export const TransactionsConteiner = styled.main`
  
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 2rem;
 


`;

export const TransactionsTable = styled.table`
 height: 150px;
 width: 100%;
 border-collapse: separate;
 border-spacing: 0 0.5rem;
 margin-top: 1.5rem;


tr{
      padding: 1.25rem 2rem;
      background: ${props => props.theme["gray-700"]};
      


    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;

    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

  }

`;

 interface PriceHighlightprops {
  variant: 'income' | 'outcome';
 }

 export const PriceHighlight = styled.span<PriceHighlightprops>`
   
   color: ${props => props.variant == 'income' ? props.theme["green-300"]: props.theme["red-300"]};

 `;


