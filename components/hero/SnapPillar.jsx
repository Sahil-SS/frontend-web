"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

const SnapPillar = ({ color = "#ff2949" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Snappy limit
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;

        // Optimized pseudo-random noise
        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec2 uv = vUv;
          
          // Organic pillar shape
          float dist = abs(uv.x - 0.5) * 4.0;
          float pillar = exp(-dist * dist * 15.0);
          
          // Snappy shimmer effect
          float shimmer = noise(vec2(uv.y * 0.1, uTime * 0.05));
          float alpha = pillar * shimmer * smoothstep(0.0, 0.4, uv.y) * smoothstep(1.0, 0.6, uv.y);
          
          gl_FragColor = vec4(uColor, alpha * 0.6);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId;
    const animate = (t) => {
      material.uniforms.uTime.value = t * 0.05;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [color]);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" style={{ transform: 'rotate(103deg) scale(1.8)' }} />;
};

export default SnapPillar;