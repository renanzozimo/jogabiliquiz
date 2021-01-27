import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom:24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  h1 {
    font-size: 32px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    font-size: 24px;
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

  input {
    border: 3px solid transparent;
    width: 100%;
    outline: 0 none;
    padding: 8px 16px;
    border-radius: 0;
    margin-bottom: 24px;
    margin-top: 8px;
    transition: border-color 275ms ease-in-out;
    will-change: border-color;

    &:focus {
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  button {
    width: 100%;
    padding: 12px 24px;
    border-radius: 4px;
    border: 0 none;
    outline: 0 none;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    transition: transform 275ms ease-in-out, background-color 175ms ease-in-out;
    transform: scale(1);
    will-change: transform;

    &:not([disabled]) {
      background-color: ${({ theme }) => theme.colors.secondary};
      cursor: pointer;
      &:hover{
        transform: scale(1.03);

        &:after {
          opacity: 1;
        }
      }
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.1);
      top: 0;
      left: 0;
      transition: opacity 275ms ease-in-out;
      opacity: 0;
    }
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
