// ============================================================
//  BITERUSH — script.js  (All 9 Changes)
// ============================================================

// ==================== COUPLES PACKS ====================
const COUPLES_PACKS = [
  {
    id: "cp1", name: "The Romantic Escape", for: "Perfect for 2 · Date Night",
    badge: "⭐ Most Popular", badgeClass: "gold-badge", featured: true,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
    items: ["2 × Gourmet Mains of your choice","2 × Signature Desserts","2 × Wine / Mocktail","Complimentary Bread & Butter"],
    originalPrice: 7840, discountedPrice: 6272, discount: "20% OFF",
  },
  {
    id: "cp2", name: "Candlelight Comfort", for: "Cosy Night In · For 2",
    badge: "🔥 Trending", badgeClass: "", featured: false,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=85",
    items: ["2 × Pasta or Pizza Mains","1 × Tiramisu to Share","2 × Sparkling Lemonade","Garlic Focaccia Starter"],
    originalPrice: 5920, discountedPrice: 4736, discount: "20% OFF",
  },
  {
    id: "cp3", name: "Anniversary Feast", for: "Special Occasions · For 2",
    badge: "👑 Premium", badgeClass: "", featured: false,
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=85",
    items: ["2 × Premium Steak / Seafood Mains","Charcuterie Board Starter","2 × Lava Cake Desserts","2 × Premium Cocktails"],
    originalPrice: 11840, discountedPrice: 9472, discount: "20% OFF",
  },
  {
    id: "cp4", name: "Sushi for Two", for: "Japanese Night · For 2",
    badge: "🍣 New", badgeClass: "", featured: false,
    image: " ./images/sushi.jpg",
    items: ["2 × Premium Sushi Platters (10 pcs each)","1 × Miso Soup each","2 × Dragon Rolls","2 × Green Tea / Sake"],
    originalPrice: 8960, discountedPrice: 7168, discount: "20% OFF",
  },
];

