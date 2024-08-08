"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
declare module 'three';
const ThreeDObject: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // Set the background color to white
    mountRef.current.appendChild(renderer.domElement);

    //Load Texture

    const textureLoader= new THREE.TextureLoader();
    const texture = textureLoader.load('/black.jpeg')



    // Geometry and Material
    const geometry = new THREE.PlaneGeometry(3,2,1);
    const material = new THREE.MeshBasicMaterial({ map:texture }); // Correct hex color for dark purple
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = () => {
      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    return()=>{
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    }
  }, []);

  return <div ref={mountRef} style={{ width: "10rem", height: "5rem" }} />;
};

export default ThreeDObject;
