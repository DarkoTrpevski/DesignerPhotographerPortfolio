import React from 'react';
import { FooterContainer, WebInfo, LinkItem, LinkList, ListItem } from '../../styles/footerStyles';
import { Container } from '../../styles/globalStyles';
import { socialLinks } from '../../utils/links';



const Footer = () => {

  return (
    <FooterContainer className="Footer">
      <Container>
        <WebInfo className="Footer">
          © 2021 Dmitry Kozachyshyn
          <br />
          All rights reserved.
        </WebInfo>
        <LinkList>
          {socialLinks.map((link, idx) => (
            <ListItem key={idx}>
              <LinkItem data-text={link.name} to={link.url}>{link.name}</LinkItem>
            </ListItem>
          ))}
        </LinkList>
      </Container>
    </FooterContainer>
  )
}

export default Footer;