import styled from "styled-components";
import { useTema } from "@/contexts/themes";
import Content from "@/components/content";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-template: 120px 120px / 100%;
  row-gap: 60px;
  box-sizing: border-box;
  padding: 2rem;
  place-items: center;
  transition: all 0.3s ease-out;
`;
function Home({ change }) {
  const theme = useTema();

  return (
    <Container theme={theme}>
      <Content change={change} />
    </Container>
  );
}

export default Home;
