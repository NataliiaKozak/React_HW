import React from 'react'
import imageSrc from '../assets/istockphoto-1443667794-1024x1024.jpg'

function ImageComponent() {
	return (
		<div>
			<img src={imageSrc} controls height='200' width='300' alt='изображение' />
		</div>
	)
}
export default ImageComponent
