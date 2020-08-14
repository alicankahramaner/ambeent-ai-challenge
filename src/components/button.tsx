import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button: React.FC<ButtonProps> = (props) => {

    const isDisabled = () => {
        console.log('btn', props.disabled);
        return props.disabled && props.disabled === true ? true : undefined;
    }

    return (
        <button
            {...props}
            className={props.className}
            onClick={(event) => props.onClick && props.onClick(event)}
            disabled={isDisabled()}
        >
            {props.text}
        </button>
    )
}