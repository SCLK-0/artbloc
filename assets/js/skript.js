'use strict';

/*
 transparent to solid navbar
*/
const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    headerEl.classList.add('header-scrolled');
  } else if (window.scrollY <= 100) {
    headerEl.classList.remove('header-scrolled');
  }

});


/*
 navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const menuCloseBtn = document.querySelector("[data-nav-close-btn]");
const menuOpenBtn = document.querySelector("[data-nav-open-btn]");

const elemArr = [overlay, menuCloseBtn, menuOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    // Add/remove class to body for hiding header actions on mobile
    document.body.classList.toggle("mobile-menu-open");
  });
}

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded, wallet functions ready');

  // Check if wallet modal elements exist
  const walletModal = document.getElementById('walletModal');
  if (walletModal) {
    console.log('Wallet modal found');
  } else {
    console.log('Wallet modal not found');
  }
});

/*
 back to top button
 */

/* if the user scrolls down the page by 100 pixels or more the button will show */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/* 
 NFT Modal functionality with detailed information
 */

// NFT data with detailed information
const nftData = {
  nft1: {
    title: "Bad Deck",
    token: "ERC-729",
    image: "./assets/images/nft.jpg",
    description: "A unique digital art piece featuring abstract geometric patterns with vibrant colors. This NFT represents the chaotic beauty of modern digital expression, combining traditional artistic elements with cutting-edge blockchain technology.",
    properties: [
      { type: "Background", value: "Cosmic", rarity: "15% have this trait" },
      { type: "Style", value: "Abstract", rarity: "8% have this trait" },
      { type: "Color Scheme", value: "Vibrant", rarity: "22% have this trait" },
      { type: "Rarity", value: "Rare", rarity: "5% have this trait" }
    ],
    views: "1.2K",
    favorites: "89",
    created: "Oct 2024"
  },
  nft2: {
    title: "Small Deck",
    token: "ERC-522",
    image: "./assets/images/nft2.jpg",
    description: "An intimate collection piece that showcases minimalist design principles. This NFT captures the essence of 'less is more' philosophy, featuring clean lines and subtle color gradients that speak to the sophisticated collector.",
    properties: [
      { type: "Size", value: "Compact", rarity: "12% have this trait" },
      { type: "Design", value: "Minimalist", rarity: "18% have this trait" },
      { type: "Texture", value: "Smooth", rarity: "25% have this trait" },
      { type: "Edition", value: "Limited", rarity: "3% have this trait" }
    ],
    views: "856",
    favorites: "67",
    created: "Sep 2024"
  },
  nft3: {
    title: "Double Deck",
    token: "ERC-495",
    image: "./assets/images/nft3.jpg",
    description: "A powerful dual-themed artwork that explores the concept of duality in digital art. This piece represents balance and contrast, featuring complementary elements that create a harmonious yet dynamic visual experience.",
    properties: [
      { type: "Theme", value: "Dual", rarity: "7% have this trait" },
      { type: "Symmetry", value: "Perfect", rarity: "4% have this trait" },
      { type: "Complexity", value: "High", rarity: "11% have this trait" },
      { type: "Balance", value: "Harmonic", rarity: "9% have this trait" }
    ],
    views: "2.1K",
    favorites: "156",
    created: "Oct 2024"
  },
  nft4: {
    title: "Grandpa Deck",
    token: "ERC-873",
    image: "./assets/images/nft4.jpg",
    description: "A nostalgic tribute to classic design aesthetics, blending vintage elements with modern digital artistry. This NFT evokes memories of simpler times while embracing the future of digital collectibles.",
    properties: [
      { type: "Era", value: "Vintage", rarity: "14% have this trait" },
      { type: "Mood", value: "Nostalgic", rarity: "19% have this trait" },
      { type: "Wisdom", value: "Ancient", rarity: "6% have this trait" },
      { type: "Heritage", value: "Classic", rarity: "13% have this trait" }
    ],
    views: "934",
    favorites: "78",
    created: "Aug 2024"
  },
  nft5: {
    title: "Mogged Feet",
    token: "ERC-972",
    image: "./assets/images/feet-1.png",
    description: "An avant-garde exploration of human form and digital expression. This unique piece challenges conventional art boundaries, presenting a bold statement about identity and presence in the digital realm.",
    properties: [
      { type: "Form", value: "Human", rarity: "20% have this trait" },
      { type: "Expression", value: "Bold", rarity: "8% have this trait" },
      { type: "Statement", value: "Strong", rarity: "12% have this trait" },
      { type: "Impact", value: "High", rarity: "5% have this trait" }
    ],
    views: "1.8K",
    favorites: "142",
    created: "Oct 2024"
  },
  nft6: {
    title: "The Abuser",
    token: "ERC-397",
    image: "./assets/images/feet-2.png",
    description: "A provocative digital artwork that explores themes of power and vulnerability. This piece invites viewers to contemplate complex social dynamics through the lens of contemporary digital art.",
    properties: [
      { type: "Intensity", value: "Extreme", rarity: "3% have this trait" },
      { type: "Message", value: "Deep", rarity: "7% have this trait" },
      { type: "Impact", value: "Profound", rarity: "4% have this trait" },
      { type: "Controversy", value: "High", rarity: "2% have this trait" }
    ],
    views: "2.7K",
    favorites: "89",
    created: "Sep 2024"
  },
  nft7: {
    title: "Idle Feet",
    token: "ERC-403",
    image: "./assets/images/feet-3.png",
    description: "A contemplative piece that captures moments of stillness and reflection. This NFT represents the beauty found in quiet moments, encouraging viewers to appreciate the art of simply being present.",
    properties: [
      { type: "Mood", value: "Peaceful", rarity: "16% have this trait" },
      { type: "Energy", value: "Calm", rarity: "21% have this trait" },
      { type: "State", value: "Meditative", rarity: "9% have this trait" },
      { type: "Vibe", value: "Zen", rarity: "11% have this trait" }
    ],
    views: "1.1K",
    favorites: "95",
    created: "Oct 2024"
  },
  nft8: {
    title: "Happy Feet",
    token: "ERC-687",
    image: "./assets/images/feet-4.png",
    description: "A joyful celebration of movement and life, this vibrant NFT captures the essence of happiness and freedom. The piece radiates positive energy and invites viewers to embrace the lighter side of digital art.",
    properties: [
      { type: "Emotion", value: "Joyful", rarity: "24% have this trait" },
      { type: "Energy", value: "High", rarity: "17% have this trait" },
      { type: "Movement", value: "Dynamic", rarity: "13% have this trait" },
      { type: "Spirit", value: "Free", rarity: "19% have this trait" }
    ],
    views: "1.5K",
    favorites: "128",
    created: "Oct 2024"
  },
  nft9: {
    title: "Animated Render",
    token: "ERC-891",
    image: "./assets/images/Final Render.gif",
    description: "A mesmerizing animated masterpiece that brings digital art to life. This dynamic NFT showcases the evolution of static art into living, breathing digital experiences that captivate and engage viewers.",
    properties: [
      { type: "Animation", value: "Fluid", rarity: "6% have this trait" },
      { type: "Frames", value: "60 FPS", rarity: "4% have this trait" },
      { type: "Duration", value: "Loop", rarity: "8% have this trait" },
      { type: "Quality", value: "4K", rarity: "2% have this trait" }
    ],
    views: "3.2K",
    favorites: "234",
    created: "Nov 2024"
  }
};

