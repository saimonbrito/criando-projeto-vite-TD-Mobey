import { HeaderContainer, HeaderContent, NewTransitionButton } from "./styles";
import { NewTransactionModal } from "..";

import logoImg from '../../assets/logo.svg'
import * as Dialog from "@radix-ui/react-dialog";

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
        <Dialog.Trigger asChild>
        <NewTransitionButton>Nova trasação</NewTransitionButton>
        </Dialog.Trigger>
        
         <NewTransactionModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}