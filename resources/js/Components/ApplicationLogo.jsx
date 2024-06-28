import Logo from '../../../public/images/Logo.png'

export default function ApplicationLogo(className) {
    return (
        <img src={Logo} alt="SEA Sallon Logo" className={'h-10 md:h-24 rounded-full' + className}/>
    );
}
