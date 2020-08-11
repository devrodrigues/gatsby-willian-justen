import React, { useState, useEffect } from "react";

import Icons from "./icons";
import * as S from "./styled";

const Menubar = () => {
  //uso de hooks do React
  //passsamos um valor default 'null' para a variável 'theme'
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === "dark";

  //lembre-se que o useEffect funciona da mesma forma que o componentDidMount, que era executado
  //sempre que o componente era renderizado na tela
  useEffect(() => {
    setTheme(window.__theme);
    //toda vez que o tema mudar, abaixo vai mudar a variável do tema
    window.__onThemeChange = () => setTheme(window.__theme);
    //o [] informa que esse código será rodado só uma vez quando o componente renderizar
  }, []);

  return (
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
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            /*abaixo ele faz uma verificação de qual tema está antes do click*/
            window.__setPreferredTheme(isDarkMode ? "light" : "dark");
          }}
          className={theme}
        >
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
};

export default Menubar;
