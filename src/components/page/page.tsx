import { PropsWithChildren } from 'react'
import styles from './styles.module.css'

const Page = ({ children }: PropsWithChildren) => {
	return <div className={styles.page}>{children}</div>
}

export default Page
