import React from "react";
import styled from "styled-components"
import { IChildren } from "../../models/generic-react-children";
import useMediaQuery from "../../hooks/useMediaQuery.tsx";
import { Colors } from "../../themes/colors.ts"

interface IStyledLayout {
  mobile: boolean
}

const Layout = ({ children }: IChildren) => {
  const matches = useMediaQuery('(max-width: 415px)');
  return (
    <StyledLayout mobile={matches}>
      {children}
    </StyledLayout>
  )
}

const StyledLayout = styled.div<IStyledLayout>(({ mobile }) => ({
  background: Colors.veryDarkBlue(),
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  padding: "8px",
  height: "100vh",
  ...(mobile ?
    { width: "80%", justifyContent: "start", marginTop: "55px" }
    : {
      width: "100%"
    })
}));

export default Layout;