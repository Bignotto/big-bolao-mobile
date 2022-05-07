import {
  Container,
  Header,
  HeaderTitle,
  HeaderText,
  Content,
  ContentTitle,
  ContentText,
  Footer,
  FooterTitle,
  FooterText,
} from "./styles";

export default function ThemeScreen() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Cabeçalho</HeaderTitle>
        <HeaderText>QAT x EQU</HeaderText>
      </Header>
      <Content>
        <ContentTitle>Resultado</ContentTitle>
        <ContentText>QAT 0 x 2 EQU</ContentText>
      </Content>
      <Footer>
        <FooterTitle>Seu Palpite</FooterTitle>
        <FooterText>QAT 0 x 1 EQU</FooterText>
      </Footer>
    </Container>
  );
}
