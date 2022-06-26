import { Link } from 'react-router-dom'

const RestrictedPage = (props) => {
    if (props.isLogged) {
        return props.children
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