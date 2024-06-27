import Logo from '../../../public/images/Logo.png'

export default function ApplicationLogo(props) {
    return (
        <img src={Logo} alt="SEA Sallon Logo" className='h-10 md:h-48 rounded-full'/>
    );
}
