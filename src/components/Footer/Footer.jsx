import styled from "@emotion/styled";

export const Footer = styled.footer`
    background: ${props => props.theme.colors.primary.a};
    margin-top: ${props => props.theme.spacings.xl};
    padding: ${props => props.theme.spacings.xl};
    color: ${props => props.theme.colors.white};
`;