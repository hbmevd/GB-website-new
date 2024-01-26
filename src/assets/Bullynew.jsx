/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/bullynew.glb -T 
Files: public/models/bullynew.glb [170.37MB] > C:\Users\Studio\Desktop\GorillaBullys\Web3Webflow\bullynew-transformed.glb [10.75MB] (94%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BullyNew(props) {
  const { nodes, materials } = useGLTF('http://localhost:5173/public/models/bullynew.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[3.511, 0, 0]} scale={0.425}>
        <mesh geometry={nodes.TrouserBase_1.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.TrouserBase_2.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.TrouserBase_3.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.TrouserBase_4.geometry} material={materials['Material.010']} />
      </group>
      <mesh geometry={nodes.Top_Teeth005.geometry} material={materials['Teeth.002']} position={[3.511, 0, 0]} scale={0.425} />
      <group position={[3.511, 0, 0]} scale={0.425}>
        <mesh geometry={nodes.inner_eye012.geometry} material={materials['Normal Eyes.001']} />
        <mesh geometry={nodes.inner_eye012_1.geometry} material={materials['eyematerial2.001']} />
      </group>
      <group position={[3.511, 0, 0]} scale={0.425}>
        <mesh castShadow receiveShadow geometry={nodes.Marvelous_Blazer_Jacket_Open_1.geometry} material={materials.Material500086} />
        <mesh castShadow receiveShadow geometry={nodes.Marvelous_Blazer_Jacket_Open_2.geometry} material={materials['kruvaze blazer_FRONT_6076263']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Bully5.geometry} material={materials['Tattooed Bully Base']} position={[3.511, 0, 0]} scale={0.425} />
    </group>
  )
}

useGLTF.preload('http://localhost:5173/public/models/bullynew.glb')
