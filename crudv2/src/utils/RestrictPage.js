import { Link } from 'react-router-dom'

const RestrictedPage = ({isLogged, children}) => {
    if (isLogged) {
        return children
    }
    //Caso user seja nulo
    return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 50
            }}>
                <h3>Aceso restrito, favor efetuar login</h3>
                <Link to="/" className="nav-link">Efetuar login</Link>
            </div>
        )
    }

export default RestrictedPage