import imgCompleted from "./assets/cliente-concluido.png";
import { Typography } from "../../components/Typography/Typography";
import styled from "@emotion/styled/macro";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

const StylizedImage = styled.img`
    border-radius: 16px;
    max-width: 100%;
`;

const Completed = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h1" component="h1">
            Seu perfil está completo!
        </Typography>
        <Typography variant="h3" component="h3">
            Agora é só começar a se conectar com os melhores freelancers do mercado!
        </Typography>
      </div>
      <figure>
        <StylizedImage src={imgCompleted} />
      </figure>
      <Row justify="center">
        <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
            <Link to="/cadastro">
                <Button variant="secondary">
                    Voltar para a home
                </Button>
            </Link>
        </Col>
      </Row>
    </>
  );
};

export default Completed;
