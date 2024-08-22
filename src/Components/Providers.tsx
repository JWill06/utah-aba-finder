import React, {useState, useEffect} from 'react'
import type { Provider, providerFilterOption } from '../Utility/Types'

const Providers: React.FC = () => {
    const [providers, setProviders] = useState<Provider[]>([])
    useEffect(() => {
        fetch('http://localhost:3001/providers')
            .then(response => response.json())
            .then(data => setProviders(data))
    }, [])
  return (
    <div>Providers</div>
  )
}

const options: providerFilterOption[] = [
    {name: 'insurances', value: 'insurances', label: 'Insurances', insurances: 'Tricare'}
]


export default Providers

const providers: Provider[] = [
    {
        name: 'Kids On The Move',
        website: 'kotm.org',
        phone: '(385) 292-5633',
        email: '',
        address: '475 West 260 North Orem, UT 84057',
        insurances: 'Tricare',
        locations: 'Orem',
        rates: 'Free',
        ages: '0-3',
        waitlist: 'No',
        telehealth: 'No',
        spanish: 'No'
    }
]


const filterProviders: (providers: Provider[], options: providerFilterOption[]) => Provider[] = (providers, options) => {

    return providers.filter(provider => {
        return options.every(option => {
            return provider.name === option.value
        })
    })
}