import React, { useState } from 'react'

type ThreeStateSwitchProps = {
    initialState?: 0 | 1 | 2
    onChange?: (state: 0 | 1 | 2) => void
    size?: 'xs' | 's' | 'md' | 'lg'
    color?: string
}

const ThreeStateSwitch: React.FC<ThreeStateSwitchProps> = ({ initialState = 0, onChange, size = 'md', color }) => {
    const [state, setState] = useState<0 | 1 | 2>(initialState)
    // Normalize 44px height to match closer to standard -> scale ~0.75
    const baseScale = 0.75
    const scale = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[size] * baseScale

    const handleSetState = (newState: 0 | 1 | 2) => {
        setState(newState)
        onChange?.(newState)
    }

    const getKnobPosition = () => {
        if (state === 0) return '2px'
        if (state === 1) return 'calc(50% - 18px)'
        return 'calc(100% - 38px)'
    }

    const getOverlayWidth = () => {
        if (state === 0) return '100%'
        // When state is 1 or 2, the overlay retracts to 50% width (revealing orange on the left)
        return '60%'
    }

    return (
        <div style={{ width: 140 * scale, height: 44 * scale, position: 'relative' }}>
            <div
                className="three-state-switch"
                data-state={state}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    ['--active-color' as any]: color
                }}
                onClick={(e) => {
                    // Determine click zone based on the whole component width
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const width = rect.width

                    // Simple thirds division
                    if (x < width / 3) handleSetState(0)
                    else if (x < (width / 3) * 2) handleSetState(1)
                    else handleSetState(2)
                }}
            >
                {/* <div className="ts-indicators">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className={`ts-indicator ${state === i ? 'active' : ''}`}
                    />
                ))}
            </div> */}

                <div className="ts-track">
                    <div className="ts-orange-bg" />
                    <div className="ts-grey-overlay" style={{ width: getOverlayWidth() }} />
                    <div className="ts-knob" style={{ left: getKnobPosition() }}>
                        <div className="ts-knob-marker" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeStateSwitch
