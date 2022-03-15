import React from 'react';
import NavigatorBar from './Nav/NavigatorBar';
import Footer from './Footer'
import TalianiFerroShop from './PortfolioImages/TalianiFerroShop.png'
import TalianiFerro from './PortfolioImages/TalianiFerro.png'
import TalianiFerroBattuto from './PortfolioImages/TalianiFerroBattuto.png'
import WingTsunShop from './PortfolioImages/WingTsunShop.png'
import WingTsunPisa from './PortfolioImages/WingTsunPisa.png'
import DojoBrand from './PortfolioImages/DojoBrand.png'
import TommasoMolesti from './PortfolioImages/TommasoMolesti.png'

export default class Portfolio extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
      this.setState({isLoading: false})
  }
  render(){
    return(
      <div className="App">
        <NavigatorBar />
        <div className='titlePage'>Portfolio</div>
        <div className='containerImages'>
          <a href="https://www.talianiferroshop.com"
            target="_blank"
            className='project'>
            <img src={TalianiFerroShop}/>
            <div className='textPortfolioImages'>
              <h3>Taliani FerroShop</h3>
              <p>Designed and developed with Shopify</p>
            </div>
          </a>
          <a href="https://www.talianiferro.com"
            target="_blank"
            className='project'>
            <img src={TalianiFerro}/>
            <div className='textPortfolioImages'>
              <h3>Taliani Ferro</h3>
              <p>Designed and developed with Wix</p>
            </div>
          </a>
          <a href="https://github.com/TommasoMolesti/tommasomolesti"
            target="_blank"
            className='project'>
            <img src={TommasoMolesti}/>
            <div className='textPortfolioImages'>
              <h3>Tommaso Molesti (this site)</h3>
              <p>Designed and developed using ReactJs and CSS</p>
            </div>
          </a>
          <a href="https://www.wingtsunshop.com"
            target="_blank"
            className='project'>
            <img src={WingTsunShop}/>
            <div className='textPortfolioImages'>
              <h3>Wing Tsun Shop</h3>
              <p>Designed and developed with Shopify</p>
            </div>
          </a>
          <a href="https://www.dojobrand.com"
            target="_blank"
            className='project'>
            <img src={DojoBrand}/>
            <div className='textPortfolioImages'>
              <h3>Dojo Brand</h3>
              <p>Designed and developed with Shopify</p>
            </div>
          </a>
          <a href="https://www.talianiferrobattuto.com"
            target="_blank"
            className='project'>
            <img src={TalianiFerroBattuto}/>
            <div className='textPortfolioImages'>
              <h3>Taliani Ferro Battuto</h3>
              <p>Designed and developed with Wix</p>
            </div>
          </a>
          <a href="https://www.wingtsunpisa.com"
            target="_blank"
            className='project'>
            <img src={WingTsunPisa}/>
            <div className='textPortfolioImages'>
              <h3>Wing Tsun Pisa</h3>
              <p>Designed and developed with Wix</p>
            </div>
          </a>
        </div>
        <Footer />
      </div>
    )
  }
}