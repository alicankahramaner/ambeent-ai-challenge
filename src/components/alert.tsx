import * as React from 'react';

enum IconEnum {
    info = 'info',
    danger = 'danger',
    warning = 'warning'
}

type IconType = 'info' | 'danger' | 'warning';

interface AlertProps {
    message: string;
    type?: IconType;

}

export const Alert: React.FC<AlertProps> = (props) => {

    const className = () => {
        const classList: string[] = ['alert'];

        if (props.type) {
            classList.push(props.type);
        } else {
            classList.push(IconEnum.info)
        }

        return classList.join(' ');
    }

    return (
        <span className={className()}>
            {props.message}
        </span>
    )
}