import * as React from 'react';
import { vAlign } from '../../models';

interface RowProps {
    className?: string;
    vAlign?: vAlign;
}

export const Row: React.FC<RowProps> = (props) => {

    const className = () => {
        let classList: string[] = ['row'];

        props.className && classList.push(props.className);

        props.vAlign && classList.push(`align-items-${props.vAlign}`);

        return classList.join(' ');
    }

    return (
        <div className={className()}>
            {props.children}
        </div>
    );
}