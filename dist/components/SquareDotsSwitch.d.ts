import { default as React } from 'react';
interface SquareDotsSwitchProps {
    isActive: boolean;
    onToggle: () => void;
    className?: string;
    size?: 'xs' | 's' | 'md' | 'lg';
    color?: string;
}
declare const SquareDotsSwitch: React.FC<SquareDotsSwitchProps>;
export default SquareDotsSwitch;
