import React from 'react'

interface SquareDotsSwitchProps {
    isActive: boolean
    onToggle: () => void
    className?: string
    size?: 'xs' | 's' | 'md' | 'lg'
    color?: string
}

const SquareDotsSwitch: React.FC<SquareDotsSwitchProps> = ({ isActive, onToggle, className = '', size = 'md', color }) => {
    // Normalize 36px height to match standard ~30px -> scale ~0.83
    const baseScale = 0.83
    const scale = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[size] * baseScale

    return (
        <div style={{ width: 120 * scale, height: 36 * scale, position: 'relative' }} className={className}>
            <div
                className={`square-dots-switch ${isActive ? 'active' : ''}`}
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
                <div className="switch-square">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="square-dot"></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SquareDotsSwitch
