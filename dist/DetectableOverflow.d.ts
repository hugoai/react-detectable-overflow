import * as React from 'react';
export interface Props {
    tag?: string;
    style?: object;
    className?: string;
    onChange?: (isOverflowed: boolean) => void;
}
export interface States {
    isOverflowed: boolean;
}
export declare class DetectableOverflow extends React.Component<Props, States> {
    private ref;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(): void;
    updateState(): void;
    render(): React.DOMElement<React.DOMAttributes<Element>, Element>;
}