// Store current NFT ID for modal synchronization
let currentModalNftId = null;

// Open NFT Modal with detailed information
function openNFTModal(nftId) {
  const modal = document.getElementById('nftModal');
  const nft = nftData[nftId];

  if (!nft || !modal) return;

  // Store current NFT ID for synchronization
  currentModalNftId = nftId;

  // Update modal content
  document.getElementById('nftModalImage').src = nft.image;
  document.getElementById('nftModalImage').alt = nft.title;
  document.getElementById('nftModalTitle').textContent = nft.title;
  document.getElementById('nftModalToken').textContent = nft.token;
  document.getElementById('nftModalDescription').textContent = nft.description;
  document.getElementById('nftModalViews').textContent = nft.views;
  document.getElementById('nftModalFavorites').textContent = nft.favorites;
  document.getElementById('nftModalCreated').textContent = nft.created;

  // Update properties
  const propertiesContainer = document.getElementById('nftModalProperties');
  propertiesContainer.innerHTML = '';

  nft.properties.forEach(property => {
    const propertyElement = document.createElement('div');
    propertyElement.className = 'property-item';
    propertyElement.innerHTML = `
      <div class="property-type">${property.type}</div>
      <div class="property-value">${property.value}</div>
      <div class="property-rarity">${property.rarity}</div>
    `;
    propertiesContainer.appendChild(propertyElement);
  });

  // Sync modal favorite button with card heart button
  syncModalFavoriteButton(nftId);

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close NFT Modal
function closeNFTModal() {
  const modal = document.getElementById('nftModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Clear current NFT ID
    currentModalNftId = null;
  }
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
  const modal = document.getElementById('nftModal');
  if (event.target === modal) {
    closeNFTModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const nftModal = document.getElementById('nftModal');
    const bidModal = document.getElementById('placeBidModal');
    const buyModal = document.getElementById('buyNowModal');

    if (nftModal && nftModal.classList.contains('active')) {
      closeNFTModal();
    }
    if (bidModal && bidModal.classList.contains('active')) {
      closePlaceBidModal();
    }
    if (buyModal && buyModal.classList.contains('active')) {
      closeBuyNowModal();
    }
  }
});

/*
 Browse page transaction modals
 */

// Place a Bid Modal Functions
function openPlaceBidModal(nftName, currentPrice, imageUrl) {
  const modal = document.getElementById('placeBidModal');
  if (!modal) return;

  // Update modal content
  document.getElementById('bidNftImage').src = imageUrl;
  document.getElementById('bidNftImage').alt = nftName;
  document.getElementById('bidNftTitle').textContent = nftName;
  document.getElementById('bidCurrentPrice').textContent = currentPrice;

  // Calculate minimum bid (current price + 5%)
  const minBid = (parseFloat(currentPrice) * 1.05).toFixed(2);
  document.getElementById('minimumBid').textContent = minBid;
  document.getElementById('bidAmount').min = minBid;
  document.getElementById('bidAmount').placeholder = minBid;

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Add input listener for real-time calculation
  const bidInput = document.getElementById('bidAmount');
  bidInput.addEventListener('input', calculateBidTotal);
}

function closePlaceBidModal() {
  const modal = document.getElementById('placeBidModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Reset form
    document.getElementById('bidAmount').value = '';
    calculateBidTotal();
  }
}

function calculateBidTotal() {
  const bidAmount = parseFloat(document.getElementById('bidAmount').value) || 0;
  const serviceFee = bidAmount * 0.025; // 2.5%
  const total = bidAmount + serviceFee;

  document.getElementById('bidSummaryAmount').textContent = bidAmount.toFixed(2) + ' ETH';
  document.getElementById('bidServiceFee').textContent = serviceFee.toFixed(4) + ' ETH';
  document.getElementById('bidTotal').textContent = total.toFixed(4) + ' ETH';
}

function submitBid() {
  const bidAmount = document.getElementById('bidAmount').value;
  const nftTitle = document.getElementById('bidNftTitle').textContent;

  if (!bidAmount || parseFloat(bidAmount) <= 0) {
    alert('Please enter a valid bid amount.');
    return;
  }

  // Simulate bid submission
  alert(`Bid placed successfully!\n\nNFT: ${nftTitle}\nBid Amount: ${bidAmount} ETH\n\nYour bid has been submitted and is now active. You will be notified if you are outbid or if your bid is accepted.`);
  closePlaceBidModal();
}

