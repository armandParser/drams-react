import { default as React } from 'react';
interface PinchinSwitchProps {
    isActive: boolean;
    onToggle: () => void;
    variant?: 'simple' | 'track';
    className?: string;
    size?: 'xs' | 's' | 'md' | 'lg';
    color?: string;
}
declare const PinchinSwitch: React.FC<PinchinSwitchProps>;
export default PinchinSwitch;
