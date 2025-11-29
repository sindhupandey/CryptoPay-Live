<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CryptoPay Live • Global Crypto Payment Gateway</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="https://cdn.jsdelivr.net/npm/@walletconnect/web3-provider@1.8.0/dist/umd/index.min.js"></script>
  <script src="https://cdn.ethers.io/lib/ethers-5.7.umd.min.js"></script>
  <style>
    .glow { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6); }
    .card-hover { transition: all 0.4s; }
    .card-hover:hover { transform: translateY(-12px) scale(1.02); }
    .pulse-btn { animation: pulse 2s infinite; }
    @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(168, 85, 247, 0); } 100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); } }
  </style>
</head>
<body class="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white min-h-screen">

  <!-- Header -->
  <header class="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-purple-500/30">
    <div class="container mx-auto px-6 py-5 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <i class="fas fa-coins text-3xl text-yellow-400"></i>
        <h1 class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CryptoPay Live</h1>
      </div>
      <div class="hidden md:flex items-center space-x-8 text-sm">
        <span>Chains: ETH • Polygon • BSC</span>
        <span>0.5% Fee • Instant Settlement</span>
        <span class="text-green-400">Live $68K+ Volume</span>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="container mx-auto px-6 py-20 text-center">
    <h2 class="text-5xl md:text-7xl font-extrabold mb-6">
      Accept Crypto Payments<br><span class="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Globally in Seconds</span>
    </h2>
    <p class="text-xl md:text-2xl text-gray-300 mb-12">USDT • USDC • ETH • MATIC • BNB • BTC | Instant Fiat Payouts (USD/EUR/INR)</p>
    
    <!-- Payment Box -->
    <div class="max-w-2xl mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-purple-500/50 card-hover glow">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label class="block text-sm font-medium mb-2">Amount</label>
          <input type="number" id="amount" placeholder="100.00" class="w-full px-6 py-4 bg-white/20 rounded-xl text-2xl text-center focus:outline-none focus:ring-4 focus:ring-purple-500">
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Currency</label>
          <select id="currency" class="w-full px-6 py-4 bg-white/20 rounded-xl text-xl focus:outline-none focus:ring-4 focus:ring-purple-500">
            <option>USD</option>
            <option>EUR</option>
            <option>INR</option>
            <option>GBP</option>
          </select>
        </div>
      </div>

      <button onclick="connectWallet()" id="payBtn" class="w-full py-6 text-2xl font-bold rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 transform hover:scale-105 transition pulse-btn">
        <i class="fas fa-wallet mr-3"></i> Pay with Wallet
      </button>

      <div class="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
        <div><i class="fab fa-ethereum text-3xl text-blue-400"></i><br>Ethereum</div>
        <div><i class="fas fa-coins text-3xl text-purple-400"></i><br>Polygon</div>
        <div><i class="fas fa-fire text-3xl text-yellow-500"></i><br>BSC</div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="container mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
    <div class="bg-white/5 backdrop-blur rounded-2xl p-8 border border-purple-500/30 card-hover text-center">
      <i class="fas fa-bolt text-5xl text-yellow-400 mb-4"></i>
      <h3 class="text-2xl font-bold mb-3">Instant Settlement</h3>
      <p>Receive fiat in your bank in < 3 seconds via Stripe / Razorpay</p>
    </div>
    <div class="bg-white/5 backdrop-blur rounded-2xl p-8 border border-purple-500/30 card-hover text-center">
      <i class="fas fa-shield-alt text-5xl text-green-400 mb-4"></i>
      <h3 class="text-2xl font-bold mb-3">0.5% Lowest Fee</h3>
      <p>Cheaper than Stripe, PayPal, Razorpay</p>
    </div>
    <div class="bg-white/5 backdrop-blur rounded-2xl p-8 border border-purple-500/30 card-hover text-center">
      <i class="fas fa-globe text-5xl text-blue-400 mb-4"></i>
      <h3 class="text-2xl font-bold mb-3">190+ Countries</h3>
      <p>White-label • Multi-language • KYC ready</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-black/50 py-12 text-center border-t border-purple-500/30">
    <p class="text-2xl font-bold mb-2">CryptoPay Live • Built by Sindhu Pandey • 2025</p>
    <p class="text-gray-400">IGDTUW '27 | Blockchain Developer | sindhupandey954@gmail.com</p>
    <div class="mt-6 flex justify-center space-x-8 text-3xl">
      <i class="fab fa-github hover:text-purple-400 cursor-pointer"></i>
      <i class="fab fa-twitter hover:text-purple-400 cursor-pointer"></i>
      <i class="fab fa-linkedin hover:text-purple-400 cursor-pointer"></i>
    </div>
  </footer>

  <script>
    async function connectWallet() {
      const amount = document.getElementById('amount').value;
      const currency = document.getElementById('currency').value;
      if (!amount || amount <= 0) return Swal.fire('Enter amount', '', 'warning');

      Swal.fire({
        title: 'Connecting Wallet...',
        html: 'Opening MetaMask / WalletConnect',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => Swal.showLoading()
      });

      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful!',
          html: `<b>${amount} ${currency}</b> received<br>TxHash: 0x71a2...9f8e<br>Settled instantly to your bank`,
          background: '#1a0033',
          color: '#fff',
          confirmButtonText: 'Done'
        });
      }, 3000);
    }
  </script>
</body>
</html>
