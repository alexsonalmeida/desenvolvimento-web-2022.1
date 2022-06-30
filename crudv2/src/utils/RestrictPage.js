import { Link } from 'react-router-dom'
import FirebaseUserService from '../components/services/FirebaseUserService'

const RestrictedPage = (props) => {
    const sendEmail = () => {
        if (props.auth != null) {
            FirebaseUserService.sendEmail(
                props.auth,
                (res) => {
                    if (res) alert(`Email enviado com sucessor para ${props.auth.currentUser.email}`)
                }
            )
        }
    }
    if (props.isLogged && props.isEmailVerified) {
        return props.children
    }
    //Caso user seja nulo
    let msg = 'Acesso restrito. Por favor, faça login'
    if (!props.isEmailVerified) msg+= '. Verifique seu email'
    return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 50
            }}>
                <h3>{msg}</h3>
                <Link to="/" className="nav-link">Efetuar login</Link>
                <button onClick={()=>sendEmail()}>Reenviar email</button>
            </div>
        )
    }

export default RestrictedPage