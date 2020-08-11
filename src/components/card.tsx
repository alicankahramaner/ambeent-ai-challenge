import * as React from 'react';

interface CardProps {
    className?: string;
    title?: string;
    subTitle?: string;
    reversSortTitle?: boolean;
}

export const Card: React.FC<CardProps> = (props) => {

    const baseClassName: string = 'card';

    const className = (suffix?: string) => {

        if (suffix) {
            return `${baseClassName}_${suffix}`;
        }

        const classList: string[] = ['card'];

        props.className && classList.push(props.className);

        props.reversSortTitle && classList.push('reverseTitle');

        return classList.join(' ');
    }

    const title = () => {
        if (!props.title) {
            return null;
        }

        return (
            <div className={className('title')}>
                <h2>{props.title}</h2>
                {props.subTitle ?
                    <span>{props.subTitle}</span>
                    : null
                }
            </div>
        )
    }

    return (
        <div className={className()}>
            {title()}
            {props.children}
        </div>
    )
}