import {useState} from 'react'
import Switch from '../microComponents/Switch'

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)
  return (
    <div>
        <Switch isYearly={isYearly} setIsYearly={setIsYearly}/>
    </div>
  )
}

export default Pricing