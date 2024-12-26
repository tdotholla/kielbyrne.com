// components/HeroSection.tsx
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Nodes and connections
    const nodes = [];
    const lines = [];

    const geometry = new THREE.SphereGeometry(0.05, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    for (let i = 0; i < 20; i++) {
      const node = new THREE.Mesh(geometry, material);
      node.position.x = (Math.random() - 0.5) * 10;
      node.position.y = (Math.random() - 0.5) * 10;
      node.position.z = (Math.random() - 0.5) * 10;
      scene.add(node);
      nodes.push(node);
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const points = [];
        points.push(nodes[i].position);
        points.push(nodes[j].position);
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
        lines.push(line);
      }
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      nodes.forEach((node) => {
        node.rotation.x += 0.001;
        node.rotation.y += 0.001;
      });
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      <div className="z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Innovating Solutions, Building Communities, Empowering Change.
        </h1>
        <div className="flex justify-center space-x-4">
          <Link href="/portfolio">
            <a className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition">
              Explore My Work
            </a>
          </Link>
          <Link href="/contact">
            <a className="px-6 py-3 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
              Get in Touch
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
