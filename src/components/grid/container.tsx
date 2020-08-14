import * as React from 'react';

interface ContainerProps {
    isFluid?: boolean;
    className?: string;
}

export const Container: React.FC<ContainerProps> = (props) => {

    const className = () => {
        let classList: string[] = [];

        if (props.isFluid) {
            classList.push('container-fluid');
        } else {
            classList.push('container');
        }

        props.className && classList.push(props.className);

        return classList.join(' ');
    }

    return (
        <div className={className()}>
            {props.children}
        </div>
    )
}