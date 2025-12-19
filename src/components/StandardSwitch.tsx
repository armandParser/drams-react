import React from 'react'

interface StandardSwitchProps {
    isActive: boolean
    onToggle: () => void
    variant?: 'standard' | 'slurp'
    className?: string
    size?: 'xs' | 's' | 'md' | 'lg'
    color?: string
}

const StandardSwitch: React.FC<StandardSwitchProps> = ({
    isActive,
    onToggle,
    variant = 'standard',
    className = '',
    size = 'md',
    color
}) => {
    const baseClass = variant === 'slurp' ? 'slurp-switch' : 'standard-switch'
    const scale = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[size]

    return (
        <div
            className={className}
            style={{
                width: 60 * scale,
                height: 30 * scale,
                position: 'relative'
            }}
        >
            <div
                className={`${baseClass} ${isActive ? 'active' : ''}`}
                onClick={onToggle}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    ['--active-color' as any]: color
                }}
            >
                <div className="switch-track"></div>
                <div className="switch-knob"></div>

                {variant === 'slurp' && (
                    <>
                        <div className="switch-indicator left"></div>
                        <div className="switch-indicator right"></div>
                    </>
                )}
            </div>
        </div>
    )
}

export default StandardSwitch
