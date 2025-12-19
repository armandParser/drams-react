import React from 'react'

interface IOSwitchProps {
    isActive: boolean
    onToggle: () => void
    className?: string
    size?: 'xs' | 's' | 'md' | 'lg'
    color?: string
}

const IOSwitch: React.FC<IOSwitchProps> = ({ isActive, onToggle, className = '', size = 'md', color }) => {
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
                className={`io-switch ${isActive ? 'active' : ''}`}
                onClick={onToggle}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    ['--active-color' as any]: color
                }}
            >
                <div className="switch-track">
                    <div className="letter-i io-letter">I</div>
                    <div className="letter-o io-letter">O</div>
                </div>
                <div className="switch-knob"></div>
            </div>
        </div>
    )
}

export default IOSwitch
