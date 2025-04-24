function VideoComponent() {
	return (
		<div>
			<video
				src={require('../assets/246151_tiny.mp4')}
				controls
				height='300'
				width='300'
				autoPlay
				muted
				loop
			></video>
		</div>
	)
}
export default VideoComponent
