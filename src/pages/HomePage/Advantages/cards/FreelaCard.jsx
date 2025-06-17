import styled from "@emotion/styled";
import { Col } from "react-grid-system";
import { Card } from "../../../../components/Card/Card";
import { Typography } from "../../../../components/Typography/Typography";

const StylizedCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${(props) => props.theme.colors.primary.c};
`;

const FreelaCard = ({ icon, text }) => {
  return (
    <Col sm={12} md={12} lg={6} style={{ marginBottom: "24px" }}>
      <Card withBorder={false} variant="secondary">
        <StylizedCardContent>
          {icon}
          <Typography component="body" variant="body">
            {text}
          </Typography>
        </StylizedCardContent>
      </Card>
    </Col>
  );
};

export default FreelaCard;
