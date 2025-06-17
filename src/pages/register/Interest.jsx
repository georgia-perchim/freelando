import { Typography } from "../../components/Typography/Typography";
import RadioGroup from "../../components/Radio/RadioGroup";
import { Col, Row } from "react-grid-system";
import { Button } from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useUserRegistrationContext } from "../../context/UserRegistration";
import { useEffect } from "react";

const options = [
  {
    value: 1,
    label: "TI e Programação",
  },
  {
    value: 2,
    label: "Design e Multimídia",
  },
  {
    value: 3,
    label: "Revisão",
  },
  {
    value: 4,
    label: "Tradução",
  },
  {
    value: 5,
    label: "Transcrição",
  },
  {
    value: 6,
    label: "Marketing",
  },
];

const Interest = () => {
  
  const { user, setInterest, selectingInterests } = useUserRegistrationContext();

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!selectingInterests()) {
  //     navigate('/cadastro')
  //   }
  // }, [navigate, selectingInterests])

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h1" component="h1">
          Crie seu cadastro
        </Typography>
        <Typography variant="h3" component="h2">
          Qual a área de interesse?
        </Typography>
        <RadioGroup options={options} value={user.interest} onChange={setInterest} />
        <Row>
          <Col lg={6} md={6} sm={6}>
            <Link to="/cadastro">
              <Button variant="secundary">Anterior</Button>
            </Link>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div style={{ textAlign: "right" }}>
              <Link to="/cadastro/dados-pessoais">
                <Button variant="primary">Próximo</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Interest;
