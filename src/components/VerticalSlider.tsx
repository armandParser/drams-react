import React from 'react'

interface VerticalSliderProps {
    isActive: boolean
    onToggle: () => void
    className?: string
    size?: 'xs' | 's' | 'md' | 'lg'
    color?: string
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ isActive, onToggle, className = '', size = 'md', color }) => {
    // Normalize 24px width to match standard 30px thickness -> scale ~1.25
    const baseScale = 1.25
    const scale = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[size] * baseScale

    return (
        <div
            style={{ width: 24 * scale, height: 84 * scale, position: 'relative' }}
            className={className}
        >
            <div
                className={`slider-wrapper ${isActive ? 'active' : 'inactive'}`}
                onClick={onToggle}
                style={{
                    cursor: 'pointer',
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    ['--active-color' as any]: color
                }}
            >
                <div className="slider-track"></div>
                <div className="slider-handle"></div>
                <div className="indicator"></div>
            </div>
        </div>
    )
}

export default VerticalSlider
