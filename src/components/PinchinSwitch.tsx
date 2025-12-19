import React from 'react'

interface PinchinSwitchProps {
    isActive: boolean
    onToggle: () => void
    variant?: 'simple' | 'track'
    className?: string
    size?: 'xs' | 's' | 'md' | 'lg'
    color?: string
}

const PinchinSwitch: React.FC<PinchinSwitchProps> = ({
    isActive,
    onToggle,
    variant = 'simple',
    className = '',
    size = 'md',
    color
}) => {
    // Normalize simple variant (23px) to match standard ~30px -> scale ~1.3
    // Track variant (30px) is already normalized -> scale 1
    const baseScale = variant === 'simple' ? 1.3 : 1
    const scale = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[size] * baseScale

    // Determine base dimensions based on variant
    const width = variant === 'track' ? 126 : 60
    const height = variant === 'track' ? 30 : 23

    if (variant === 'track') {
        return (
            <div style={{ width: width * scale, height: height * scale, position: 'relative' }} className={className}>
                <div
                    className={`pinchin-track-switch ${isActive ? 'active' : ''}`}
                    onClick={onToggle}
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: 'top left',
                        ['--active-color' as any]: color
                    }}
                >
                    <div className="track-bar"></div>
                    <div className="switch-pill"></div>
                    <div className="switch-indicator"></div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ width: width * scale, height: height * scale, position: 'relative' }} className={className}>
            <div
                className={`pinchin-switch ${isActive ? 'active' : ''}`}
                onClick={onToggle}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    ['--active-color' as any]: color
                }}
            >
                <div className="switch-track"></div>
                <div className="switch-pill"></div>
                <div className="switch-indicator left"></div>
                <div className="switch-indicator right"></div>
            </div>
        </div>
    )
}

export default PinchinSwitch
