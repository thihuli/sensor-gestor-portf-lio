import styled from 'styled-components';

function percentage(num, per) {
  return (num / 100) * per;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ size }) => size + percentage(size, 10)}px;
  height: ${({ size }) => size + percentage(size, 10)}px;
  border-radius: 50%;
  background: ${({ color, theme }) =>
    color ? theme.palette.mainGradient : ''};

  img {
    border-radius: 50%;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }
`;
