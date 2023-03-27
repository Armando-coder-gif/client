import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link} from 'react-router-dom'

const Landing = () => {
  return( 
  <Wrapper>
        <nav>
           <Logo/> 
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>
                    job <span>tracking</span> app 
                </h1>
                <p>
                    I'm baby photo booth crucifix semiotics, blog sustainable grailed blue bottle 
                    fashion axe godard mixtape farm-to-table jianbing woke pour-over.
                    JOMO disrupt humblebrag sus, pug whatever flannel hot chicken hashtag 90's bicycle 
                    rights yuccie meh banjo kale chips. Tumeric paleo vape, taiyaki aesthetic sus 
                    gluten-free pok pok cronut occupy yes plz. Helvetica solarpunk selfies, 
                    mustache normcore PBR&B neutral milk hotel art party single-origin coffee godard.
                </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
  </Wrapper>
  )
}

export default Landing
