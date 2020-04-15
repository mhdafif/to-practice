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
  ${props => props.spacing && css`
    width: calc(100% + ${8 * props.spacing}px);
    margin: ${-4 * props.spacing}px;
  `}
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

export const Paper = styled.div`
  padding: 12px;
  text-align: center;
  
  /* color: rgba(0, 0, 0, 0.87); */
  background-color: #424242;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  /* Rounded */
  border-radius: 4px;

    
  /* Elevation1 */

  box-shadow: 
    0px 2px 1px -1px rgba(0,0,0,.2), 
    0px 1px 1px 0px rgba(0,0,0,.14), 
    0px 1px 3px 0px rgba(0,0,0,.12);
    
  ${props => {
    if (props.elevation !== undefined) {
      if (props.elevation === 0) {
        return css`
          box-shadow: none;
        `
      } else {
        switch (props.elevation) {
          case 1:
            return css`
              box-shadow: 
                0px 2px 1px -1px rgba(0,0,0,.2), 
                0px 1px 1px 0px rgba(0,0,0,.14), 
                0px 1px 3px 0px rgba(0,0,0,.12);
            `;
          case 2:
            return css`
              box-shadow: 
                0px 3px 1px -2px rgba(0,0,0,.2), 
                0px 2px 2px 0px rgba(0,0,0,.14), 
                0px 1px 5px 0px rgba(0,0,0,.12);
            `;
          case 3:
            return css`
              box-shadow: 
                0px 3px 3px -2px rgba(0,0,0,.2), 
                0px 3px 4px 0px rgba(0,0,0,.14), 
                0px 1px 8px 0px rgba(0,0,0,.12);
            `;
        
          default:
            break;
        }
      }
    }
  }}
`;