// Buy Now Modal Functions
function openBuyNowModal(nftName, price, imageUrl) {
  const modal = document.getElementById('buyNowModal');
  if (!modal) return;

  // Update modal content
  document.getElementById('buyNftImage').src = imageUrl;
  document.getElementById('buyNftImage').alt = nftName;
  document.getElementById('buyNftTitle').textContent = nftName;
  document.getElementById('buyCurrentPrice').textContent = price;

  // Calculate fees and total
  const itemPrice = parseFloat(price);
  const serviceFee = itemPrice * 0.025; // 2.5%
  const royalty = itemPrice * 0.05; // 5%
  const total = itemPrice + serviceFee + royalty;

  document.getElementById('buySummaryPrice').textContent = itemPrice.toFixed(2) + ' ETH';
  document.getElementById('buyServiceFee').textContent = serviceFee.toFixed(4) + ' ETH';
  document.getElementById('buyRoyalty').textContent = royalty.toFixed(4) + ' ETH';
  document.getElementById('buyTotal').textContent = total.toFixed(4) + ' ETH';

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBuyNowModal() {
  const modal = document.getElementById('buyNowModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function submitPurchase() {
  const nftTitle = document.getElementById('buyNftTitle').textContent;
  const totalPrice = document.getElementById('buyTotal').textContent;

  // Simulate purchase
  alert(`Purchase successful!\n\nNFT: ${nftTitle}\nTotal Paid: ${totalPrice}\n\nCongratulations! The NFT has been transferred to your wallet. You can view it in your collection.`);
  closeBuyNowModal();
}

// Preview Modal Functions
function openPreviewModal(nftName, imageUrl) {
  const modal = document.getElementById('previewModal');
  if (!modal) return;

  // Update modal content
  document.getElementById('previewNftImage').src = imageUrl;
  document.getElementById('previewNftImage').alt = nftName;

  // Reset to default settings
  resetPreview();

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Initialize event listeners
  initializePreviewControls();
}

function closePreviewModal() {
  const modal = document.getElementById('previewModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function initializePreviewControls() {
  // Room environment controls
  const roomButtons = document.querySelectorAll('.room-btn');
  roomButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      roomButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const roomType = this.dataset.room;
      const previewRoom = document.getElementById('previewRoom');
      previewRoom.className = `preview-room ${roomType}`;
    });
  });

  // Frame style controls
  const frameButtons = document.querySelectorAll('.frame-btn');
  frameButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      frameButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const frameType = this.dataset.frame;
      const nftFrame = document.getElementById('nftFrame');
      nftFrame.className = `nft-frame ${frameType}`;
    });
  });

  // Lighting controls
  const lightingButtons = document.querySelectorAll('.lighting-btn');
  lightingButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      lightingButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const lightingType = this.dataset.lighting;
      const roomLighting = document.querySelector('.room-lighting');
      roomLighting.className = `room-lighting ${lightingType}`;
    });
  });

  // Size slider
  const sizeSlider = document.getElementById('sizeSlider');
  const sizeValue = document.getElementById('sizeValue');
  sizeSlider.addEventListener('input', function () {
    const size = this.value;
    sizeValue.textContent = size + '%';
    updateNFTTransform();
  });

  // Position X slider
  const positionXSlider = document.getElementById('positionXSlider');
  const positionXValue = document.getElementById('positionXValue');
  positionXSlider.addEventListener('input', function () {
    const position = this.value;
    positionXValue.textContent = position + '%';
    updateNFTTransform();
  });

  // Position Y slider
  const positionYSlider = document.getElementById('positionYSlider');
  const positionYValue = document.getElementById('positionYValue');
  positionYSlider.addEventListener('input', function () {
    const position = this.value;
    positionYValue.textContent = position + '%';
    updateNFTTransform();
  });

  // Brightness slider
  const brightnessSlider = document.getElementById('brightnessSlider');
  const brightnessValue = document.getElementById('brightnessValue');
  brightnessSlider.addEventListener('input', function () {
    const brightness = this.value;
    brightnessValue.textContent = brightness + '%';
    updateImageFilters();
  });

  // Contrast slider
  const contrastSlider = document.getElementById('contrastSlider');
  const contrastValue = document.getElementById('contrastValue');
  contrastSlider.addEventListener('input', function () {
    const contrast = this.value;
    contrastValue.textContent = contrast + '%';
    updateImageFilters();
  });
}

function updateNFTTransform() {
  const size = document.getElementById('sizeSlider').value;
  const positionX = document.getElementById('positionXSlider').value;
  const positionY = document.getElementById('positionYSlider').value;

  const nftImage = document.getElementById('previewNftImage');
  const frameContainer = document.querySelector('.nft-frame-container');

  // Apply size to the image only
  nftImage.style.transform = `scale(${size / 100})`;

  // Apply position to the frame container
  frameContainer.style.transform = `
    translateX(${positionX * 2}px) 
    translateY(${positionY * 2}px)
  `;
}

function updateImageFilters() {
  const brightness = document.getElementById('brightnessSlider').value;
  const contrast = document.getElementById('contrastSlider').value;

  const nftImage = document.getElementById('previewNftImage');
  nftImage.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
}

