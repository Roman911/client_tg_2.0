import React from "react"
import styles from './Progress.module.scss'

export const Progress: React.FC = () => {
  return <div className={ styles.progress }>
    <div className={ styles.progress__bar } />
  </div>
}