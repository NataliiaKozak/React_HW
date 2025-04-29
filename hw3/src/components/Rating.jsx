import React from 'react'
import styles from '../styles/Rating.module.css'
import { useState } from 'react'

const Rating = () => {
	const [ratingValue, setRatingValue] = useState(0)

	const ratingList = [
		'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png',
    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
    'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
    'https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png',
	]
  //картинка №4 не отражается на странице. Неподходящий формат? 

	return (
		<div>
			<div className={styles.images}>
			<img src={ratingList[ratingValue]} className={styles.image} alt='' />
			</div>
			<div className={styles.buttons}>
				<button onClick={() => setRatingValue(0)} className={styles.button}>
					Плохо
				</button>
				<button onClick={() => setRatingValue(1)} className={styles.button}>
					Приемлемо
				</button>
				<button onClick={() => setRatingValue(2)} className={styles.button}>
					Хорошо
				</button>
				<button onClick={() => setRatingValue(3)} className={styles.button}>
					Отлично
				</button>
			</div>
		</div>
	)
}

export default Rating
