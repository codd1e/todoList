import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode
    variant: CardVariant,
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         children,
         variant,
    }) => {
    const [state, setState] = useState(0);
    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
            background: variant === CardVariant.primary ? 'lightgrey' : ''
        }}
        >
            {children}
        </div>
    );
};

export default Card;