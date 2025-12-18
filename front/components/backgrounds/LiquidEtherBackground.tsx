"use client";

import LiquidEther from '../effects/LiquidEther';

export default function LiquidEtherBackground() {

    return (    
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <LiquidEther
                colors={['#667EEA', '#764BA2', '#F093FB']}
                mouseForce={40}
                cursorSize={120}
                isViscous={true}
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo={true}
                autoSpeed={1}
                autoIntensity={4}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
            />
        </div>
    );
}