function resetPreview() {
  // Reset room to modern living
  document.querySelectorAll('.room-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-room="modern-living"]').classList.add('active');
  document.getElementById('previewRoom').className = 'preview-room modern-living';

  // Reset frame to modern
  document.querySelectorAll('.frame-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-frame="modern-frame"]').classList.add('active');
  document.getElementById('nftFrame').className = 'nft-frame modern-frame';

  // Reset lighting to natural
  document.querySelectorAll('.lighting-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-lighting="natural"]').classList.add('active');
  document.querySelector('.room-lighting').className = 'room-lighting natural';

  // Reset sliders
  document.getElementById('sizeSlider').value = 100;
  document.getElementById('sizeValue').textContent = '100%';
  document.getElementById('positionXSlider').value = 0;
  document.getElementById('positionXValue').textContent = '0%';
  document.getElementById('positionYSlider').value = 0;
  document.getElementById('positionYValue').textContent = '0%';
  document.getElementById('brightnessSlider').value = 100;
  document.getElementById('brightnessValue').textContent = '100%';
  document.getElementById('contrastSlider').value = 100;
  document.getElementById('contrastValue').textContent = '100%';

  // Reset transforms and filters
  const frameContainer = document.querySelector('.nft-frame-container');
  if (frameContainer) {
    frameContainer.style.transform = 'translateX(0) translateY(0)';
  }

  const nftImage = document.getElementById('previewNftImage');
  if (nftImage) {
    nftImage.style.transform = 'scale(1)';
    nftImage.style.filter = 'brightness(100%) contrast(100%)';
  }
}

function savePreview() {
  // Create a canvas to capture the preview
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size
  canvas.width = 800;
  canvas.height = 600;

  // Get the preview room element
  const previewRoom = document.getElementById('previewRoom');
  const nftImage = document.getElementById('previewNftImage');

  // Simple implementation - in a real app, you'd use html2canvas or similar
  alert('Save functionality would capture the current preview as an image.\n\nThis feature would typically use html2canvas library to convert the preview to a downloadable image file.');

  // Placeholder for actual implementation:
  // html2canvas(previewRoom).then(canvas => {
  //   const link = document.createElement('a');
  //   link.download = 'nft-preview.png';
  //   link.href = canvas.toDataURL();
  //   link.click();
  // });
}

// Additional utility functions
function addToFavorites() {
  alert('Added to favorites! ❤️');
}

function shareNFT() {
  if (navigator.share) {
    navigator.share({
      title: 'Check out this NFT on ArtBloc',
      text: 'Amazing NFT collection on ArtBloc marketplace',
      url: window.location.href
    });
  } else {
    // Fallback for browsers that don't support Web Share API
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copied to clipboard! 📋');
    }).catch(() => {
      alert('Share functionality not available on this browser.');
    });
  }
}

// Close modals when clicking outside
document.addEventListener('click', function (event) {
  const bidModal = document.getElementById('placeBidModal');
  const buyModal = document.getElementById('buyNowModal');
  const previewModal = document.getElementById('previewModal');
  const authModal = document.getElementById('authModal');

  if (event.target === bidModal) {
    closePlaceBidModal();
  }
  if (event.target === buyModal) {
    closeBuyNowModal();
  }
  if (event.target === previewModal) {
    closePreviewModal();
  }
  if (event.target === authModal) {
    closeAuthModal();
  }
});

/*
 wallet modal functionality
 */

// Web3 and wallet connection
let web3 = null;
let currentAccount = null;
let walletConnectProvider = null;
let walletConnectUri = null;

// Initialize Web3
async function initializeWeb3() {
  if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    console.log('Web3 initialized with MetaMask');
  } else {
    console.log('MetaMask not detected');
  }
}

