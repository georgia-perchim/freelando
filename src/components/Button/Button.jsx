import styled from "@emotion/styled";

const StylizedPrimaryButton = styled.button`
    background: ${props => props.theme.colors.primary.b};
    color: ${props => props.theme.colors.primary.white};
    border-radius: ${props => props.theme.spacings.s};
    padding: ${props => props.theme.spacings.xs} ${props => props.theme.spacings.s};
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    border: none;
    &:hover {
        background: ${props => props.theme.colors.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.colors.dark.d};
    }
`;

const StylizedSecondaryButton = styled.button`
    background: transparent;
    color: ${props => props.theme.colors.primary.b};
    border: 2px solid ${props => props.theme.colors.primary.b};
    border-radius: ${props => props.theme.spacings.s};
    padding: ${props => props.theme.spacings.xs} ${props => props.theme.spacings.s};
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.colors.dark.b};
        color: ${props => props.theme.colors.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.colors.focus};
    }
`;

export const Button = ({ children, variant = 'primary' }) => {
    if (variant === 'primary') {
        return <StylizedPrimaryButton>
            {children}
        </StylizedPrimaryButton>
    }
    return <StylizedSecondaryButton>
        {children}
    </StylizedSecondaryButton>
};

