import { useState } from 'react'
import VerticalSlider from './components/VerticalSlider'
import StandardSwitch from './components/StandardSwitch'
import PinchinSwitch from './components/PinchinSwitch'
import RollinSwitch from './components/RollinSwitch'
import SquareDotsSwitch from './components/SquareDotsSwitch'
import IOSwitch from './components/IOSwitch'
import LongSwitch from './components/LongSwitch'
import ThreeStateSwitch from './components/ThreeStateSwitch'

function App() {
    const [activeStates, setActiveStates] = useState({
        vertical: false,
        slurp: false,
        standard: false,
        pinchin: false,
        pinchinTrack: false,
        rollin: false,
        rollinDot: false,
        squareDots: false,
        io: false,
        long: false,
    })

    const [globalSize, setGlobalSize] = useState<'xs' | 's' | 'md' | 'lg'>('md')
    const [globalColor, setGlobalColor] = useState<string>('#ff6b4a')

    const toggle = (key: keyof typeof activeStates) => {
        setActiveStates(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        marginBottom: '20px',
    }

    const titleStyle = {
        fontSize: '12px',
        color: '#6b7280',
        fontWeight: 300,
        marginBottom: '12px',
        textAlign: 'center' as const,
    }

    const containerStyle = {
        display: 'flex',
        gap: '80px',
        padding: '40px',
        justifyContent: 'center',
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '60px',
            gap: '40px',
            minHeight: '100vh',
            alignItems: 'center'
        }}>
            {/* Global Settings Panel */}
            <div style={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                width: '200px'
            }}>
                <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#333' }}>Global Settings</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '12px', color: '#666' }}>Size</label>
                    <select
                        value={globalSize}
                        onChange={(e) => setGlobalSize(e.target.value as any)}
                        style={{
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #ddd',
                            fontSize: '14px'
                        }}
                    >
                        <option value="xs">Extra Small (xs)</option>
                        <option value="s">Small (s)</option>
                        <option value="md">Medium (md)</option>
                        <option value="lg">Large (lg)</option>
                    </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '12px', color: '#666' }}>Active Color</label>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <input
                            type="color"
                            value={globalColor}
                            onChange={(e) => setGlobalColor(e.target.value)}
                            style={{
                                width: '40px',
                                height: '40px',
                                padding: 0,
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer'
                            }}
                        />
                        <span style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>
                            {globalColor}
                        </span>
                    </div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '40px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Vertical Slider Toggle</h2>
                    <div style={containerStyle}>
                        <VerticalSlider
                            isActive={activeStates.vertical}
                            onToggle={() => toggle('vertical')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Slurp Switch</h2>
                    <div style={containerStyle}>
                        <StandardSwitch
                            variant="slurp"
                            isActive={activeStates.slurp}
                            onToggle={() => toggle('slurp')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Standard Switch</h2>
                    <div style={containerStyle}>
                        <StandardSwitch
                            variant="standard"
                            isActive={activeStates.standard}
                            onToggle={() => toggle('standard')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Pinchin Switch</h2>
                    <div style={containerStyle}>
                        <PinchinSwitch
                            variant="simple"
                            isActive={activeStates.pinchin}
                            onToggle={() => toggle('pinchin')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Pinchin' Track Switch</h2>
                    <div style={containerStyle}>
                        <PinchinSwitch
                            variant="track"
                            isActive={activeStates.pinchinTrack}
                            onToggle={() => toggle('pinchinTrack')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Rollin' Switch</h2>
                    <div style={containerStyle}>
                        <RollinSwitch
                            variant="simple"
                            isActive={activeStates.rollin}
                            onToggle={() => toggle('rollin')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Rollin' Switch - Dot Variant</h2>
                    <div style={containerStyle}>
                        <RollinSwitch
                            variant="dots"
                            isActive={activeStates.rollinDot}
                            onToggle={() => toggle('rollinDot')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Square Dots Switch</h2>
                    <div style={containerStyle}>
                        <SquareDotsSwitch
                            isActive={activeStates.squareDots}
                            onToggle={() => toggle('squareDots')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>I/O Switch</h2>
                    <div style={containerStyle}>
                        <IOSwitch
                            isActive={activeStates.io}
                            onToggle={() => toggle('io')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>Long Switch</h2>
                    <div style={containerStyle}>
                        <LongSwitch
                            isActive={activeStates.long}
                            onToggle={() => toggle('long')}
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h2 style={titleStyle}>3-State Switch</h2>
                    <div style={containerStyle}>
                        <ThreeStateSwitch
                            size={globalSize}
                            color={globalColor}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default App
