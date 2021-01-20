import { theme } from "@/contexts/themes";
import styled from "styled-components";
const Main = styled.div`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  width: 400px;
  height: 120px;
  border-radius: 20px;
  padding: 0 20px;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 0px 44px 10px rgba(91, 91, 91, 0.4);
`;
const Button = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: ${({ background }) => background};
  box-shadow: 0px 0px 44px 10px rgba(91, 91, 91, 0.4);
  outline: none;
  cursor: pointer;

  border: 0;
`;
function Content({ change }) {
  return (
    <>
      <h1>Welcome!</h1>
      <Main>
        <Button
          background={theme.default.background}
          onClick={() => change(theme.default)}
        ></Button>
        <Button
          background={theme.solaris.background}
          onClick={() => change(theme.solaris)}
        ></Button>
        <Button
          background={theme.brown.background}
          onClick={() => change(theme.brown)}
        ></Button>
      </Main>
    </>
  );
}
export default Content;
