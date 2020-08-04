import React from "react";

import Icons from "./icons";
import * as S from "./styled";

const Menubar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Icons.Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Icons.Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Icons.Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Icons.Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir pra o topo">
        <Icons.Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
);

export default Menubar;
