import React from 'react'

interface LongSwitchProps {
    isActive: boolean
    onToggle: () => void
    className?: string
    size?: 'xs' | 's' | 'md' | 'lg'
    color?: string
}

const LongSwitch: React.FC<LongSwitchProps> = ({ isActive, onToggle, className = '', size = 'md', color }) => {
    const scale = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[size]

    return (
        <div style={{ width: 120 * scale, height: 30 * scale, position: 'relative' }} className={className}>
            <div
                className={`long-switch ${isActive ? 'active' : ''}`}
                onClick={onToggle}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    ['--active-color' as any]: color
                }}
            >
                <div className="switch-track"></div>
                <div className="switch-handle">
                    <div className="dip left">
                        <div className="dot"></div>
                    </div>
                    <div className="dip right">
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LongSwitch
