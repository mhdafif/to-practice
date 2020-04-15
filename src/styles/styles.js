import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  color: red;
  text-align: center;
`;

const GridContainer = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Grid = styled.div`
  ${props => props.container && GridContainer}
  /* ${props => props.spacing && css`
    width: calc(100% + ${8 * props.spacing}px);
    margin: ${-4 * props.spacing}px;
  `} */
  & > div {
    ${({spacing}) => spacing && css`
      padding: ${4 * spacing}px
    `}
  }
`;

export const GridItem = styled.div`
  margin: 0;
  box-sizing: border-box;
  /* border: solid 1px #c9c9c9; */

  /* Ada 2 approach terkait md dll */
  /* @media (min-width: 960px) {
    ${props => props.md && css`
      flex-grow: 0;
      max-width: calc(${props.md / 12} * 100%);
      flex-basis: calc(${props.md / 12} * 100%);
  `}
  } */
  ${props => props.md && css`
    @media (min-width: 960px) {
      flex-grow: 0;
      max-width: calc(${props.md / 12} * 100%);
      flex-basis: calc(${props.md / 12} * 100%);
    }
  `}

  ${props => props.lg && css`
    @media (min-width: 1280px) {
      flex-grow: 0;
      max-width: calc(${props.lg / 12} * 100%);
      flex-basis: calc(${props.lg / 12} * 100%);
    }
  `}

  
  ${props => props.sm && css`
    flex-grow: 0;
    max-width: calc(${props.sm / 12} * 100%);
    flex-basis: calc(${props.sm / 12} * 100%);
  `}
`;