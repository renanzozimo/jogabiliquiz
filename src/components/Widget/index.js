import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom:24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  h1 {
    font-size: 24px;
    font-weight: 300;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  h1, h2, h3 {
    line-height: 1;
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;