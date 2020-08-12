const getThemeColor = () => {
  //Abaixo é para que o Gatsby não quebre ao realizar o build
  /*o Gatsby não faz a compilação dentro do browser, mas sim no terminal e no terminal
  ele não tem o window... se não fizer isso abaixo ele vai quebrar, pois vai dizer
  que não existe o window e não vai conseguir pegar o theme*/
  const theme = typeof window !== "undefined" && window.__theme;

  if (theme === "light") return "#fff";
  if (theme === "dark") return "#16202c";
};

export default getThemeColor;

/*Não houve quebra em html.js porque lá é uma parte externa ao Gatsby*/
