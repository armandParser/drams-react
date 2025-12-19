import React from 'react'

interface RollinSwitchProps {
    isActive: boolean
    onToggle: () => void
    variant?: 'simple' | 'dots'
    className?: string
    size?: 'xs' | 's' | 'md' | 'lg'
    color?: string
}

const RollinSwitch: React.FC<RollinSwitchProps> = ({
    isActive,
    onToggle,
    variant = 'simple',
    className = '',
    size = 'md',
    color
}) => {
    const baseClass = variant === 'dots' ? 'rollin-switch-dot' : 'rollin-switch'
    const scale = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[size]

    return (
        <div style={{ width: 60 * scale, height: 30 * scale, position: 'relative' }} className={className}>
            <div
                className={`${baseClass} ${isActive ? 'active' : ''}`}
                onClick={onToggle}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    ['--active-color' as any]: color
                }}
            >
                <div className="switch-track">
                    <div className="track-fill"></div>
                </div>
                <div className="switch-ball">
                    {variant === 'dots' && (
                        <>
                            <div className="ball-dot gray"></div>
                            <div className="ball-dot orange"></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RollinSwitch
