import * as React from 'react';

interface ColBreakpoints {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

interface ColProps {
    className?: string;
    breakpoints?: ColBreakpoints;
}

export const Col: React.FC<ColProps> = (props) => {

    const className = () => {
        let classList: string[] = [];

        props.className && classList.push(props.className);

        if (!props.breakpoints) {
            classList.push('col');
        } else {
            let { xl, lg, md, sm } = props.breakpoints;

            xl && classList.push(`col-xl-${xl}`);
            lg && classList.push(`col-lg-${lg}`);
            md && classList.push(`col-md-${md}`);
            sm && classList.push(`col-sm-${sm}`);
        }


        return classList.join(' ');
    }

    return (
        <div className={className()}>
            {props.children}
        </div>
    );
} 