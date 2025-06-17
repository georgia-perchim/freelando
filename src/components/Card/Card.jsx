import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: ${(props) => props.theme.spacings.l};
  background: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.secondary.a
      : props.theme.colors.secondary.c};
  border: ${(props) => (props.withBorder ? "1px solid" : "none")};
  border-radius: ${(props) => props.theme.spacings.s};
`;

export const Card = ({ children, withBorder = true, variant = "primary" }) => {
  return (
    <StyledDiv withBorder={withBorder} variant={variant}>
      {children}
    </StyledDiv>
  );
};
