import * as Dialog from "@radix-ui/react-dialog";
import { ClosButton, Content, Overlay, TransitionType, TransitionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'


export function NewTransactionModal(){
  return (
    <Dialog.Portal>
          <Overlay/>
          <Content>
            <Dialog.Title>Nova transação</Dialog.Title>
            <ClosButton>
              <X />
            </ClosButton>

            <form action="">
              <input type="text" placeholder="Descrição"required/>
              <input type="text" placeholder="Preço" required/>
              <input type="text" placeholder="Categoria" required/>

              <TransitionType>
              <TransitionTypeButton variant="income" value="income">
                 <ArrowCircleUp size={24}/>
                 Entrada
                </TransitionTypeButton>
              </TransitionType>

              <TransitionType>
              <TransitionTypeButton variant="outcome" value="outcome">
                 <ArrowCircleDown size={24}/>
                 Saida
                </TransitionTypeButton>
              </TransitionType>
              
               <button type="submit">
                Cadastrar
                </button>
            </form>
            <Dialog.Close/>
          </Content>
        </Dialog.Portal>
  )
}