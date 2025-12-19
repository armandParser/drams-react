# Neumorphic Toggles (React)

A React implementation of the Dieter Rams inspired design principles, originally created by **@KarimeShrimp** for Framer ([view original](https://drams.framer.website/)).

This library brings high-fidelity, tactile, 3D/neumorphic toggle switches and sliders to your React applications. Other components such as buttons will be available in the future.

## Installation

```bash
npm install drams-react
# or
yarn add drams-react
```

## Usage

### 1. Import Styles
You must import the CSS file once in your application (e.g., in `main.tsx`, `App.tsx`, or `index.js`).

```javascript
import 'drams-react/dist/style.css';
```

### 2. Import Components
Import the components you need directly from the package.

```tsx
import { useState } from 'react';
import { 
  StandardSwitch, 
  VerticalSlider, 
  ThreeStateSwitch 
} from 'drams-react';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <StandardSwitch 
      isActive={isActive} 
      onToggle={() => setIsActive(!isActive)} 
      variant="slurp" // Optional variant
    />
  );
}
```

## Available Components

This library includes 8 base components, some with distinct variants for a total of 11 unique styles.

| Component | Variant Prop | Description |
| :--- | :--- | :--- |
| **Vertical Slider** | N/A | A vertical analog slider. |
| **Standard Switch** | `variant="standard"` | Classic pill-shaped toggle. |
| **Slurp Switch** | `variant="slurp"` | Features a liquid "slurp" animation. |
| **Pinchin' Switch** | `variant="simple"` | A minimal pinch interaction. |
| **Pinchin' Track** | `variant="track"` | Pinch interaction on a longer track. |
| **Rollin' Switch** | `variant="simple"` | Rolling ball animation. |
| **Rollin' Dots** | `variant="dots"` | Rolling ball with dot indicators. |
| **Square Dots** | N/A | Square toggle with a grid dot pattern. |
| **I/O Switch** | N/A | Industrial style Input/Output switch. |
| **Long Switch** | N/A | Elongated control with dual status lights. |
| **3-State Switch** | N/A | 3-position toggle with high-fidelity 3D knob. |

## Credits

*   **Original Design & Concept**: [@KarimeShrimp](https://twitter.com/Karimeshrimp) for Framer.
*   **React Port**: Implementation of the functionality and styles in React/CSS.