import { MouseEvent, ReactNode } from 'react'
import styles from './styles.module.css'

interface ButtonWithIconProps {
	icon: ReactNode
	isOpen: boolean
	label: string
	onClick: () => void
	value: string | number
}

const ButtonWithIcon = ({ icon, isOpen, label, onClick = () => void 0, value }: ButtonWithIconProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		onClick()
	}

	return (
		<button className={styles.button} onClick={handleClick}>
			{icon}
			<div className={styles.text}>
				<div className={styles.label}>
					<div className={styles.labelContent}>{label}</div>
					{!isOpen && <i className={`${styles.labelIcon} fa-solid fa-chevron-down`}></i>}
					{isOpen && <i className={`${styles.labelIcon} fa-solid fa-chevron-up`}></i>}
				</div>
				<div className={styles.value}>{value}</div>
			</div>
		</button>
	)
}

export default ButtonWithIcon
