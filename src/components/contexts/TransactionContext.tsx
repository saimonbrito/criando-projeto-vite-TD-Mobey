import { ReactNode, createContext, useEffect, useState } from "react"

interface transaction {
  id:number;
  description:string;
  type: 'income'| 'outcome';
  price: number;
  category:string;
  createdAT:string;
}

interface TransactionContextType{
  transaction: transaction[];

}

interface TransactionProviderProps{
  children: ReactNode;
}
 export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({children}:TransactionProviderProps) {

  const [transaction,setTransaction] = useState<transaction[]>([])

  async function ladTransactions(){
    const response = await fetch("http://localhost:3333/transaction")
     const data = await response.json();
        
     setTransaction(data)
      
  }
  
  
   useEffect(() =>{
    
    ladTransactions();
   },[])
  return (

    <TransactionContext.Provider value={{transaction}} >
        {children}
    </TransactionContext.Provider>
  )
}