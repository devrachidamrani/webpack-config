import '../scss/index.scss'
import Recipes from './Recipes'
import Sword from '../images/swc-sword.png'
import SwordSvg from '../images/sword.svg'

const App = () => {
  return (
    <>
      <section className='hero'>
      </section>
        <main>
          <section>
            <h1> Oh haai React!</h1>
          </section>
          <img src={Sword} alt="sword" width="250"/>
          <img src={SwordSvg} alt="sword" width="250"/>
        </main>
        <Recipes/>
    </>
  )
}

export default App