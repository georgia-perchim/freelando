import styled from "@emotion/styled";
import { Col } from "react-grid-system";
import { Card } from "../../../../components/Card/Card";
import { Typography } from "../../../../components/Typography/Typography";

const StylizedSpan = styled.span`
  color: ${(props) => props.theme.colors.primary.a};
`;

const CustomerCard = ({ icon, text }) => {
  return (
    <Col sm={6} md={6} lg={3} style={{ marginBottom: "24px" }}>
      <Card withBorder={false}>
        {icon}
        <Typography component="body" variant="body">
          <StylizedSpan>{text}</StylizedSpan>
        </Typography>
      </Card>
    </Col>
  );
};

export default CustomerCard;
