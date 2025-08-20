import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

interface ParticlesBackgroundProps {
  density?: number;
  variant?: "cosmic" | "subtle" | "intense";
}

export const ParticlesBackground = ({ 
  density = 80, 
  variant = "cosmic" 
}: ParticlesBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback if needed
  }, []);

  const getConfig = () => {
    const baseConfig = {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#00f5ff", "#ff00ff", "#9333ea"],
        },
        links: {
          color: "#00f5ff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: density,
        },
        opacity: {
          value: 0.5,
          animation: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
          animation: {
            enable: true,
            speed: 2,
            size_min: 0.1,
          },
        },
      },
      detectRetina: true,
    };

    if (variant === "subtle") {
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: {
            ...baseConfig.particles.number,
            value: density * 0.5,
          },
          opacity: {
            ...baseConfig.particles.opacity,
            value: 0.3,
          },
          links: {
            ...baseConfig.particles.links,
            opacity: 0.1,
          },
        },
      };
    }

    if (variant === "intense") {
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: {
            ...baseConfig.particles.number,
            value: density * 1.5,
          },
          move: {
            ...baseConfig.particles.move,
            speed: 2,
          },
          opacity: {
            ...baseConfig.particles.opacity,
            value: 0.7,
          },
        },
      };
    }

    return baseConfig;
  };

  return (
    <Particles
      id="particles-background"
      init={particlesInit}
      loaded={particlesLoaded}
      options={getConfig()}
      className="absolute inset-0 -z-10"
    />
  );
};