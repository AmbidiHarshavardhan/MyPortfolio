import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground({ darkMode }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: darkMode ? "#0d0d0d" : "#ffffff" }
          },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: darkMode ? "#ffffff" : "#333333" },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.4, max: 0.8 },
              animation: { enable: true, speed: 1, minimumValue: 0.3 }
            },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" }
            },
            links: {
              enable: true,
              distance: 140,
              color: darkMode ? "#ffffff" : "#333333",
              opacity: 0.5
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 0.4
              }
            }
          }
        }}
      />
    </div>
  );
}
