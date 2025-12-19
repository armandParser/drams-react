import { default as React } from 'react';
interface RollinSwitchProps {
    isActive: boolean;
    onToggle: () => void;
    variant?: 'simple' | 'dots';
    className?: string;
    size?: 'xs' | 's' | 'md' | 'lg';
    color?: string;
}
declare const RollinSwitch: React.FC<RollinSwitchProps>;
export default RollinSwitch;
