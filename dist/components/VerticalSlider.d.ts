import { default as React } from 'react';
interface VerticalSliderProps {
    isActive: boolean;
    onToggle: () => void;
    className?: string;
    size?: 'xs' | 's' | 'md' | 'lg';
    color?: string;
}
declare const VerticalSlider: React.FC<VerticalSliderProps>;
export default VerticalSlider;
