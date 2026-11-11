import React, { useState } from 'react';
import { Gift, ExternalLink, Eye, EyeOff, Copy, Check, Heart, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';

const INITIAL_CATEGORIES = [
  { id: 'cat-1', name: 'Most Important' },
  { id: 'cat-2', name: 'Nice to Have' },
];

const INITIAL_ITEMS = [
  {
    id: 'item-1',
    categoryId: 'cat-1',
    name: 'Lenovo Legion 7i 16" 240Hz QHD Display',
    description: 'Intel i7-14700HX, 32GB RAM, NVIDIA RTX 4070. Ideal for high-performance architectural 3D rendering and design workflows.',
    price: 3200000,
    imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.lenovo.com',
  },
  {
    id: 'item-2',
    categoryId: 'cat-1',
    name: 'Graduate School Application Fees',
    description: 'Funding assistance for 4 graduate school application fees ($75 each).',
    price: 480000,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'item-3',
    categoryId: 'cat-1',
    name: 'Special Church Contribution Goal',
    description: 'A special contribution gift for my church that has been on my mind. Target goal to raise.',
    price: 500000,
    imageUrl: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'item-4',
    categoryId: 'cat-2',
    name: 'Classic Brown Leather Wristwatch',
    description: 'A timeless timepiece featuring a minimalist dial and genuine brown leather strap.',
    price: 150000,
    imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'item-5',
    categoryId: 'cat-2',
    name: 'Handcrafted Brown Leather Dress Shoes',
    description: 'Elegant, high-quality brown leather shoes tailored for formal and professional wear.',
    price: 85000,
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'item-6',
    categoryId: 'cat-2',
    name: 'Open Cash Gift Contribution',
    description: 'Any voluntary financial gift toward my birthday celebrations.',
    price: null,
    imageUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800',
  },
];

export default function App() {
  const [categories] = useState(INITIAL_CATEGORIES);
  const [items] = useState(INITIAL_ITEMS);
  const [revealedPrices, setRevealedPrices] = useState({});
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    bankName: 'Guaranty Trust Bank (GTBank)',
    accountName: 'Ebenezer Mobolaji Banjo',
    accountNumber: '0442619704',
  };

  const togglePrice = (itemId) => {
    setRevealedPrices((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formatNaira = (amount) => {
    if (amount === null || amount === undefined) return null;
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800">
      {/* Decorative Gold Header Bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]" />

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 mb-6 bg-[#1B3B2B]/5 rounded-full border border-[#D4AF37]/30 text-[#1B3B2B]">
          <Sparkles className="w-5 h-5 text-[#D4AF37] mr-2" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#1B3B2B]">Curated Birthday Wishlist</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-custom text-[#1B3B2B] tracking-tight font-semibold mb-4">
          The Birthday List
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
          Welcome! As my birthday approaches, I’ve put together a thoughtfully curated selection of items I would love to receive.
        </p>

        <div className="w-24 h-0.5 bg-[#D4AF37]/40 mx-auto mt-8" />
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
        {categories.map((category) => {
          const categoryItems = items.filter((item) => item.categoryId === category.id);
          if (categoryItems.length === 0) return null;

          return (
            <section key={category.id} className="space-y-6">
              <div className="flex items-center space-x-4 border-b border-[#D4AF37]/20 pb-3">
                <Gift className="w-6 h-6 text-[#1B3B2B]" />
                <h2 className="text-2xl md:text-3xl font-serif-custom text-[#1B3B2B] font-semibold">
                  {category.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-sm border border-[#EFEAD8] overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
                  >
                    {item.imageUrl && (
                      <div className="h-52 overflow-hidden bg-slate-100 relative">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif-custom text-[#1B3B2B] font-semibold leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center space-x-2">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs font-medium text-[#1B3B2B] hover:text-[#D4AF37] transition-colors"
                            >
                              <span>View Product</span>
                              <ExternalLink className="w-3.5 h-3.5 ml-1" />
                            </a>
                          ) : (
                            <span className="text-xs text-slate-400">Wishlist Item</span>
                          )}
                        </div>

                        {/* Independent Price Visibility Control */}
                        {item.price !== null && (
                          <div className="flex items-center space-x-2">
                            {revealedPrices[item.id] ? (
                              <div className="flex items-center space-x-2 bg-[#1B3B2B]/5 px-3 py-1 rounded-full border border-[#1B3B2B]/10 animate-fade-in">
                                <span className="text-sm font-semibold text-[#1B3B2B]">
                                  {formatNaira(item.price)}
                                </span>
                                <button
                                  onClick={() => togglePrice(item.id)}
                                  className="text-xs text-slate-500 hover:text-[#1B3B2B] flex items-center ml-1"
                                  title="Hide Price"
                                >
                                  <EyeOff className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => togglePrice(item.id)}
                                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#1B3B2B] text-white hover:bg-[#0F291E] transition-colors shadow-sm"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Show Price</span>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Bank Contribution Section */}
        <section className="bg-gradient-to-br from-[#1B3B2B] to-[#0F291E] text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-2">
              <CreditCard className="w-6 h-6 text-[#D4AF37]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif-custom text-white font-semibold">
              A Little Contribution
            </h2>

            <p className="text-cream-100 text-sm md:text-base leading-relaxed font-light">
              If you would prefer to make a financial contribution towards my birthday celebration or towards any of the wishlist items, you are welcome to use the bank details below. Thank you so much for your generosity!
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/15 max-w-md mx-auto space-y-4 text-left">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Bank Name</span>
                <p className="text-lg font-medium text-white">{bankDetails.bankName}</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Account Name</span>
                <p className="text-lg font-medium text-white">{bankDetails.accountName}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">Account Number</span>
                  <p className="text-2xl font-mono font-bold text-white tracking-wider">{bankDetails.accountNumber}</p>
                </div>

                <button
                  onClick={copyAccountNumber}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#AA820A] text-[#0F291E] font-semibold text-xs transition-colors shadow-md"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#D4AF37]/20 py-8 text-center text-xs text-slate-500 bg-white">
        <div className="flex items-center justify-center space-x-1 mb-2">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
          <span>for Ebenezer's Birthday</span>
        </div>
        <p>© {new Date().getFullYear()} The Birthday List. All rights reserved.</p>
      </footer>
    </div>
  );
}
