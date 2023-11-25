import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import Input, { InputStyle } from '../Utils/Input'
import './index.scss'

const Connect = () => {
	const ref = useRef<HTMLCanvasElement>(null)

	const [videoElement, setVideo] = useState<HTMLVideoElement | null>(null)

	// play the video on load
	useEffect(() => {
		const canvas = ref.current
		const ctx = canvas?.getContext('2d')
		const video = document.createElement('video')
		video.loop = true
		setVideo(video)
		video.src = 'http://localhost:5173/public/connect.mov'
		if (ctx && video) {
			video.addEventListener('play', () => {
				const draw = () => {
					ctx.drawImage(
						video,
						0,
						0,
						video.videoWidth,
						video.videoHeight,
					)
					requestAnimationFrame(draw)
				}
				draw()
			})
		}
	}, [ref, ref.current])

	console.log(videoElement?.videoWidth, videoElement?.videoHeight)

	return (
		<div className="connect">
			<canvas ref={ref} width={1920} height={1080} />
			<div className="connect-content">
				<div>
					<form>
						<h4>Connect</h4>
						<Input
							name="Email"
							label="Email"
							type="email"
							inputStyle={InputStyle.OUTLINE}
						/>
						<Input
							name="Password"
							label="Password"
							type="password"
							inputStyle={InputStyle.OUTLINE}
						/>
						<Button>
							<div>Connect</div>
						</Button>
					</form>
				</div>
				<div>
					<form>
						<h4>Register</h4>
						<Input
							name="Email"
							label="Email"
							inputStyle={InputStyle.OUTLINE}
							type="email"
						/>
						<Input
							name="Pseudo"
							label="Pseudo"
							inputStyle={InputStyle.OUTLINE}
						/>
						<Input
							name="Password"
							label="Password"
							type="password"
							inputStyle={InputStyle.OUTLINE}
						/>
						<Button>
							<div>Register</div>
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Connect
