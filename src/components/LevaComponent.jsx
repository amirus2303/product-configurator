import { useControls } from 'leva'
import React from 'react'

const LevaComponent = () => {
	const { directionnalLightIntensity1, directionnalLightIntensity2, directionnalLightIntensity3, envMapIntensity, ambientLightIntensity, camera } = useControls({
		directionnalLightIntensity1: {
			value: 1.76,
			min: 0,
			max: 2,
			step: 0.001
		},
		directionnalLightIntensity2: {
			value: 0.52,
			min: 0,
			max: 2,
			step: 0.001
		},
		directionnalLightIntensity3: {
			value: 0.58,
			min: 0,
			max: 2,
			step: 0.001
		},

		envMapIntensity: {
			value: 0.06,
			min: 0,
			max: 2,
			step: 0.0001
		},
	})
	return { directionnalLightIntensity1, directionnalLightIntensity2, directionnalLightIntensity3, envMapIntensity, ambientLightIntensity }
}

export default LevaComponent
