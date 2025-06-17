import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { Typography } from "../../../components/Typography/Typography";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import imgBanner from "./imgTeam.png";

const StylizedImg = styled.img`
  max-width: 100%;
`;

const StylizedFigure = styled.figure`
  padding: ${(props) => props.theme.spacings.l};
  background-color: ${(props) => props.theme.colors.neutral.c};
  color: ${(props) => props.theme.colors.primary.b};
  margin: 0;
`;

const Banner = () => {
  return (
    <StylizedFigure>
      <Container>
        <Row align="center">
          <Col md={5} sm={12}>
            <figcaption>
              <Typography component="h1" variant="h1">
                Uma ponte entre os freelas mais talentosos e os projetos mais
                interessantes!
              </Typography>
            </figcaption>
            <Link to="/cadastro">
              <Button>Quero me cadastrar!</Button>
            </Link>
          </Col>
          <Col md={7} sm={12}>
            <StylizedImg src={imgBanner} alt="" />
          </Col>
        </Row>
      </Container>
    </StylizedFigure>
  );
};

export default Banner;
