import { default as React } from 'react';
interface IOSwitchProps {
    isActive: boolean;
    onToggle: () => void;
    className?: string;
    size?: 'xs' | 's' | 'md' | 'lg';
    color?: string;
}
declare const IOSwitch: React.FC<IOSwitchProps>;
export default IOSwitch;
