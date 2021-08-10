import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const BarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover, &.clicked {
    transition: all 0.3s ease;
    .Bar-1, .Bar-3 {
      width: 0;
    }
    .Bar-2 {
      width: 100%;
    }
  }

  @media(max-width:1240px) {
    display: flex;
  }
`
export const BarsWrapper = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Bar = styled.div`
  width: 80%;
  height: 1px;
  /* background-color: var(--gold-clr); */
  background-color: #fff;
  transition: all 0.3s ease;
  &:not(:last-child) {
    margin-bottom: 5px;
  }   
`