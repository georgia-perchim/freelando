import { Col, Container, Row } from "react-grid-system";
import { Header } from "../components/Header/Header";
import { FreelandoLogo } from "../components/Icons/FreelandoLogo";
import { Link } from "../components/Link/Link";
import { Footer } from "../components/Footer/Footer";
import { Typography } from "../components/Typography/Typography";
import { InlineList } from "../components/InlineList/InlineList";
import { InlineListItem } from "../components/InlineListItem/InlineListItem";
import { IconWhatsApp } from "../components/Icons/IconWhatsApp";
import { IconTwitch } from "../components/Icons/IconTwitch";
import { IconInstagram } from "../components/Icons/IconInstagram";
import { IconTwitter } from "../components/Icons/IconTwitter";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Header>
      <Container>
        <Outlet />
      </Container>
      <Footer>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Typography variant="subtitled" component="subtitled">Desenvolvido por Georgia. Projeto fictício sem fins comerciais.</Typography>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Typography variant="subtitled" component="subtitled">Acesse nossas redes:</Typography>
              <InlineList>
                <InlineListItem>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <IconWhatsApp />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="/" aria-label="Link para a Twitch">
                    <IconTwitch />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="/" aria-label="Link para o Instagram">
                    <IconInstagram />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="/" aria-label="Link para o Twitter">
                    <IconTwitter />
                  </a>
                </InlineListItem>
              </InlineList>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
};

export default BaseLayout;
