import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function OrbCanvas() {
  const containerRef = useRef(null);
  const [hasWebGlError, setHasWebGlError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer, scene, camera, animationFrameId;
    let orbGroup, outerOrb, innerCore, ring1, ring2, particlesMesh;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGlError(true);
        return;
      }
    } catch {
      setHasWebGlError(true);
      return;
    }

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.error("Three.js init error:", e);
      setHasWebGlError(true);
      return;
    }

    // Orb Group container for floating animation & mouse reaction
    orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // 1. Outer Glass Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.6, 64, 64);
    
    // Custom physical glass-like material
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#A855F7"),
      emissive: new THREE.Color("#4C1D95"),
      emissiveIntensity: 0.35,
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.45,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.88,
    });
    outerOrb = new THREE.Mesh(sphereGeometry, glassMaterial);
    orbGroup.add(outerOrb);

    // 2. Inner Glowing Core
    const coreGeometry = new THREE.SphereGeometry(0.75, 32, 32);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C4B5FD"),
      emissive: new THREE.Color("#8B5CF6"),
      emissiveIntensity: 1.5,
      roughness: 0.4,
      metalness: 0.2,
      transparent: true,
      opacity: 0.75,
    });
    innerCore = new THREE.Mesh(coreGeometry, coreMaterial);
    orbGroup.add(innerCore);

    // 3. Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#C4B5FD"),
      transparent: true,
      opacity: 0.45,
    });
    ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    orbGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.05, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#A855F7"),
      transparent: true,
      opacity: 0.35,
    });
    ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    orbGroup.add(ring2);

    // 4. Surrounding Cosmic Particles
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#C4B5FD");
    const color2 = new THREE.Color("#A855F7");
    const color3 = new THREE.Color("#F5F3FF");

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
    orbGroup.add(particlesMesh);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0x2E1065, 1.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xF5F3FF, 2.5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const purpleLight = new THREE.PointLight(0xA855F7, 4.0, 15);
    purpleLight.position.set(-3, -2, 2);
    scene.add(purpleLight);

    const lavenderLight = new THREE.PointLight(0xC4B5FD, 3.0, 10);
    lavenderLight.position.set(2, 3, -1);
    scene.add(lavenderLight);

    // Mouse coordinates tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;
      targetRotationY = x * 0.6;
      targetRotationX = -y * 0.4;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth floating motion
      orbGroup.position.y = Math.sin(elapsedTime * 0.9) * 0.18;

      // Smooth mouse lerping
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      orbGroup.rotation.x = currentRotationX + Math.sin(elapsedTime * 0.3) * 0.08;
      orbGroup.rotation.y = currentRotationY + elapsedTime * 0.25;

      // Independent rotations
      outerOrb.rotation.y = elapsedTime * 0.15;
      innerCore.rotation.y = -elapsedTime * 0.3;
      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.25;
      particlesMesh.rotation.y = -elapsedTime * 0.08;

      // Subtle breathing pulse for inner core
      const pulse = 1 + Math.sin(elapsedTime * 2) * 0.06;
      innerCore.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  if (hasWebGlError) {
    return (
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8B5CF6] via-[#A855F7] to-[#C4B5FD] opacity-30 blur-2xl animate-pulse-glow" />
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full glass-panel border border-purple-400/30 flex items-center justify-center animate-float shadow-[0_0_80px_rgba(168,85,247,0.4)]">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#C4B5FD] to-[#8B5CF6] opacity-80 blur-md animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
      {/* Ambient background glow behind the 3D orb */}
      <div
        className="absolute w-[80%] h-[80%] rounded-full bg-[#8B5CF6]/25 filter blur-[70px] pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute w-[60%] h-[60%] rounded-full bg-[#A855F7]/20 filter blur-[50px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center relative z-10"
        title="Interactive 3D Glass Orb — Drag or move mouse to interact"
      />
    </div>
  );
}