// Open wallet modal
function openWalletModal() {
  try {
    const modal = document.getElementById('walletModal');
    if (!modal) {
      console.error('Wallet modal not found');
      alert('Wallet modal not found. Please refresh the page.');
      return;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Initialize Web3 when modal opens
    initializeWeb3();

    // Show main wallet options view
    showWalletOptions();
  } catch (error) {
    console.error('Error opening wallet modal:', error);
    alert('Error opening wallet modal. Please refresh the page.');
  }
}

// Close wallet modal
function closeWalletModal() {
  try {
    const modal = document.getElementById('walletModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  } catch (error) {
    console.error('Error closing wallet modal:', error);
  }
}

// Show main wallet options view
function showWalletOptions() {
  try {
    const optionsView = document.getElementById('walletOptionsView');
    const connectView = document.getElementById('walletConnectView');
    const allWalletsView = document.getElementById('allWalletsView');

    if (optionsView) optionsView.style.display = 'block';
    if (connectView) connectView.style.display = 'none';
    if (allWalletsView) allWalletsView.style.display = 'none';
  } catch (error) {
    console.error('Error showing wallet options:', error);
  }
}

// Show WalletConnect QR code view
async function showWalletConnect() {
  try {
    const optionsView = document.getElementById('walletOptionsView');
    const connectView = document.getElementById('walletConnectView');
    const allWalletsView = document.getElementById('allWalletsView');

    if (optionsView) optionsView.style.display = 'none';
    if (connectView) connectView.style.display = 'block';
    if (allWalletsView) allWalletsView.style.display = 'none';

    // Generate WalletConnect URI and QR code
    await generateWalletConnectURI();
  } catch (error) {
    console.error('Error showing WalletConnect view:', error);
  }
}

// Show all wallets view
function showAllWallets() {
  try {
    const optionsView = document.getElementById('walletOptionsView');
    const connectView = document.getElementById('walletConnectView');
    const allWalletsView = document.getElementById('allWalletsView');

    if (optionsView) optionsView.style.display = 'none';
    if (connectView) connectView.style.display = 'none';
    if (allWalletsView) allWalletsView.style.display = 'block';
  } catch (error) {
    console.error('Error showing all wallets view:', error);
  }
}

// Generate WalletConnect URI and QR code
async function generateWalletConnectURI() {
  try {
    // Create a simple WalletConnect URI (in real implementation, you'd use the WalletConnect library)
    const uri = `wc:${Date.now()}@1?bridge=https://bridge.walletconnect.org&key=${Math.random().toString(36).substring(2)}`;
    walletConnectUri = uri;

    // Generate QR code
    const qrCodeElement = document.getElementById('qrCode');
    if (qrCodeElement) {
      qrCodeElement.innerHTML = '';

      if (typeof QRCode !== 'undefined') {
        QRCode.toCanvas(qrCodeElement, uri, {
          width: 160,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        }, function (error) {
          if (error) {
            console.error('QR Code generation error:', error);
            qrCodeElement.innerHTML = '<p>QR Code Error</p>';
          }
        });
      } else {
        qrCodeElement.innerHTML = '<p>QR Code Library Loading...</p>';
      }
    }

    console.log('WalletConnect URI generated:', uri);
  } catch (error) {
    console.error('Error generating WalletConnect URI:', error);
  }
}

// Copy WalletConnect link
function copyWalletConnectLink() {
  if (walletConnectUri) {
    navigator.clipboard.writeText(walletConnectUri).then(() => {
      alert('WalletConnect link copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy link. Please copy manually: ' + walletConnectUri);
    });
  }
}

// Select ecosystem
function selectEcosystem(ecosystem) {
  console.log(`Selected ecosystem: ${ecosystem}`);

  if (ecosystem === 'ethereum') {
    // Show Ethereum-compatible wallets
    alert(`Ethereum ecosystem selected!\n\nThis would show wallets like:\n• MetaMask\n• Coinbase Wallet\n• Trust Wallet\n• Rainbow\n• And many more...`);
  } else if (ecosystem === 'solana') {
    // Show Solana-compatible wallets
    alert(`Solana ecosystem selected!\n\nThis would show wallets like:\n• Phantom\n• Solflare\n• Slope\n• And others...`);
  }

  // Go back to main view
  showWalletOptions();
}

// Connect to MetaMask
async function connectMetaMask() {
  alert('MetaMask wallet connection is currently disabled for demo purposes. This feature would normally connect to your MetaMask wallet for blockchain transactions.');
  closeWalletModal();
}

// Connect to Coinbase Wallet
async function connectCoinbase() {
  alert('Coinbase Wallet connection is currently disabled for demo purposes. This feature would normally connect to your Coinbase Wallet for secure transactions.');
  closeWalletModal();
}

// Connect wallet function (main handler)
function connectWallet(walletType) {
  let walletName = '';

  switch (walletType) {
    case 'metamask':
      walletName = 'MetaMask';
      break;
    case 'coinbase':
      walletName = 'Coinbase Wallet';
      break;
    case 'abstract':
      walletName = 'Abstract';
      break;
    case 'walletconnect':
      walletName = 'WalletConnect';
      break;
    default:
      walletName = walletType;
  }

  alert(`${walletName} wallet connection is currently disabled for demo purposes. This feature would normally connect to your ${walletName} wallet for blockchain transactions.`);
  closeWalletModal();
}

// Show wallet connected status
function showWalletConnected(walletName, account) {
  try {
    // Update the wallet button to show connected status
    const walletBtn = document.querySelector('.btn[aria-labelledby="wallet"]');
    if (walletBtn) {
      const walletText = walletBtn.querySelector('#wallet');
      if (walletText) {
        walletText.textContent = `${walletName} Connected`;
        walletText.style.color = '#00d4aa'; // Green color for connected
      }
    }

    // Show success message
    alert(`Successfully connected to ${walletName}!\n\nAccount: ${account.substring(0, 6)}...${account.substring(38)}\n\nYou can now interact with NFTs on ArtBloc!`);
  } catch (error) {
    console.error('Error showing wallet connected status:', error);
  }
}

// Connect with email
function connectWithEmail() {
  alert('Email authentication is currently disabled for demo purposes. This feature would normally allow you to connect using your email address for a simplified login experience.');
  closeWalletModal();
}

// Show more wallet options (for backward compatibility)
function showMoreWallets() {
  alert('Additional wallet options are currently disabled for demo purposes. This feature would normally show more wallet connection options like Trust Wallet, Rainbow, and others.');
  closeWalletModal();
}

// Show MetaMask modal (for index.html compatibility)
function showMetaMaskModal() {
  alert('MetaMask wallet connection is currently disabled for demo purposes. This feature would normally connect to your MetaMask wallet for blockchain transactions.');
  closeWalletModal();
}

/*
 Authentication Modal Functions
 */

// Open auth modal
function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset to login form
    showLogin();

    // Initialize password strength checker
    const signupPassword = document.getElementById('signupPassword');
    if (signupPassword) {
      signupPassword.addEventListener('input', updatePasswordStrength);
    }
  }
}

// Close auth modal
function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Reset forms
    const forms = modal.querySelectorAll('form');
    forms.forEach(form => form.reset());

    // Reset password strength
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    if (strengthFill && strengthText) {
      strengthFill.style.width = '0%';
      strengthText.textContent = 'Password strength';
      strengthText.style.color = 'var(--spanish-gray)';
    }
  }
}

/*
 Authentication Functions
 */

// Toggle between login and signup forms
function showLogin() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginBtn = document.querySelector('.auth-toggle-btn:first-child');
  const signupBtn = document.querySelector('.auth-toggle-btn:last-child');

  if (loginForm && signupForm && loginBtn && signupBtn) {
    // Clear all form data
    clearAllForms();

    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
  }
}

function showSignup() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginBtn = document.querySelector('.auth-toggle-btn:first-child');
  const signupBtn = document.querySelector('.auth-toggle-btn:last-child');

  if (loginForm && signupForm && loginBtn && signupBtn) {
    // Clear all form data
    clearAllForms();

    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    loginBtn.classList.remove('active');
    signupBtn.classList.add('active');
  }
}

