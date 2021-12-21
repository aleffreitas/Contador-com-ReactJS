import '../Header/Header.css';

export function Header(props) {
    return (
        <header>
            <h1>{props.name}</h1>
            <ul>
                <li>Teste</li>
                <li>Teste</li>
                <li>Teste</li>
            </ul>
        </header>
    );
}