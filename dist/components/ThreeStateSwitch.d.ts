import { default as React } from 'react';
type ThreeStateSwitchProps = {
    initialState?: 0 | 1 | 2;
    onChange?: (state: 0 | 1 | 2) => void;
    size?: 'xs' | 's' | 'md' | 'lg';
    color?: string;
};
declare const ThreeStateSwitch: React.FC<ThreeStateSwitchProps>;
export default ThreeStateSwitch;