// Clear all form data
function clearAllForms() {
  // Clear login form
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const rememberMe = document.getElementById('rememberMe');

  if (loginEmail) loginEmail.value = '';
  if (loginPassword) loginPassword.value = '';
  if (rememberMe) rememberMe.checked = false;

  // Clear signup form
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const signupEmail = document.getElementById('signupEmail');
  const username = document.getElementById('username');
  const signupPassword = document.getElementById('signupPassword');
  const confirmPassword = document.getElementById('confirmPassword');
  const agreeTerms = document.getElementById('agreeTerms');

  if (firstName) firstName.value = '';
  if (lastName) lastName.value = '';
  if (signupEmail) signupEmail.value = '';
  if (username) username.value = '';
  if (signupPassword) signupPassword.value = '';
  if (confirmPassword) confirmPassword.value = '';
  if (agreeTerms) agreeTerms.checked = false;

  // Reset password strength indicator
  const strengthFill = document.querySelector('.strength-fill');
  const strengthText = document.querySelector('.strength-text');
  if (strengthFill && strengthText) {
    strengthFill.style.width = '0%';
    strengthText.textContent = 'Password strength';
    strengthText.style.color = 'var(--spanish-gray)';
  }
}

// Toggle password visibility
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const toggle = input.parentElement.querySelector('.password-toggle ion-icon');

  if (input.type === 'password') {
    input.type = 'text';
    toggle.name = 'eye-off-outline';
  } else {
    input.type = 'password';
    toggle.name = 'eye-outline';
  }
}

// Password strength checker
function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength += 25;
  if (password.match(/[a-z]/)) strength += 25;
  if (password.match(/[A-Z]/)) strength += 25;
  if (password.match(/[0-9]/)) strength += 25;
  if (password.match(/[^a-zA-Z0-9]/)) strength += 25;

  return Math.min(strength, 100);
}

// Update password strength indicator
function updatePasswordStrength() {
  const passwordInput = document.getElementById('signupPassword');
  const strengthFill = document.querySelector('.strength-fill');
  const strengthText = document.querySelector('.strength-text');

  if (passwordInput && strengthFill && strengthText) {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    strengthFill.style.width = strength + '%';

    if (strength < 25) {
      strengthText.textContent = 'Weak password';
      strengthText.style.color = '#ff4444';
    } else if (strength < 50) {
      strengthText.textContent = 'Fair password';
      strengthText.style.color = '#ffaa00';
    } else if (strength < 75) {
      strengthText.textContent = 'Good password';
      strengthText.style.color = '#00aa00';
    } else {
      strengthText.textContent = 'Strong password';
      strengthText.style.color = '#00aa00';
    }
  }
}

// Handle login form submission
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  // Demo alert - in real app, this would make an API call
  alert(`Login functionality is currently disabled for demo purposes.\n\nEmail: ${email}\nRemember Me: ${rememberMe ? 'Yes' : 'No'}\n\nThis would normally authenticate your credentials and log you into ArtBloc.`);

  // Clear all form inputs after submission
  clearAllForms();
}

// Handle signup form submission
function handleSignup(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('signupEmail').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;

  // Basic validation
  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  if (!agreeTerms) {
    alert('Please agree to the Terms of Service and Privacy Policy to continue.');
    return;
  }

  // Demo alert - in real app, this would make an API call
  alert(`Sign up functionality is currently disabled for demo purposes.\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nUsername: ${username}\n\nThis would normally create your ArtBloc account and send a verification email.`);

  // Clear all form inputs after submission
  clearAllForms();
}

// Handle social login
function socialLogin(provider) {
  const providerNames = {
    google: 'Google',
    github: 'GitHub',
    discord: 'Discord'
  };

  alert(`${providerNames[provider]} authentication is currently disabled for demo purposes. This feature would normally allow you to sign in using your ${providerNames[provider]} account.`);
}

// Initialize auth page functionality
document.addEventListener('DOMContentLoaded', function () {
  // Add password strength checker if on auth page
  const signupPassword = document.getElementById('signupPassword');
  if (signupPassword) {
    signupPassword.addEventListener('input', updatePasswordStrength);
  }
});

// Close modal when clicking outside
document.addEventListener('click', function (event) {
  try {
    const modal = document.getElementById('walletModal');

    if (event.target === modal) {
      closeWalletModal();
    }
  } catch (error) {
    console.error('Error handling click outside modal:', error);
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
  try {
    if (event.key === 'Escape') {
      const walletModal = document.getElementById('walletModal');
      const bidModal = document.getElementById('placeBidModal');
      const buyModal = document.getElementById('buyNowModal');
      const previewModal = document.getElementById('previewModal');
      const authModal = document.getElementById('authModal');

      if (walletModal && walletModal.classList.contains('active')) {
        closeWalletModal();
      }
      if (bidModal && bidModal.classList.contains('active')) {
        closePlaceBidModal();
      }
      if (buyModal && buyModal.classList.contains('active')) {
        closeBuyNowModal();
      }
      if (previewModal && previewModal.classList.contains('active')) {
        closePreviewModal();
      }
      if (authModal && authModal.classList.contains('active')) {
        closeAuthModal();
      }
    }
  } catch (error) {
    console.error('Error handling escape key:', error);
  }
});

// Listen for account changes
if (typeof window.ethereum !== 'undefined') {
  window.ethereum.on('accountsChanged', function (accounts) {
    if (accounts.length === 0) {
      // User disconnected wallet
      currentAccount = null;
      const walletBtn = document.querySelector('.btn[aria-labelledby="wallet"]');
      if (walletBtn) {
        const walletText = walletBtn.querySelector('#wallet');
        if (walletText) {
          walletText.textContent = 'Wallet Connect';
          walletText.style.color = 'inherit';
        }
      }
      console.log('Wallet disconnected');
    } else {
      // Account changed
      currentAccount = accounts[0];
      console.log('Account changed to:', currentAccount);
    }
  });
}
/*
 
Authentication System - Mock Login Functionality
 */

// Mock user data
const mockUser = {
  name: "Demo User",
  username: "demouser",
  email: "demo@artbloc.com",
  avatar: "./assets/images/feet-4.png"
};

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

// Mock login function
function mockLogin() {
  console.log('mockLogin called');
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userData', JSON.stringify(mockUser));
  console.log('Login data stored, calling updateNavbar');
  updateNavbar();
  alert('Successfully logged in as Demo User!');
}

// Force update user avatar
function updateUserAvatar() {
  if (isLoggedIn()) {
    localStorage.setItem('userData', JSON.stringify(mockUser));
    updateNavbar();
  }
}

// Logout function
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userData');
  updateNavbar();

  // Redirect to home if on profile page
  if (window.location.pathname.includes('profile.html')) {
    window.location.href = 'index.html';
  }

  alert('Successfully logged out!');
}

