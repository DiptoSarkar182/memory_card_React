import Github from '../assets/icons/github.svg';
export default function Footer(){
    return (
        <footer className="footer">
            Copyright © 2023 DiptoSarkar182{' '}
            <a href="https://github.com/DiptoSarkar182" target="blank">
            <img src={Github} className="icon" alt="Github" />
            </a>
        </footer>
    );
}