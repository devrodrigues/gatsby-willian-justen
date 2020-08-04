import styled from "styled-components";

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

/*Não preciso adicionar estilos ao elemento da lista mas crio aqui para não precisar 
chamar diretamente a tag <li>. Se precisar também futuramente estilizar o li,
já está aqui.*/
export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: #1fa1f2;
  }
`;

/*Define o tamanho do meu ícone e faz seu preenchimento inicial*/
export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
