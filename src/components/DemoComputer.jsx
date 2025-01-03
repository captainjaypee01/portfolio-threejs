import React, {useEffect, useRef} from 'react'
import {useGLTF, useVideoTexture} from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const DemoComputer = (props) => {

    const group = useRef();
    const {nodes, materials} = useGLTF('/models/sci-fi_computer.glb')
    const txt = useVideoTexture(props?.texture ? props.texture : '/textures/project/project1.mp4');

    useEffect(() => {
        if(txt){
            txt.flipY = true;
        }
    }, [txt]);

    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: 'power3.out'
        })
    }, [txt])
    return (
        <group {...props} dispose={null} ref={group}>
            <group name="scifi_computer" >
                <mesh
                    name="scifi_computer_screen_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.scifi_computer_screen_0.geometry}
                    material={materials.screen}
                >
                    <meshBasicMaterial map={txt} />
                </mesh>
                <mesh
                    name="scifi_computer_computer_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.scifi_computer_computer_0.geometry}
                    material={materials.computer}
                />
                <mesh
                    name="scifi_computer_keyboard_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.scifi_computer_keyboard_0.geometry}
                    material={materials.keyboard}
                />
                <mesh
                    name="scifi_computer_keys_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.scifi_computer_keys_0.geometry}
                    material={materials.keys}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/sci-fi_computer.glb');

export default DemoComputer
