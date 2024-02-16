import { Link } from 'react-router-dom';
import style from './Custom404.module.css';

export default function Custom404() {
    return (
        <div className={style.mainDiv}>
            <div className={style.container}>
                <h2>Oops! Page not found.</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for.</p>
                <Link to={`/`} className={`${style.link} mt-3`}>
                    Go back home
                </Link>

            </div>
        </div>

    )
}
