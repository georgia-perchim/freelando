import styled from "@emotion/styled";
import { useState } from "react";

const StyledDropdownListItem = styled.li`
    padding: ${props => props.theme.spacings.xs};
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colors.neutral.c};
    cursor: pointer;
    &:last-child {
        border: none;
    }
    color: ${props => props.activeFocus ? props.theme.colors.focus : 'inherit'};
    &:hover {
        color: ${props => props.theme.colors.focus};
    }
`;

const StylizedDropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    z-index: 1;
    border: 1px solid ${props => props.theme.colors.neutral.a};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    margin: 0;
    padding: 0 ${props => props.theme.spacings.m};
    list-style: none;
`;

const StylizedLabel = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    position: relative;
`;

const StylizedButton = styled.button`
    cursor: pointer;
    display: block;
    width: 100%;
    height: 40px;
    font-size: 18px;
    outline: 18px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.open ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.open ? '0' : '18px'};
    margin-top: ${props => props.theme.spacings.xs};
    padding: ${props => props.theme.spacings.s};
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.neutral.a};
    &:focus {
        border-color: ${props => props.theme.colors.focus};
    }
`;

export const DropdownList = ({ label, options, value, onChange }) => {
    const [open, toggleVisibility] = useState(false);

    const [focusedOption, setFocusedOption] = useState(null);
    
    const changeSelected = (event) => {
        toggleVisibility(true)
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                setFocusedOption(previousFocus => {
                    if (previousFocus === null) {
                        return 0;
                    }
                    if (previousFocus === (options.length - 1)) {
                        return options.length - 1
                    }
                    return previousFocus += 1;
                })
                break;
            case 'ArrowUp':
                event.preventDefault();
                setFocusedOption(previousFocus => {
                    if (!previousFocus) {
                        return 0;
                    }
                    return previousFocus -= 1;
                })
                break;
            case 'Enter':
                event.preventDefault();
                setFocusedOption(null)
                toggleVisibility(false)
                onChange(options[focusedOption])
                break;
            case 'Tab':
            case 'Escape':
                event.preventDefault();
                setFocusedOption(null)
                toggleVisibility(false)
                break;
        
            default:
                break;
        }
    }

    return(
        <StylizedLabel>
            {label}
            <StylizedButton open={open} onClick={() => toggleVisibility(!open)} onKeyDown={changeSelected} type='button'>
                <div>
                    { value ? value.text : 'Selecione' }
                </div>
                <div>
                    <span>{open ? '▲' : '▼'}</span>
                </div>
            </StylizedButton>
            {open && <StylizedDropdownList>
                {options.map((option, index) => <StyledDropdownListItem key={option.value} activeFocus={index === focusedOption} onClick={() => onChange(option)}>
                    {option.text}
                </StyledDropdownListItem>)}
            </StylizedDropdownList>}
        </StylizedLabel>
    )
};