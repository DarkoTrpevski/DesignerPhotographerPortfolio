import styled from "styled-components"

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 5rem;
`
export const WebInfo = styled.footer`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 2px;
  opacity: .4;
  user-select: none;
  text-transform: uppercase;
  margin: 130px 5vw 80px 5vw;
`
export const LinkList = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`
export const ListItem = styled.li`
  position: relative;
  margin: 2rem;
  padding: 1rem;
  list-style: none;
  overflow: hidden;

  &:hover::before {
    left: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -100%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background: #262626;
    transition: 0.3s;

  }
`

export const LinkItem = styled.a`
  display: block;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: transparent!important;
  transition: 0.3s;

  &:hover::before {
    color: var(--gold-clr);
    transform: translate(6px, -2px);
  }

  &:hover::after {
    transform: translate(-6px, 2px);
  }

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    transition: 0.3s;
    transition-delay: 0.25s;

    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  }
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
    transition: 0.3s;
    transition-delay: 0.25s;

    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  }
`