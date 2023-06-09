/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/V5.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    // //console.log(actions)
    actions.KeyBoardTyper.play()
    actions.GridAction.play()
    actions.CatRobot.play()
    // actions.upanddown.play()

    actions.FirstLamp.play()

    actions.SecondLamp.play()
    actions.LampFour.play()
    actions.LampFive.play()




  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="0b4d1fb0c3264822a89f005d94ecf36dfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="RootNode" />
        </group>
        <group name="LayerHexagons" position={[0.62, 2.36, -2.62]} rotation={[0, 0, -0.01]} scale={0.01} />
        <group name="LayerHexagons001" position={[0.62, 2.36, -2.62]} rotation={[0, 0, -0.01]} scale={0.01} />
        <group name="cs_anteojos001" position={[12.47, 0.2, 0.79]} scale={0.38} />
        <group name="cs_falan001" position={[7.25, -1.53, 0.65]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
        <group name="cs_red_4001" position={[9.89, -1.02, 0.63]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
        <group name="Key" position={[1.17, 3.78, 0.75]} rotation={[-2.92, -0.57, -2.2]} />
        <group name="Rim" position={[4.41, 4.26, -3.79]} rotation={[1.35, 1.01, -2.22]} />
        <group name="cs_red_4003" position={[0.33, -1.41, 0.63]} rotation={[Math.PI / 2, 0, 0]} scale={0.23} />
        <group name="Light" position={[-0.36, 5.9, 17.35]} rotation={[1.89, 0.88, -2.05]} />
        <group name="Camera" position={[13.87, 6.01, 12.88]} rotation={[1.41, 0.19, -0.85]} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Beta_Joints" geometry={nodes.Beta_Joints.geometry} material={materials['Beta_Joints_MAT1.001']} skeleton={nodes.Beta_Joints.skeleton} />
          <skinnedMesh name="Beta_Surface" geometry={nodes.Beta_Surface.geometry} material={materials['Beta_HighLimbsGeoSG3.001']} skeleton={nodes.Beta_Surface.skeleton} />
        </group>
        <group name="Plane" position={[0.33, 0.38, -0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.08, 0.08, 0.03]} />
        <group name="Armature001" position={[-2.63, 2.86, 0.49]} rotation={[0, Math.PI / 2, 0]} scale={0.1}>
          <primitive object={nodes.Bone} />
          <skinnedMesh name="Sphere003_Material001_0" geometry={nodes.Sphere003_Material001_0.geometry} material={materials.Material} skeleton={nodes.Sphere003_Material001_0.skeleton} />
          <skinnedMesh name="Sphere003_Material001_0001" geometry={nodes.Sphere003_Material001_0001.geometry} material={materials['Material.040']} skeleton={nodes.Sphere003_Material001_0001.skeleton} />
          <skinnedMesh name="Sphere003_Material001_0002" geometry={nodes.Sphere003_Material001_0002.geometry} material={materials['Material.033']} skeleton={nodes.Sphere003_Material001_0002.skeleton} />
          <skinnedMesh name="Sphere003_Material001_0003" geometry={nodes.Sphere003_Material001_0003.geometry} material={materials['Material.029']} skeleton={nodes.Sphere003_Material001_0003.skeleton} />
          <skinnedMesh name="Sphere003_Material001_0004" geometry={nodes.Sphere003_Material001_0004.geometry} material={materials['Material.039']} skeleton={nodes.Sphere003_Material001_0004.skeleton} />
          <skinnedMesh name="Sphere003_Material001_0005" geometry={nodes.Sphere003_Material001_0005.geometry} material={materials['Material.039']} skeleton={nodes.Sphere003_Material001_0005.skeleton} />
          <skinnedMesh name="Sphere003_Material001_0006" geometry={nodes.Sphere003_Material001_0006.geometry} material={materials['Material.040']} skeleton={nodes.Sphere003_Material001_0006.skeleton} />
          <skinnedMesh name="Sphere003_Material001_0007" geometry={nodes.Sphere003_Material001_0007.geometry} material={materials['Material.041']} skeleton={nodes.Sphere003_Material001_0007.skeleton} />
          <skinnedMesh name="Sphere003_Material001_0008" geometry={nodes.Sphere003_Material001_0008.geometry} material={materials['Material.042']} skeleton={nodes.Sphere003_Material001_0008.skeleton} />
        </group>
        <group name="Cube005" position={[-1.87, 1, 1.53]} scale={0.71}>
          <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials['Material.001']} />
          <mesh name="Cube007_2" geometry={nodes.Cube007_2.geometry} material={materials['Material.003']} />
          <mesh name="Cube007_3" geometry={nodes.Cube007_3.geometry} material={materials.floor} />
          <mesh name="Cube007_4" geometry={nodes.Cube007_4.geometry} material={materials['Material.013']} />
          <mesh name="Cube007_5" geometry={nodes.Cube007_5.geometry} material={materials['Material.002']} />
          <mesh name="Cube007_6" geometry={nodes.Cube007_6.geometry} material={materials['Material.006']} />
          <mesh name="Cube007_7" geometry={nodes.Cube007_7.geometry} material={materials.glass} />
          <mesh name="Cube007_8" geometry={nodes.Cube007_8.geometry} material={materials['Material.007']} />
          <mesh name="Cube007_9" geometry={nodes.Cube007_9.geometry} material={materials['Material.010']} />
          <mesh name="Cube007_10" geometry={nodes.Cube007_10.geometry} material={materials['Material.009']} />
          <mesh name="Cube007_11" geometry={nodes.Cube007_11.geometry} material={materials['Material.011']} />
          <mesh name="Cube007_12" geometry={nodes.Cube007_12.geometry} material={materials['Material.012']} />
          <mesh name="Cube007_13" geometry={nodes.Cube007_13.geometry} material={materials['Material.014']} />
        </group>
        <group name="Grid" position={[0.27, 1.29, -1.21]} rotation={[0, -Math.PI / 9, 0]} scale={0.01}>
          <mesh name="Mesh002" geometry={nodes.Mesh002.geometry} material={materials.Grid} />
          <mesh name="Mesh002_1" geometry={nodes.Mesh002_1.geometry} material={materials.Land} />
        </group>
        <group name="Cube004" position={[-1.22, 0.69, 1.6]} scale={0.71}>
          <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.001']} />
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials['Material.005']} />
        </group>
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.004']} position={[-1.87, 1, 1.53]} scale={0.71} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.016']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['Material.016']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials['Material.017']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials['Material.015']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials['Material.018']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube011" geometry={nodes.Cube011.geometry} material={materials['Material.019']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['Material.020']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube013" geometry={nodes.Cube013.geometry} material={materials['Material.021']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube014" geometry={nodes.Cube014.geometry} material={materials['Material.022']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube015" geometry={nodes.Cube015.geometry} material={materials['Material.023']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube016" geometry={nodes.Cube016.geometry} material={materials['Material.024']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Material.025']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube018" geometry={nodes.Cube018.geometry} material={materials['Material.026']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube019" geometry={nodes.Cube019.geometry} material={materials['Material.027']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube020" geometry={nodes.Cube020.geometry} material={materials['Material.028']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube022" geometry={nodes.Cube022.geometry} material={materials['Material.030']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube023" geometry={nodes.Cube023.geometry} material={materials['Material.031']} position={[-1.78, 0.02, 2.78]} scale={0.04} />
        <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['Material.032']} position={[0.14, 0, 0.02]} scale={[0.1, 0.04, 0.04]} />
        <mesh name="Cube024" geometry={nodes.Cube024.geometry} material={materials['Material.034']} position={[-1.87, 1, 1.53]} scale={0.71} />
        <mesh name="video_2022-10-24_09-31-17" geometry={nodes['video_2022-10-24_09-31-17'].geometry} material={materials['video_2022-10-24_09-31-17']} position={[-2.56, 1.43, 1.98]} rotation={[Math.PI / 2, 0, -1.63]} scale={[0.43, 0.43, 0.4]} />
        <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.035']} position={[0.33, 0.4, -0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.08, 0.08, 0.03]} />
        <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.036']} position={[0.33, 0.4, -0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.08, 0.08, 0.03]} />
        <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.037']} position={[0.33, 0.4, -0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.08, 0.08, 0.03]} />
        <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.038']} position={[0.33, 0.4, -0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.08, 0.08, 0.03]} />
        <group name="GEO-vincent_button_03001" position={[-9.8, -0.8, 10.44]}>
          <mesh name="GEO-vincent_button_03001_1" geometry={nodes['GEO-vincent_button_03001_1'].geometry} material={materials['vincent_belt.001']} morphTargetDictionary={nodes['GEO-vincent_button_03001_1'].morphTargetDictionary} morphTargetInfluences={nodes['GEO-vincent_button_03001_1'].morphTargetInfluences} />
          <mesh name="GEO-vincent_button_03001_2" geometry={nodes['GEO-vincent_button_03001_2'].geometry} material={materials['vincent_buttons.001']} morphTargetDictionary={nodes['GEO-vincent_button_03001_2'].morphTargetDictionary} morphTargetInfluences={nodes['GEO-vincent_button_03001_2'].morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/V5.glb')