// Update navbar based on login status
function updateNavbar() {
  console.log('updateNavbar called');
  const headerActions = document.getElementById('headerActions') || document.querySelector('.header-actions');

  console.log('headerActions element:', headerActions);
  if (!headerActions) {
    console.log('No headerActions element found!');
    return;
  }

  if (isLoggedIn()) {
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Show logged in state - replace login button with profile
    headerActions.innerHTML = `
      <div class="profile-dropdown">
        <button class="profile-btn" onclick="toggleProfileDropdown()">
          <img src="${userData.avatar}" alt="Profile" class="profile-avatar-small">
          <span>${userData.name}</span>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
        
        <div class="dropdown-menu" id="profileDropdown">
          <a href="profile.html" class="dropdown-item">
            <ion-icon name="person-outline"></ion-icon>
            <span>Profile</span>
          </a>
          <a href="#" class="dropdown-item" onclick="logout(); return false;">
            <ion-icon name="log-out-outline"></ion-icon>
            <span>Logout</span>
          </a>
        </div>
      </div>

      <a href="#" class="btn" aria-labelledby="wallet" onclick="openWalletModal(); return false;">
        <ion-icon name="wallet-outline"></ion-icon>
        <span id="wallet">Wallet Connect</span>
      </a>
    `;
  } else {
    // Show logged out state
    headerActions.innerHTML = `
      <a href="#" class="btn" onclick="mockLogin(); return false;">
        <ion-icon name="flash-outline"></ion-icon>
        <span>Quick Login</span>
      </a>
      
      <a href="#" class="btn" aria-labelledby="login" onclick="openAuthModal(); return false;">
        <ion-icon name="person-outline"></ion-icon>
        <span id="login">Login</span>
      </a>

      <a href="#" class="btn" aria-labelledby="wallet" onclick="openWalletModal(); return false;">
        <ion-icon name="wallet-outline"></ion-icon>
        <span id="wallet">Wallet Connect</span>
      </a>
    `;
  }
}

// Toggle profile dropdown
function toggleProfileDropdown() {
  const dropdown = document.getElementById('profileDropdown');
  if (dropdown) {
    dropdown.classList.toggle('active');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  const profileDropdown = document.getElementById('profileDropdown');
  const profileBtn = document.querySelector('.profile-btn');

  if (profileDropdown && !profileBtn.contains(event.target)) {
    profileDropdown.classList.remove('active');
  }
});

// Profile page functions
function showProfileTab(tabName) {
  // Remove active class from all tabs and buttons
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.profile-nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  const selectedTab = document.getElementById(tabName + 'Tab');
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Activate corresponding button - find the button that was clicked
  const clickedButton = event ? event.target.closest('.profile-nav-btn') : document.querySelector(`[onclick="showProfileTab('${tabName}')"]`);
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

// Initialize authentication state on page load
document.addEventListener('DOMContentLoaded', function () {
  console.log('Auth system initializing...');
  console.log('Is logged in:', isLoggedIn());

  // Force update user data to latest version
  if (isLoggedIn()) {
    localStorage.setItem('userData', JSON.stringify(mockUser));
  }

  updateNavbar();

  // Update profile page if logged in
  if (window.location.pathname.includes('profile.html') && isLoggedIn()) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const profileName = document.getElementById('profileName');
    const profileUsername = document.getElementById('profileUsername');

    if (profileName) profileName.textContent = userData.name;
    if (profileUsername) profileUsername.textContent = '@' + userData.username;
  }

  // Redirect to home if trying to access profile while logged out
  if (window.location.pathname.includes('profile.html') && !isLoggedIn()) {
    alert('Please log in to access your profile.');
    window.location.href = 'index.html';
  }
});

/*
 Authentication Modal Functions
 */

// Open authentication modal
function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close authentication modal
function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Show login form
function showLogin() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginBtn = document.querySelector('.auth-toggle-btn:first-child');
  const signupBtn = document.querySelector('.auth-toggle-btn:last-child');

  if (loginForm && signupForm) {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
  }
}

// Show signup form
function showSignup() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginBtn = document.querySelector('.auth-toggle-btn:first-child');
  const signupBtn = document.querySelector('.auth-toggle-btn:last-child');

  if (loginForm && signupForm) {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    loginBtn.classList.remove('active');
    signupBtn.classList.add('active');
  }
}

// Handle login form submission
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email && password) {
    // Simulate login process
    setTimeout(() => {
      mockLogin();
      closeAuthModal();
    }, 1000);
  }
}

// Handle signup form submission
function handleSignup(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('signupEmail').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  if (firstName && lastName && email && username && password) {
    // Simulate signup process
    setTimeout(() => {
      // Update mock user data with signup info
      mockUser.name = firstName + ' ' + lastName;
      mockUser.username = username;
      mockUser.email = email;

      mockLogin();
      closeAuthModal();
    }, 1000);
  }
}

