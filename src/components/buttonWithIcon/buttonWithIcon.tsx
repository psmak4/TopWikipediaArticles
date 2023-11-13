import { MouseEvent, ReactNode } from 'react'
import chevronDown from '~/assets/chevron-down.png'
import chevronUp from '~/assets/chevron-up.png'
import styles from './styles.module.css'

interface ButtonWithIconProps {
	icon: ReactNode
	iconLg: ReactNode
	isOpen: boolean
	label: string
	labelLg: string
	onClick: () => void
	value: string | number
}

const ButtonWithIcon = ({ icon, iconLg, isOpen, label, labelLg, onClick = () => void 0, value }: ButtonWithIconProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		onClick()
	}

	return (
		<button className={styles.button} onClick={handleClick}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.iconLg}>{iconLg}</div>
			<div className={styles.text}>
				<div className={styles.label}>
					<div className={styles.labelContent}>{label}</div>
					<div className={styles.labelContentLg}>{labelLg}</div>
					{!isOpen && <img src={chevronDown} alt='chevron down' />}
					{isOpen && <img src={chevronUp} alt='chevron up' />}
				</div>
				<div className={styles.value}>{value}</div>
			</div>
		</button>
	)
}

export default ButtonWithIcon