// ==================== RESTAURANT DATA (9 cuisines added) ====================
const RESTAURANTS = [
  {
    id:1, name:"The Flame Grill", cuisine:"Burgers · Fast Food · American",
    category:["Fast Food","Non-Veg"], rating:4.8, time:"20–30 min",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    badge:"🔥 Trending", couples:false,
    menu:[
      {id:101,name:"Classic Smash Burger",desc:"Double smash patty, cheddar, pickles, secret sauce",price:1190,image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",veg:false},
      {id:102,name:"BBQ Bacon Burger",desc:"Smoky BBQ sauce, crispy bacon, caramelized onions",price:1390,image:"https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=400&q=80",veg:false},
      {id:103,name:"Crispy Chicken Burger",desc:"Buttermilk fried chicken, coleslaw, jalapeños",price:1290,image:"https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&q=80",veg:false},
      {id:104,name:"Truffle Fries",desc:"Golden fries tossed in truffle oil & parmesan",price:590,image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",veg:true},
      {id:105,name:"Loaded Nachos",desc:"Tortilla chips, melted cheese, jalapeños, sour cream",price:790,image:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80",veg:true},
      {id:106,name:"Chocolate Milkshake",desc:"Thick & creamy chocolate shake with whipped cream",price:390,image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",veg:true},
    ]
  },
  {
    id:2, name:"Sakura Sushi Bar", cuisine:"Japanese · Sushi · Asian",
    category:["Sushi","Non-Veg","Couples"], rating:4.9, time:"35–45 min",
    image:"https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
    badge:"⭐ Top Rated", couples:true,
    menu:[
      {id:201,name:"Salmon Avocado Roll",desc:"Fresh salmon, creamy avocado, cucumber, sesame",price:1590,image:"https://images.unsplash.com/photo-1617196034099-a3ca0a59ffc5?w=400&q=80",veg:false},
      {id:202,name:"Dragon Roll",desc:"Shrimp tempura topped with avocado & eel sauce",price:1890,image:"https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80",veg:false},
      {id:203,name:"Veggie Rainbow Roll",desc:"Avocado, cucumber, carrot, pickled radish",price:1290,image:"https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80",veg:true},
      {id:204,name:"Miso Soup",desc:"Traditional dashi broth with tofu & wakame",price:390,image:"https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80",veg:true},
      {id:205,name:"Tuna Sashimi (8 pcs)",desc:"Premium grade tuna, thinly sliced, with wasabi",price:2190,image:"https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",veg:false},
      {id:206,name:"Sushi Platter (16 pcs)",desc:"Chef's selection of nigiri, maki, and uramaki rolls",price:2890,image:"https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80",veg:false},
    ]
  },
  {
    id:3, name:"Mama Rosa's Pizza", cuisine:"Italian · Pizza · Pasta",
    category:["Pizza","Veg","Couples"], rating:4.7, time:"25–35 min",
    image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    badge:"🍕 Bestseller", couples:true,
    menu:[
      {id:301,name:"Margherita Classic",desc:"San Marzano tomatoes, fresh mozzarella, basil",price:890,image:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80",veg:true},
      {id:302,name:"Pepperoni Feast",desc:"Double pepperoni, mozzarella, oregano drizzle",price:1190,image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",veg:false},
      {id:303,name:"Truffle Mushroom Pizza",desc:"Wild mushroom, truffle oil, gruyère, thyme",price:1390,image:"https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80",veg:true},
      {id:304,name:"Spaghetti Carbonara",desc:"Egg yolk, guanciale, pecorino, black pepper",price:1090,image:"https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=400&q=80",veg:false},
      {id:305,name:"Tiramisu",desc:"Classic espresso-soaked ladyfingers, mascarpone",price:590,image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",veg:true},
    ]
  },
  {
    id:4, name:"Dragon Noodle House", cuisine:"Chinese · Dim Sum · Noodles",
    category:["Chinese","Non-Veg"], rating:4.6, time:"20–28 min",
    image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    badge:"🐉 Fan Fav", couples:false,
    menu:[
      {id:401,name:"Beef Ramen",desc:"Rich tonkotsu broth, braised beef, soft-boiled egg",price:1090,image:"https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&q=80",veg:false},
      {id:402,name:"Dim Sum Platter (12 pcs)",desc:"Har gow, siu mai, BBQ pork bao assortment",price:1490,image:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80",veg:false},
      {id:403,name:"Kung Pao Tofu",desc:"Crispy tofu, peanuts, dried chili, Sichuan sauce",price:890,image:"https://images.unsplash.com/photo-1582576163090-efcbb2a50eb3?w=400&q=80",veg:true},
      {id:404,name:"Spring Rolls (6 pcs)",desc:"Vegetable & glass noodle stuffed crispy rolls",price:590,image:"https://images.unsplash.com/photo-1515013016572-fce2f254b8ae?w=400&q=80",veg:true},
      {id:405,name:"Fried Rice with Crab",desc:"Wok-fried jasmine rice, crab meat, egg, scallion",price:1290,image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80",veg:false},
    ]
  },
  {
    id:5, name:"Spice Route", cuisine:"Indian · Biryani · Curry · Mughlai",
    category:["Indian","Non-Veg","Veg","Couples","Mughlai"], rating:4.8, time:"30–40 min",
    image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    badge:"🌶️ Fan Fav", couples:true,
    menu:[
      {id:501,name:"Chicken Biryani",desc:"Basmati rice, tender chicken, saffron, whole spices",price:349,image:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",veg:false},
      {id:502,name:"Butter Chicken",desc:"Slow-cooked chicken in rich tomato-cream gravy",price:299,image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",veg:false},
      {id:503,name:"Paneer Tikka Masala",desc:"Cottage cheese cubes in aromatic masala sauce",price:279,image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",veg:true},
      {id:504,name:"Dal Makhani",desc:"Black lentils slow-cooked overnight with cream & butter",price:229,image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",veg:true},
      {id:505,name:"Garlic Naan",desc:"Butter naan topped with roasted garlic & herbs",price:79,image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",veg:true},
      {id:506,name:"Mango Lassi",desc:"Chilled yoghurt drink with Alphonso mango",price:129,image:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",veg:true},
      {id:507,name:"Gulab Jamun (4 pcs)",desc:"Soft milk dumplings soaked in rose syrup",price:149,image:"https://images.unsplash.com/photo-1666793893466-4afb9f78494f?w=400&q=80",veg:true},
      {id:508,name:"Mutton Rogan Josh",desc:"Kashmiri slow-cooked mutton with whole spices",price:399,image:"https://images.unsplash.com/photo-1545247181-516773cae754?w=400&q=80",veg:false},
    ]
  },
  {
    id:6, name:"Dosa Palace", cuisine:"South Indian · Dosa · Idli · Filter Coffee",
    category:["South Indian","Veg","Indian"], rating:4.7, time:"15–25 min",
    image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80",
    badge:"🥞 Crispy!", couples:false,
    menu:[
      {id:601,name:"Masala Dosa",desc:"Crispy dosa with spiced potato filling, sambar, chutneys",price:149,image:"https://images.unsplash.com/photo-1694517269159-c870bfe1af02?w=400&q=80",veg:true},
      {id:602,name:"Ghee Roast Dosa",desc:"Paper-thin dosa roasted in pure ghee",price:179,image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&q=80",veg:true},
      {id:603,name:"Idli Sambar (4 pcs)",desc:"Soft steamed rice cakes with piping hot sambar",price:99,image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80",veg:true},
      {id:604,name:"Medu Vada (2 pcs)",desc:"Crispy lentil fritters with coconut chutney",price:89,image:"https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80",veg:true},
      {id:605,name:"Uttapam",desc:"Thick rice pancake with onion, tomato, green chilli",price:159,image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",veg:true},
      {id:606,name:"Filter Coffee",desc:"Traditional South Indian decoction coffee with frothy milk",price:59,image:"https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80",veg:true},
    ]
  },
  {
    id:7, name:"Chaat Corner", cuisine:"Street Food · Chaat · Mumbai · Delhi",
    category:["Street Food","Veg","Indian"], rating:4.5, time:"10–20 min",
    image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    badge:"🌮 Street Style", couples:false,
    menu:[
      {id:701,name:"Pani Puri (6 pcs)",desc:"Crispy puris with tangy jaljeera water, potato, chickpea",price:69,image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&q=80",veg:true},
      {id:702,name:"Bhel Puri",desc:"Puffed rice, sev, raw mango, tamarind chutney",price:89,image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&q=80",veg:true},
      {id:703,name:"Chole Bhature",desc:"Spiced chickpeas with fluffy deep-fried bhature",price:149,image:"https://images.unsplash.com/photo-1626500155631-40d8f14a1a4c?w=400&q=80",veg:true},
      {id:704,name:"Raj Kachori",desc:"Giant puri stuffed with potato, dahi, chutneys",price:129,image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&q=80",veg:true},
      {id:705,name:"Dahi Puri (6 pcs)",desc:"Crispy puris topped with yoghurt, chutneys, sev",price:109,image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",veg:true},
    ]
  },
  {
    id:8, name:"Sweet Spot Desserts", cuisine:"Desserts · Cakes · Ice Cream · Waffles",
    category:["Desserts","Veg"], rating:4.9, time:"18–25 min",
    image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    badge:"🍨 Sweet Treats", couples:false,
    menu:[
      {id:801,name:"Molten Lava Cake",desc:"Warm chocolate cake, liquid center, vanilla gelato",price:349,image:"https://images.unsplash.com/photo-1617305855058-336d24456869?w=400&q=80",veg:true},
      {id:802,name:"New York Cheesecake",desc:"Dense, creamy cheesecake with blueberry compote",price:299,image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",veg:true},
      {id:803,name:"Gelato 3-Scoop Cup",desc:"Your choice: pistachio, strawberry, salted caramel",price:249,image:"https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80",veg:true},
      {id:804,name:"Belgian Waffles",desc:"Crispy waffles, Nutella, strawberry, whipped cream",price:279,image:"https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&q=80",veg:true},
      {id:805,name:"Kulfi (2 pcs)",desc:"Traditional Indian ice cream with pistachio & saffron",price:149,image:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=80",veg:true},
    ]
  },
  {
    id:9, name:"Green Garden Café", cuisine:"Vegan · Healthy · Bowls · Salads",
    category:["Veg"], rating:4.8, time:"15–22 min",
    image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    badge:"🌱 Healthy", couples:false,
    menu:[
      {id:901,name:"Açaí Power Bowl",desc:"Açaí base, granola, banana, blueberry, chia seeds",price:549,image:"https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",veg:true},
      {id:902,name:"Avocado Toast Deluxe",desc:"Sourdough, smashed avocado, poached egg, microgreens",price:449,image:"https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80",veg:true},
      {id:903,name:"Buddha Bowl",desc:"Quinoa, roasted chickpea, kale, tahini dressing",price:499,image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",veg:true},
      {id:904,name:"Cold Brew Smoothie",desc:"Cold brew, banana, almond milk, cacao nibs",price:299,image:"https://images.unsplash.com/photo-1553530979-fbb9e4aee36f?w=400&q=80",veg:true},
    ]
  },
  {
    id:10, name:"Nawabs Mughlai Kitchen", cuisine:"Mughlai · Kebabs · Biriyani · Royal",
    category:["Mughlai","Indian","Non-Veg","Couples"], rating:4.8, time:"35–50 min",
    image:"https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80",
    badge:"👑 Royal", couples:true,
    menu:[
      {id:1001,name:"Murgh Dum Biryani",desc:"Slow-dum cooked chicken biryani in sealed handi",price:449,image:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",veg:false},
      {id:1002,name:"Seekh Kebab (6 pcs)",desc:"Minced lamb kebabs with mint chutney, onion rings",price:399,image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",veg:false},
      {id:1003,name:"Nihari",desc:"Slow-cooked mutton stew with whole spices & ginger",price:449,image:"https://images.unsplash.com/photo-1545247181-516773cae754?w=400&q=80",veg:false},
      {id:1004,name:"Shahi Paneer",desc:"Cottage cheese in royal cream, cashew, saffron gravy",price:319,image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",veg:true},
      {id:1005,name:"Roomali Roti (2 pcs)",desc:"Paper-thin handkerchief bread",price:69,image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",veg:true},
      {id:1006,name:"Phirni",desc:"Rice pudding with rose water and pistachios",price:179,image:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=80",veg:true},
    ]
  },
];

// ==================== STATE ====================
let cart = JSON.parse(localStorage.getItem('biterush_cart') || '[]');
let currentRestaurant = null;
let activeCategory = 'All';
let searchQuery = '';
let couponApplied = false;
let couponCode = '';
let couponDiscount = 0;
let birthdayApplied = false;
let selectedWallet = null;
let cardSaved = false;
let trackingInterval = null;

// ==================== HELPERS ====================
const $ = id => document.getElementById(id);
const fmt = p => '₹' + p.toLocaleString('en-IN', { minimumFractionDigits: 2 });
function saveCart() { localStorage.setItem('biterush_cart', JSON.stringify(cart)); }
function getTotalItems() { return cart.reduce((s,i) => s + i.qty, 0); }
function getTotalPrice() { return cart.reduce((s,i) => s + i.price * i.qty, 0); }
function updateBadges() {
  const total = getTotalItems();
  ['cart-badge','cart-badge2'].forEach(id => {
    const el = $(id); if (!el) return;
    el.textContent = total; el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 250);
  });
}
function showToast(msg) {
  $('toast-msg').textContent = msg;
  const t = $('toast'); t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
function generateOrderId() { return '#BR-' + Math.random().toString(36).substr(2,8).toUpperCase(); }

// ==================== CURSOR ====================
document.addEventListener('mousemove', e => {
  const g = $('cursor-glow');
  if (g) { g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; }
});
document.addEventListener('mousedown', () => { const g=$('cursor-glow'); if(g){g.style.width='24px';g.style.height='24px';} });
document.addEventListener('mouseup',   () => { const g=$('cursor-glow'); if(g){g.style.width='18px';g.style.height='18px';} });

// ==================== NAVBAR SCROLL ====================
window.addEventListener('scroll', () => {
  const nav = $('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Close search dropdown when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) {
    const dd = $('search-dropdown');
    if (dd) dd.classList.add('hidden');
  }
});

// ==================== PAGE ROUTING ====================
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  $('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'cart') renderCart();
  if (name === 'checkout') renderCheckoutSummary();
}
function scrollToCouples() {
  showPage('home');
  toggleCouplesPanel(false);
  setTimeout(() => {
    const el = $('couples-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 150);
}

// ==================== COUPLES FLOATING PANEL ====================
function toggleCouplesPanel(open) {
  const panel = $('couples-float-panel');
  const tab   = $('couples-float-tab');
  if (open) {
    panel.classList.add('open');
    tab.style.opacity = '0';
    tab.style.pointerEvents = 'none';
  } else {
    panel.classList.remove('open');
    tab.style.opacity = '1';
    tab.style.pointerEvents = 'auto';
  }
}

function renderFloatingCouplesPacks() {
  const container = $('cfp-packs');
  if (!container) return;
  container.innerHTML = COUPLES_PACKS.slice(0,3).map(pack => `
    <div class="cfp-pack-mini" onclick="addPackToCart('${pack.id}','${pack.name.replace(/'/g,"\\'")}',${pack.discountedPrice},'${pack.image}')">
      <div class="cfp-pack-mini-img"><img src="${pack.image}" alt="${pack.name}"/></div>
      <div class="cfp-pack-mini-info">
        <div class="cfp-pack-mini-name">${pack.name}</div>
        <div class="cfp-pack-mini-price">${fmt(pack.discountedPrice)}</div>
      </div>
      <button class="cfp-pack-mini-btn">Add</button>
    </div>
  `).join('');
}

// ==================== COUPLES PACKS (main section) ====================
function renderCouplesPacks() {
  const grid = $('couples-packs-grid');
  if (!grid) return;
  grid.innerHTML = COUPLES_PACKS.map((pack, idx) => `
    <div class="pack-card ${pack.featured ? 'featured' : ''}" style="animation-delay:${idx * .1}s">
      <div class="pack-badge ${pack.badgeClass}">${pack.badge}</div>
      <div class="pack-img">
        <img src="${pack.image}" alt="${pack.name}" loading="lazy"/>
        <div class="pack-img-overlay"></div>
      </div>
      <div class="pack-body">
        <div class="pack-name">${pack.name}</div>
        <div class="pack-for">💑 ${pack.for}</div>
        <ul class="pack-items">${pack.items.map(i=>`<li>${i}</li>`).join('')}</ul>
        <div class="pack-footer">
          <div class="pack-price-wrap">
            <span class="pack-original">${fmt(pack.originalPrice)}</span>
            <span class="pack-price">${fmt(pack.discountedPrice)}</span>
            <span class="pack-discount">${pack.discount}</span>
          </div>
          <button class="pack-add-btn" onclick="addPackToCart('${pack.id}','${pack.name.replace(/'/g,"\\'")}',${pack.discountedPrice},'${pack.image}')">Add Pack</button>
        </div>
      </div>
    </div>
  `).join('');
}

function addPackToCart(id, name, price, image) {
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ id, name, price, image, restaurant: 'Couples Pack 💑', qty: 1 });
  saveCart(); updateBadges();
  showToast(`${name} added! 💑`);
}

function applyCouplesCoupon() {
  if (couponApplied && couponCode === 'LOVE20') { showToast('LOVE20 is already applied!'); return; }
  couponApplied = true; couponCode = 'LOVE20'; couponDiscount = 20;
  showToast('LOVE20 applied — 20% off your order! 💑');
  toggleCouplesPanel(false);
  const row = $('coupon-row'); if (row) { row.classList.remove('hidden'); }
  const lbl = $('coupon-label'); if (lbl) lbl.textContent = 'LOVE20 — 20% Off';
}

// ==================== BIRTHDAY ====================
function checkBirthday(val) {
  if (!val) return;
  const selected = new Date(val);
  const today = new Date();
  if (selected.getDate() === today.getDate() && selected.getMonth() === today.getMonth()) {
    $('bday-applied').classList.remove('hidden');
    applyBirthdayOffer();
  } else {
    $('bday-applied').classList.add('hidden');
    if (birthdayApplied) {
      birthdayApplied = false;
      if (couponCode === 'BDAY15') { couponApplied = false; couponDiscount = 0; couponCode = ''; }
    }
  }
}

function applyBirthdayOffer() {
  closeModal('bday-modal');
  if (birthdayApplied) { showToast('Birthday discount already applied! 🎂'); return; }
  birthdayApplied = true;
  couponApplied = true; couponCode = 'BDAY15'; couponDiscount = 15;
  showToast('🎂 Happy Birthday! 15% off applied!');
  const row = $('coupon-row'); if (row) row.classList.remove('hidden');
  const lbl = $('coupon-label'); if (lbl) lbl.textContent = 'BDAY15 — 15% Birthday Off 🎂';
  const banner = $('bday-banner'); if (banner) banner.classList.add('hidden');
}

function closeModal(id) {
  const el = $(id); if (el) el.style.display = 'none';
}

// Show birthday modal if stored birthday matches today
function checkStoredBirthday() {
  const stored = localStorage.getItem('biterush_bday');
  if (!stored) return;
  const bday = new Date(stored);
  const today = new Date();
  if (bday.getDate() === today.getDate() && bday.getMonth() === today.getMonth()) {
    const banner = $('bday-banner'); if (banner) banner.classList.remove('hidden');
    setTimeout(() => { const m=$('bday-modal'); if(m) m.style.display='flex'; }, 1500);
  }
}

// ==================== PAYMENT HANDLERS ====================
function onPayChange(type) {
  const upiRow = $('upi-row');
  if (type === 'card') {
    setTimeout(() => { const m=$('card-modal'); if(m) m.style.display='flex'; }, 150);
    if (upiRow) upiRow.classList.add('hidden');
  } else if (type === 'wallet') {
    setTimeout(() => { const m=$('wallet-modal'); if(m) m.style.display='flex'; }, 150);
    if (upiRow) upiRow.classList.add('hidden');
  } else if (type === 'upi') {
    if (upiRow) upiRow.classList.remove('hidden');
  } else {
    if (upiRow) upiRow.classList.add('hidden');
  }
}

function formatCardNumber(input) {
  let v = input.value.replace(/\D/g,'').substring(0,16);
  input.value = v.match(/.{1,4}/g)?.join(' ') || v;
}
function formatExpiry(input) {
  let v = input.value.replace(/\D/g,'');
  if (v.length >= 2) v = v.substring(0,2) + ' / ' + v.substring(2,4);
  input.value = v;
}
function saveCardDetails() {
  const n = $('card-name')?.value.trim();
  const num = $('card-number')?.value.trim();
  const exp = $('card-expiry')?.value.trim();
  const cvv = $('card-cvv')?.value.trim();
  if (!n || num.replace(/\s/g,'').length < 16 || !exp || cvv.length < 3) {
    showToast('⚠️ Please fill all card details correctly.'); return;
  }
  cardSaved = true;
  closeModal('card-modal');
  showToast('Card saved successfully! 💳');
}

function selectWallet(name, balance) {
  selectedWallet = { name, balance };
  closeModal('wallet-modal');
  showToast(`${name} selected (Balance: ${fmt(balance)}) 📱`);
}

// ==================== SEARCH (Change 4: search food items too) ====================
function handleSearch() {
  searchQuery = $('search-input').value.trim().toLowerCase();
  const dd = $('search-dropdown');
  if (!searchQuery) { dd.classList.add('hidden'); applyFilters(); return; }

  // Search both restaurants AND individual food items
  const foodResults = [];
  const restResults = [];

  RESTAURANTS.forEach(r => {
    if (r.name.toLowerCase().includes(searchQuery) || r.cuisine.toLowerCase().includes(searchQuery)) {
      restResults.push({ type: 'restaurant', data: r });
    }
    r.menu.forEach(item => {
      if (item.name.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery)) {
        foodResults.push({ type: 'food', item, restaurant: r });
      }
    });
  });

  // Render dropdown
  let html = '';
  if (restResults.length) {
    html += `<div class="search-section-title">Restaurants</div>`;
    html += restResults.slice(0,3).map(r => `
      <div class="search-item" onclick="openMenu(${r.data.id});$('search-dropdown').classList.add('hidden');">
        <div class="search-item-img"><img src="${r.data.image}" alt="${r.data.name}"/></div>
        <div class="search-item-info">
          <div class="search-item-name">${r.data.name}</div>
          <div class="search-item-sub">${r.data.cuisine}</div>
        </div>
        <span style="font-size:.74rem;color:var(--text-muted)">⭐ ${r.data.rating}</span>
      </div>
    `).join('');
  }
  if (foodResults.length) {
    html += `<div class="search-section-title">Dishes</div>`;
    html += foodResults.slice(0,5).map(f => `
      <div class="search-item">
        <div class="search-item-img"><img src="${f.item.image}" alt="${f.item.name}"/></div>
        <div class="search-item-info">
          <div class="search-item-name">${f.item.name}</div>
          <div class="search-item-sub">${f.restaurant.name} · ${f.item.desc.substring(0,40)}…</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px">
          <span class="search-item-price">${fmt(f.item.price)}</span>
          <button class="search-add-btn" onclick="addToCart(${f.item.id},'${f.item.name.replace(/'/g,"\\'")}',${f.item.price},'${f.item.image}','${f.restaurant.name.replace(/'/g,"\\'")}');event.stopPropagation()">+ Add</button>
        </div>
      </div>
    `).join('');
  }
  if (!restResults.length && !foodResults.length) {
    html = `<div class="search-no-result">No results found for "${searchQuery}"</div>`;
  }

  dd.innerHTML = html; dd.classList.remove('hidden');
  applyFilters();
}

// ==================== RESTAURANTS ====================
function renderRestaurants(list) {
  const grid = $('restaurant-grid');
  const none = $('no-results');
  if (!list.length) { grid.innerHTML = ''; none.classList.remove('hidden'); return; }
  none.classList.add('hidden');
  grid.innerHTML = list.map(() => `
    <div class="skel-card"><div class="skel-img"></div><div class="skel-bd"><div class="skel-line"></div><div class="skel-line s60"></div><div class="skel-line s40"></div></div></div>
  `).join('');
  setTimeout(() => {
    grid.innerHTML = list.map((r, idx) => `
      <div class="restaurant-card" style="animation-delay:${idx * .07}s" onclick="openMenu(${r.id})">
        <div class="r-img-wrap">
          <img src="${r.image}" alt="${r.name}" loading="lazy"/>
          <div class="r-badge">${r.badge}</div>
          <div class="r-time"><i class="fa-regular fa-clock"></i> ${r.time}</div>
        </div>
        <div class="r-body">
          <div class="r-top">
            <div class="r-name">${r.name}</div>
            <div class="r-rating"><i class="fa-solid fa-star"></i> ${r.rating}</div>
          </div>
          <div class="r-cuisine">${r.cuisine}</div>
          ${r.couples ? '<div class="couples-tag-sm"><i class="fa-solid fa-heart"></i> Couples Offer</div>' : ''}
          <button class="view-menu-btn">View Menu <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    `).join('');
  }, 500);
}

function filterByCategory(cat, el) {
  activeCategory = cat;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
  if (cat !== 'All') $('restaurants').scrollIntoView({ behavior:'smooth' });
}

function filterRestaurants() { handleSearch(); }

function applyFilters() {
  let list = RESTAURANTS.filter(r => {
    const q = searchQuery;
    const matchSearch = !q || r.name.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q)
      || r.menu.some(m => m.name.toLowerCase().includes(q));
    const matchCat = activeCategory === 'All' || r.category.includes(activeCategory);
    return matchSearch && matchCat;
  });
  renderRestaurants(list);
}

// ==================== MENU ====================
function openMenu(restaurantId) {
  currentRestaurant = RESTAURANTS.find(r => r.id === restaurantId);
  if (!currentRestaurant) return;
  $('menu-restaurant-info').innerHTML = `
    <h2>${currentRestaurant.name}</h2>
    <p>${currentRestaurant.cuisine} · ⭐ ${currentRestaurant.rating} · 🕐 ${currentRestaurant.time}</p>
  `;
  $('menu-grid').innerHTML = currentRestaurant.menu.map((item, idx) => `
    <div class="menu-card" style="animation-delay:${idx * .08}s">
      <div class="menu-card-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy"/>
        <div class="veg-dot ${item.veg ? 'veg' : 'nonveg'}">▲</div>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <div class="menu-price">${fmt(item.price)}</div>
          <button class="add-btn" id="addbtn-${item.id}"
            onclick="addToCart(${item.id},'${item.name.replace(/'/g,"\\'")}',${item.price},'${item.image}','${currentRestaurant.name.replace(/'/g,"\\'")}')">
            + Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
  cart.forEach(ci => {
    const btn = $('addbtn-' + ci.id);
    if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); }
  });
  showPage('menu');
}

// ==================== CART ====================
function addToCart(id, name, price, image, restaurant) {
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ id, name, price, image, restaurant, qty: 1 });
  saveCart(); updateBadges();
  showToast(`${name} added!`);
  const btn = $('addbtn-' + id);
  if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); }
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id == id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id != id);
  saveCart(); updateBadges(); renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id != id);
  saveCart(); updateBadges(); renderCart();
  showToast('Item removed.');
}

function getDiscount(subtotal) {
  if (!couponApplied) return 0;
  return subtotal * (couponDiscount / 100);
}

function renderCart() {
  const wrap = $('cart-items-wrap');
  const summary = $('cart-summary');
  const empty = $('cart-empty');
  const label = $('cart-count-label');
  if (!cart.length) {
    wrap.innerHTML = ''; summary.innerHTML = '';
    empty.classList.remove('hidden'); label.textContent = ''; return;
  }
  empty.classList.add('hidden');
  label.textContent = `(${getTotalItems()} items)`;
  wrap.innerHTML = cart.map((item, idx) => `
    <div class="cart-item" style="animation-delay:${idx * .06}s">
      <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;"/></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-rest">${item.restaurant}</div>
        <div class="cart-item-price">${fmt(item.price)}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-del" onclick="removeFromCart('${item.id}')"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  `).join('');
  const sub = getTotalPrice();
  const del = sub > 0 ? 49 : 0;
  const tax = Math.round(sub * 0.05);
  const disc = Math.round(getDiscount(sub));
  const total = sub + del + tax - disc;
  summary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="sum-row"><span>Subtotal</span><span>${fmt(sub)}</span></div>
    <div class="sum-row"><span>Delivery</span><span class="burg">${fmt(del)}</span></div>
    <div class="sum-row"><span>GST (5%)</span><span>${fmt(tax)}</span></div>
    ${disc > 0 ? `<div class="sum-row"><span>${couponCode} Discount</span><span style="color:#16a34a">−${fmt(disc)}</span></div>` : ''}
    <div class="sum-row total"><span>Total</span><span>${fmt(total)}</span></div>
    ${couponApplied ? `<div class="coupon-pill"><i class="fa-solid fa-tag"></i> ${couponCode} applied!</div>` : ''}
    <button class="btn-gold full" onclick="showPage('checkout')">Checkout <i class="fa-solid fa-arrow-right"></i></button>
  `;
}

// ==================== CHECKOUT ====================
function renderCheckoutSummary() {
  const el = $('checkout-summary'); if (!el) return;
  const sub = getTotalPrice();
  const del = 49; const tax = Math.round(sub * 0.05);
  const disc = Math.round(getDiscount(sub));
  const total = sub + del + tax - disc;
  el.innerHTML = `
    <h3>Your Order</h3>
    ${cart.map(i => `<div class="co-item-row"><span>${i.name} ×${i.qty}</span><span>${fmt(i.price * i.qty)}</span></div>`).join('')}
    <div class="sum-row" style="margin-top:12px"><span>Subtotal</span><span>${fmt(sub)}</span></div>
    <div class="sum-row"><span>Delivery</span><span>${fmt(del)}</span></div>
    <div class="sum-row"><span>GST (5%)</span><span>${fmt(tax)}</span></div>
    ${disc > 0 ? `<div class="sum-row"><span>${couponCode} Discount</span><span style="color:#16a34a">−${fmt(disc)}</span></div>` : ''}
    <div class="sum-row total"><span>Total</span><span>${fmt(total)}</span></div>
  `;
}

function placeOrder() {
  const name    = $('co-name')?.value.trim();
  const phone   = $('co-phone')?.value.trim();
  const address = $('co-address')?.value.trim();
  const payMode = document.querySelector('input[name="pay"]:checked')?.value;
  if (!name || !phone || !address) { showToast('⚠️ Please fill in all delivery details.'); return; }
  if (payMode === 'card' && !cardSaved) { showToast('⚠️ Please enter your card details.'); $('card-modal').style.display='flex'; return; }
  if (payMode === 'wallet' && !selectedWallet) { showToast('⚠️ Please select a wallet.'); $('wallet-modal').style.display='flex'; return; }

  const orderId = generateOrderId();
  $('order-id-display').textContent = orderId;

  // ETA: 35–45 minutes from now
  const etaMin = new Date(); etaMin.setMinutes(etaMin.getMinutes() + 35);
  const etaMax = new Date(); etaMax.setMinutes(etaMax.getMinutes() + 45);
  const fmt12 = d => d.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
  $('eta-time').textContent = '35–45 minutes';
  $('track-eta-clock').textContent = fmt12(etaMin) + ' – ' + fmt12(etaMax);

  cart = []; saveCart(); updateBadges();
  showPage('confirm');
  launchConfetti();
  startOrderTracking();
}

// ==================== ORDER TRACKING (Change 8) ====================
const TRACKING_STAGES = [
  { step:'ts1', line:'tl1', msg:'✅ Order confirmed! Restaurant is being notified…', pct:8, delay:0 },
  { step:'ts2', line:'tl2', msg:'👨‍🍳 Preparing your food with care…', pct:35, delay:12000 },
  { step:'ts3', line:'tl3', msg:'🛵 Out for delivery! Rider is on the way…', pct:70, delay:28000 },
  { step:'ts4', line:null,  msg:'🏠 Delivered! Enjoy your meal 😊', pct:100, delay:45000 },
];

function startOrderTracking() {
  // Reset all steps
  for (let i=1; i<=4; i++) {
    const s = $('ts'+i); if(s) s.classList.remove('active');
    const l = $('tl'+i); if(l) l.classList.remove('filled');
  }
  const fill = $('track-timer-fill');
  const msg = $('track-status-msg');

  // Activate first stage immediately
  $('ts1').classList.add('active');
  if (fill) fill.style.width = '8%';
  if (msg) msg.textContent = TRACKING_STAGES[0].msg;

  // Schedule subsequent stages
  TRACKING_STAGES.slice(1).forEach(stage => {
    setTimeout(() => {
      const el = $(stage.step); if(el) el.classList.add('active');
      if (stage.line) { const ln = $(stage.line); if(ln) ln.classList.add('filled'); }
      if (fill) fill.style.width = stage.pct + '%';
      if (msg) msg.textContent = stage.msg;
    }, stage.delay);
  });
}

// ==================== CONFETTI ====================
function launchConfetti() {
  const wrap = $('confetti-wrap'); if (!wrap) return;
  wrap.innerHTML = '';
  const colors = ['#C9962A','#E8B84B','#5C1A2A','#E8647A','#F8F4EE','#A63050'];
  for (let i = 0; i < 90; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = Math.random() * 10 + 6;
    el.style.cssText = `
      left:${Math.random()*100}vw;
      width:${size}px; height:${size*(Math.random()+.5)}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${Math.random()*2+1.5}s;
      animation-delay:${Math.random()*.8}s;
      transform:rotate(${Math.random()*360}deg);
      border-radius:${Math.random()>.5?'50%':'2px'};
    `;
    wrap.appendChild(el);
  }
  setTimeout(() => { wrap.innerHTML = ''; }, 4500);
}

function resetAndGoHome() {
  ['co-name','co-phone','co-address','co-note'].forEach(id => { const e=$(id); if(e) e.value=''; });
  for(let i=1;i<=4;i++){const s=$('ts'+i);if(s)s.classList.remove('active');const l=$('tl'+i);if(l)l.classList.remove('filled');}
  const fill=$('track-timer-fill'); if(fill) fill.style.width='0%';
  $('confetti-wrap').innerHTML='';
  cardSaved = false; selectedWallet = null;
  showPage('home');
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  renderRestaurants(RESTAURANTS);
  renderCouplesPacks();
  renderFloatingCouplesPacks();
  checkStoredBirthday();

  // Show couples panel automatically after 2s on first visit
  const seen = localStorage.getItem('br_couples_seen');
  if (!seen) {
    setTimeout(() => toggleCouplesPanel(true), 2000);
    localStorage.setItem('br_couples_seen', '1');
  }
});