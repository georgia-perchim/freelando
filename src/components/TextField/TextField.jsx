import styled from "@emotion/styled";

const StylizedLabel = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`;

const StylizedInput = styled.input`
    display: block;
    width: 100%;
    padding: 0 ${props => props.theme.spacings.s};
    margin-top: ${props => props.theme.spacings.xs};
    margin-bottom: ${props => props.theme.spacings.s};
    background: ${props => props.theme.colors.white};
    border: 1px solid;
    border-color: ${props => props.theme.colors.neutral.a};
    border-radius: ${props => props.theme.spacings.s};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`;

export const TextField = ({ label, value, onChange, type = 'text' }) => {
    return (
        <StylizedLabel>
            {label}
            <StylizedInput value={value} onChange={ event => onChange(event.target.value) } type={type} />
        </StylizedLabel>
    )
};