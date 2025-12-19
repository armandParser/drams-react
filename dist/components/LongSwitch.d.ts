import { default as React } from 'react';
interface LongSwitchProps {
    isActive: boolean;
    onToggle: () => void;
    className?: string;
    size?: 'xs' | 's' | 'md' | 'lg';
    color?: string;
}
declare const LongSwitch: React.FC<LongSwitchProps>;
export default LongSwitch;
