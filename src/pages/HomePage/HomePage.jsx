import { Col, Container } from "react-grid-system";
import Block from "./Block";
import Banner from "./Banner/Banner";
import { cardsCustomer, cardsFreelas, skills } from "./SkillData";
import CustomerCard from "./Advantages/cards/CustomerCard";
import FreelaCard from "./Advantages/cards/FreelaCard";
import Chip from "../../components/Chip/Chip";

const HomePage = () => {
    return (
        <>
            <Banner />
            <Container>
                <Block cards={cardsCustomer} label="Vantagens para contratantes">
                    {cardsCustomer.map(card => <CustomerCard
                    key={card.text}
                    icon={card.icon}
                    text={card.text} />)}
                </Block>
                <Block cards={cardsFreelas} label="Vantagens para freelas">
                    {cardsFreelas.map(card => <FreelaCard
                    key={card.text}
                    icon={card.icon}
                    text={card.text} />)}
                </Block>
                <Block cards={cardsFreelas} label="Quais habilidades você encontra por aqui?">
                    <Col sm={12}>
                        {skills.map(skill => 
                            <Chip key={skill}>{skill}</Chip>
                        )}
                    </Col>
                </Block>
            </Container>
        </>
    )
}

export default HomePage;