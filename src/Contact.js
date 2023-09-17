import { Link } from 'react-router-dom';
import { Reveal } from './Animations';

import { ReactComponent as GithubSvg } from './assets/images/GithubSvg.svg';
import { ReactComponent as LinkedinSvg } from './assets/images/LinkedinSvg.svg';

function Contact() {
    return (
        <div className='container-fluid' id='contact'>
            <div className='container'>
            <Reveal>
                <span className='githubSvg'><Link to={"https://github.com/rrpereira98"} target={'_blank'}><GithubSvg /></Link></span>
                <span className='linkedinSvg'><Link to={"https://www.linkedin.com/in/rrpereira98/"} target={'_blank'}><LinkedinSvg /></Link></span>
                <p><a href='mailto:rodrigo.rpereira1998@gmail.com'>rodrigo.rpereira1998@gmail.com</a></p>
            </Reveal>
            </div>
        </div>
    )
}

export default Contact