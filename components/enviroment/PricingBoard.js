import {useState} from 'react'
import Switch from '../microComponents/Switch'
import CompareTable from './CompareTable'
import Grid from './Grid'
import PricingCards from './PricingCards'

const PricingBoard = () => {
    const [isYearly, setIsYearly] = useState(false)
    //{ header = "Basic", text = "Includes basic usage of our platform. Recommended for new and aspiring photographers.", price = {perM: 19.99, perY:190.00}, isYearly = false}
  return (
    <div>
        <Switch isYearly={isYearly} setIsYearly={setIsYearly}/>
        <div className='gridPrice'>
          <Grid>
            <PricingCards isYearly={isYearly}/>
            <PricingCards header='Pro' middle={true} text='More advanced features available. Recommended for photography veterans and professionals.' price={{perM: '39.99', perY:'390.00'}} isYearly={isYearly}/>
            <PricingCards header='Business' text='Additional features available such as more detailed metrics. Recommended for business owners.' price={{perM: '99.99', perY:'990.00'}} isYearly={isYearly}/>
          </Grid>
        </div>
        <CompareTable />
    </div>
  )
}

export default PricingBoard