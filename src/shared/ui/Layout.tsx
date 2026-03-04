import type { ReactNode } from "react"
import * as S from './Layout.styles'

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <S.Container>
        <S.Header>
            <S.Title>Система управления корзинами</S.Title>
        </S.Header>
        <S.MainContent>{children}</S.MainContent>
    </S.Container>
  )
}
