import styled from 'styled-components';
import { SIDE_SIZE } from '../../components/sidemenu';

export const Container = styled.div`
  display: grid;

  grid-template-columns: ${SIDE_SIZE}px 1fr;
  grid-template-rows: 1fr;
`;