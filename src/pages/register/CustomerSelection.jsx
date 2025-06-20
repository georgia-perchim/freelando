import { Col, Row } from "react-grid-system";
import { Typography } from "../../components/Typography/Typography";
import customer from "./assets/cliente.png";
import freelancer from "./assets/freela.png";
import { Link } from "../../components/Link/Link";
import { Link as RouterLink } from "react-router-dom";
import { useUserRegistrationContext } from "../../context/UserRegistration";

const CustomerSelection = () => {
    const { setProfile } = useUserRegistrationContext();

    return (
        <div style={{ textAlign: 'center' }}>
            <Typography variant="h1" component="h1">
                Crie seu cadastro
            </Typography>
            <Typography variant="h3" component="h2">
                Como podemos te ajudar?
            </Typography>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to='interesses' onClick={() => setProfile('customer')}>
                        <img src={customer} alt="" />
                        <Typography variant="body" component="body">
                            Sou cliente e preciso de um freela!
                        </Typography>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freelancer} alt="" />
                    <Typography variant="body" component="body">
                        Sou um freela e preciso de clientes!
                    </Typography>
                </Col>
            </Row>
            <div>
                <Typography variant="body2" component="body2">
                    Já tem conta?
                </Typography>
                <p>
                    <Link variant="secondary">Faça login!</Link>
                </p>
            </div>
        </div>
    )
};

export default CustomerSelection;