// Social login function
function socialLogin(provider) {
  alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login is currently disabled for demo purposes. Use the Quick Login button instead.`);
}

// Toggle password visibility
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const button = input.nextElementSibling;
  const icon = button.querySelector('ion-icon');

  if (input.type === 'password') {
    input.type = 'text';
    icon.name = 'eye-off-outline';
  } else {
    input.type = 'password';
    icon.name = 'eye-outline';
  }
}

// Create NFT Modal Functions
function openCreateNFTModal() {
  const modal = document.getElementById('createNFTModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCreateNFTModal() {
  const modal = document.getElementById('createNFTModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// Add property function for Create NFT Modal
function addProperty() {
  const container = document.querySelector('.properties-container');
  const propertyItem = document.createElement('div');
  propertyItem.className = 'property-item';
  propertyItem.innerHTML = `
    <input type="text" placeholder="Property name" class="property-name">
    <input type="text" placeholder="Value" class="property-value">
    <button type="button" class="remove-property-btn" onclick="removeProperty(this)">
      <ion-icon name="trash-outline"></ion-icon>
    </button>
  `;
  container.appendChild(propertyItem);
}

function removeProperty(button) {
  const propertyItem = button.closest('.property-item');
  propertyItem.remove();
}

// Handle Create NFT Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const createNFTForm = document.querySelector('.create-nft-form');
  if (createNFTForm) {
    createNFTForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData();
      const nftFile = document.getElementById('nftFile').files[0];
      const nftName = document.getElementById('nftName').value;
      const nftDescription = document.getElementById('nftDescription').value;
      const nftPrice = document.getElementById('nftPrice').value;
      const nftRoyalty = document.getElementById('nftRoyalty').value;
      
      // Basic validation
      if (!nftName.trim()) {
        alert('Please enter an NFT name');
        return;
      }
      
      if (!nftFile) {
        alert('Please upload an artwork file');
        return;
      }
      
      // Collect properties
      const properties = [];
      const propertyItems = document.querySelectorAll('.property-item');
      propertyItems.forEach(item => {
        const name = item.querySelector('.property-name').value.trim();
        const value = item.querySelector('.property-value').value.trim();
        if (name && value) {
          properties.push({ name, value });
        }
      });
      
      // Show success message (placeholder for actual implementation)
      alert(`NFT "${nftName}" created successfully! This is a demo - actual blockchain integration would happen here.`);
      
      // Close modal and reset form
      closeCreateNFTModal();
      createNFTForm.reset();
      
      // Remove extra property items (keep only the first one)
      const propertyContainer = document.querySelector('.properties-container');
      const propertyItems2 = propertyContainer.querySelectorAll('.property-item');
      for (let i = 1; i < propertyItems2.length; i++) {
        propertyItems2[i].remove();
      }
    });
  }
});

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('createNFTModal');
  if (modal && event.target === modal) {
    closeCreateNFTModal();
  }
});

// Heart toggle functionality
function toggleHeart(event, button) {
  // Prevent the card click event from firing
  event.stopPropagation();
  
  const icon = button.querySelector('ion-icon');
  const isActive = button.classList.contains('active');
  
  if (isActive) {
    // Remove from favorites
    button.classList.remove('active');
    icon.setAttribute('name', 'heart-outline');
    button.setAttribute('title', 'Add to Favorites');
  } else {
    // Add to favorites
    button.classList.add('active');
    icon.setAttribute('name', 'heart');
    button.setAttribute('title', 'Remove from Favorites');
  }

  // If modal is open and this is the same NFT, sync the modal button
  if (currentModalNftId) {
    const card = button.closest('.collection-card');
    if (card) {
      const cardNftId = getCurrentNftIdFromCard(card);
      if (cardNftId === currentModalNftId) {
        syncModalFavoriteButton(currentModalNftId);
      }
    }
  }
}

// Toggle heart from modal
function toggleModalHeart() {
  if (!currentModalNftId) return;

  // Find the corresponding card heart button
  const cards = document.querySelectorAll('.collection-card');
  let targetCard = null;

  cards.forEach(card => {
    const cardNftId = getCurrentNftIdFromCard(card);
    if (cardNftId === currentModalNftId) {
      targetCard = card;
    }
  });

  if (targetCard) {
    const heartBtn = targetCard.querySelector('.heart-btn');
    if (heartBtn) {
      // Create a fake event to prevent propagation
      const fakeEvent = { stopPropagation: () => {} };
      toggleHeart(fakeEvent, heartBtn);
    }
  }
}

// Sync modal favorite button with card heart button state
function syncModalFavoriteButton(nftId) {
  const modalBtn = document.getElementById('modalFavoriteBtn');
  if (!modalBtn) return;

  // Find the corresponding card
  const cards = document.querySelectorAll('.collection-card');
  let isCardFavorited = false;

  cards.forEach(card => {
    const cardNftId = getCurrentNftIdFromCard(card);
    if (cardNftId === nftId) {
      const heartBtn = card.querySelector('.heart-btn');
      if (heartBtn && heartBtn.classList.contains('active')) {
        isCardFavorited = true;
      }
    }
  });

  // Update modal button state
  const modalIcon = modalBtn.querySelector('ion-icon');
  const modalSpan = modalBtn.querySelector('span');

  if (isCardFavorited) {
    modalBtn.classList.add('active');
    modalIcon.setAttribute('name', 'heart');
    modalSpan.textContent = 'Remove from Favorites';
  } else {
    modalBtn.classList.remove('active');
    modalIcon.setAttribute('name', 'heart-outline');
    modalSpan.textContent = 'Add to Favorites';
  }
}

// Get NFT ID from card element
function getCurrentNftIdFromCard(card) {
  // Extract NFT ID from the onclick attribute
  const onclickAttr = card.getAttribute('onclick');
  if (onclickAttr) {
    const match = onclickAttr.match(/openNFTModal\('([^']+)'\)/);
    return match ? match[1] : null;
  }
  return null;
}