import {Nav} from '../Nav.jsx';
import {Header} from '../Header'
import '../estilos.css';

const Home = () => {
    return (
        <>
            <Nav/>
            <Header />
            <ul>
                <li>/ = Home</li>
                <li>/login = Login</li>
                <li>/course = Course</li>
            </ul>
        </>
    );
}

export default Home;