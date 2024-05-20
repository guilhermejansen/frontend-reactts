import styles from './Sidebar.module.css';
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500" 
            />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/guilhermejansen.png"/>
                <strong>Guilherme Jansen</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}