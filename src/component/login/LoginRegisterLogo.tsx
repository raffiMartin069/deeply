import { Link } from 'react-router-dom'
import LoginMethod from './LoginMethod'

type Props = {
    linkName: string
    path: string
    hyperlink_definition: string
    logo_definition: string
    logo_array: string[]    
}

const Logos = (array: string[]) => {
    return array;
  }

function LoginRegisterLogo(props: Props) {

    const logo = Logos(props.logo_array)

    return (
        <>
        <div className="text-center">
              <p className="m-0 p-0">
                {props.hyperlink_definition} <Link to={props.path}>{props.linkName}</Link>
              </p>
              <p>{props.logo_definition}</p>
              {
              logo.map((logos, idx) => {
                return <LoginMethod key={idx} type="button" buttonClass={logos} size="2.5rem" />
              }
              )
            }
            </div>
        </>

    )
}

export default LoginRegisterLogo