import styled from 'styled-components'
import { Colors } from '../../themes/colors.ts'


const DefaultText = styled.span<{ secondary?: boolean, tertiary?: boolean }>(props => ({
  lineHeight: "1.2",
  marginBlockEnd: "0.5rem",
  marginBlockStart: "0px",
  marginBottom: "0.5rem",
  marginInlineEnd: "0px",
  marginInlineStart: "0px",
  marginTop: "0px",
  textSizeAdjust: "100%",
  textAlign: "center",
  fontWeight: 400,
  fontFamily: "overpass",
  color: props.secondary && Colors.lightGrey() ||
    props.tertiary && Colors.orange() ||
    Colors.white(),
}));

export const H2 = styled(DefaultText.withComponent('h2'))({
  fontSize: '2rem',
  fontWeight: 600,

});

export const P = styled(DefaultText.withComponent('p'))({
  fontSize: '15px',
});