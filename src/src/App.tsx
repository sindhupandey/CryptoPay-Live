import React, { useState } from 'react'
import Swal from 'sweetalert2'

const CryptoPay: React.FC = () => {
  const [amount, setAmount] = useState<string>('')
  const [currency, setCurrency] = useState<string>('USD')

  const connectWallet = async () => {
    if (!amount || Number(amount) <= 0) {
      Swal.fire({ icon: 'warning', title: 'Enter amount', background: '#1a0033', color: '#fff' })
      return
    }

    Swal.fire({
      title: 'Connecting Wallet...',
      html: 'Opening MetaMask / WalletConnect',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => Swal.showLoading(),
      background: '#1a0033',
      color: '#fff'
    })

    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Payment Successful!',
        html: `<b>${amount} ${currency}</b> received<br>TxHash: 0x71a2...9f8e<br>Settled instantly`,
        background: '#1a0033',
        color: '#fff'
      })
    }, 3000)
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-purple-500/30">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <i className="fas fa-coins text-3xl text-yellow-400"></i>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CryptoPay Live</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <span>Chains: ETH • Polygon • BSC</span>
            <span>0.5% Fee • Instant Settlement</span>
            <span className="text-green-400">Live $68K+ Volume</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          Accept Crypto Payments<br/>
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Globally in Seconds</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          USDT • USDC • ETH • MATIC • BNB • BTC | Instant Fiat Payouts (USD/EUR/INR)
        </p>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-purple-500/50 card-hover glow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">Amount</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100.00" 
                className="w-full px-6 py-4 bg-white/20 rounded-xl text-2xl text-center focus:outline-none focus:ring-4 focus:ring-purple-500 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Currency</label>
              <select 
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full px-6 py-4 bg-white/20 rounded-xl text-xl focus:outline-none focus:ring-4 focus:ring-purple-500 text-white"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
                <option>GBP</option>
              </select>
            </div>
          </div>

          <button 
            onClick={connectWallet}
            className="w-full py-6 text-2xl font-bold rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 transform hover:scale-105 transition pulse-btn"
          >
            <i className="fas fa-wallet mr-3"></i> Pay with Wallet
          </button>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
            <div><i className="fab fa-ethereum text-3xl text-blue-400"></i><br/>Ethereum</div>
            <div><i className="fas fa-coins text-3xl text-purple-400"></i><br/>Polygon</div>
            <div><i className="fas fa-fire text-3xl text-yellow-500"></i><br/>BSC</div>
          </div>
        </div>
      </section>

      {/* Rest of your sections (features, footer) — same as your HTML */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-purple-500/30 card-hover text-center">
          <i className="fas fa-bolt text-5xl text-yellow-400 mb-4"></i>
          <h3 className="text-2xl font-bold mb-3">Instant Settlement</h3>
          <p>Receive fiat in your bank in less than 3 seconds</p>
        </div>
        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-purple-500/30 card-hover text-center">
          <i className="fas fa-shield-alt text-5xl text-green-400 mb-4"></i>
          <h3 className="text-2xl font-bold mb-3">0.5% Lowest Fee</h3>
          <p>Cheaper than Stripe, PayPal, Razorpay</p>
        </div>
        <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-purple-500/30 card-hover text-center">
          <i className="fas fa-globe text-5xl text-blue-400 mb-4"></i>
          <h3 className="text-2xl font-bold mb-3">190+ Countries</h3>
          <p>White-label • Multi-language • KYC ready</p>
        </div>
      </section>

      <footer className="bg-black/50 py-12 text-center border-t border-purple-500/30">
        <p className="text-2xl font-bold mb-2">CryptoPay Live • Built by Sindhu Pandey • 2025</p>
        <p className="text-gray-400">IGDTUW '27 | Blockchain Developer | sindhupandey954@gmail.com</p>
      </footer>
    </div>
  )
}

export default CryptoPay
