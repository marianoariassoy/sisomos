import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-e2e67ea8-afc0-428f-95d5-2388df7cc4b7')

const MercadoPagoButton = () => {
  return (
    <div id='wallet_container'>
      <Wallet
        initialization={{ preferenceId: '<PREFERENCE_ID>' }}
        customization={{ texts: { valueProp: 'smart_option' } }}
      />
    </div>
  )
}

export default MercadoPagoButton
