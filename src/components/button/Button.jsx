import React, { useState } from "react";
import styled from "styled-components";

const Button = ({ shape }) => {
  return <StyledBtn>{shape}</StyledBtn>;
};

const StyledBtn = styled.button`
  width: 24px;
  height: 24px;
`;
export default Button;
