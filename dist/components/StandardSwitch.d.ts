import { default as React } from 'react';
interface StandardSwitchProps {
    isActive: boolean;
    onToggle: () => void;
    variant?: 'standard' | 'slurp';
    className?: string;
    size?: 'xs' | 's' | 'md' | 'lg';
    color?: string;
}
declare const StandardSwitch: React.FC<StandardSwitchProps>;
export default StandardSwitch;
