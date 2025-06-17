import styled from "@emotion/styled";
import { Typography } from "../../components/Typography/Typography";
import { Row } from "react-grid-system";

const StylizedContainer = styled.div`
    text-align: center;
    padding-top: ${props => props.theme.spacings.s};
`;

const Block = ({ label, children }) => {
    return(
        <StylizedContainer>
            <Typography component="h2" variant="h2">
                {label}
            </Typography>
            <Row>
                {children}
            </Row>
        </StylizedContainer>
    )
};

export default Block;