import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './ServiceCardGlass.module.css';

interface ServiceCardGlassProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export const ServiceCardGlass: React.FC<ServiceCardGlassProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <div className={styles.icon}>
          <div className={styles.iconGlow} />
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};