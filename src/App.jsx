import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ShoppingCart,
  Search,
  Star,
  Heart,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  BadgePercent,
  Filter,
  ArrowRight,
  Sparkles,
  Check,
  X,
  Flame,
  Headphones,
  Shirt,
  Home,
  Package,
  Eye,
  SlidersHorizontal,
  CreditCard,
  RotateCcw,
  Gem,
  ChevronLeft,
  LayoutGrid,
  Store,
  Menu,
  Percent,
  Zap,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Sneaker Nova X",
    category: "کفش",
    price: 2890000,
    originalPrice: 3490000,
    rating: 4.8,
    badge: "پرفروش",
    stock: 12,
    description: "کتانی سبک و مدرن برای استفاده روزانه و استایل خیابانی.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    colors: ["مشکی", "قرمز", "سفید"],
  },
  {
    id: 2,
    title: "Classic Denim Jacket",
    category: "پوشاک",
    price: 2490000,
    originalPrice: 2990000,
    rating: 4.6,
    badge: "جدید",
    stock: 8,
    description: "کت جین مینیمال و خوش‌دوخت برای استایل روزمره و نیمه‌رسمی.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    colors: ["آبی", "سرمه‌ای"],
  },
  {
    id: 3,
    title: "Urban Leather Bag",
    category: "اکسسوری",
    price: 3190000,
    originalPrice: 3890000,
    rating: 4.9,
    badge: "ویژه",
    stock: 5,
    description: "کیف چرمی با طراحی تمیز و فضای کافی برای کار و دانشگاه.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
    colors: ["قهوه‌ای", "مشکی"],
  },
  {
    id: 4,
    title: "Aura Smart Watch",
    category: "دیجیتال",
    price: 4590000,
    originalPrice: 5290000,
    rating: 4.7,
    badge: "پیشنهادی",
    stock: 9,
    description: "ساعت هوشمند با نمایشگر روشن، طراحی شیک و امکانات کاربردی.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    colors: ["نقره‌ای", "مشکی"],
  },
  {
    id: 5,
    title: "Minimal Desk Lamp",
    category: "خانه",
    price: 1290000,
    originalPrice: 1590000,
    rating: 4.5,
    badge: "اقتصادی",
    stock: 14,
    description: "چراغ مطالعه مدرن با نور ملایم و ظاهر مینیمال برای اتاق کار.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    colors: ["سفید", "مشکی"],
  },
  {
    id: 6,
    title: "Signature Headphones",
    category: "دیجیتال",
    price: 3990000,
    originalPrice: 4690000,
    rating: 4.8,
    badge: "ترند",
    stock: 7,
    description: "هدفون با کیفیت صدای عالی و طراحی راحت برای استفاده طولانی.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    colors: ["مشکی", "خاکستری"],
  },
];

const stories = [
  {
    id: 1,
    title: "ترند امروز",
    subtitle: "کالکشن جدید",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "تخفیف ویژه",
    subtitle: "تا 40٪",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "دیجیتال",
    subtitle: "گجت‌های داغ",
    image:
      "https://images.unsplash.com/photo-1511556670410-f9bca7b1b0f5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "لایف‌استایل",
    subtitle: "انتخاب خاص",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "خانه",
    subtitle: "پیشنهاد مینیمال",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=500&q=80",
  },
];

const categories = [
  { label: "همه", icon: Package },
  { label: "کفش", icon: Flame },
  { label: "پوشاک", icon: Shirt },
  { label: "اکسسوری", icon: Sparkles },
  { label: "دیجیتال", icon: Headphones },
  { label: "خانه", icon: Home },
];

const featureCards = [
  {
    icon: Truck,
    title: "ارسال سریع",
    text: "تحویل سریع و مطمئن برای تجربه خرید حرفه‌ای‌تر.",
  },
  {
    icon: ShieldCheck,
    title: "ضمانت اصالت",
    text: "تمام محصولات با تضمین اصالت و کیفیت ارائه می‌شوند.",
  },
  {
    icon: RotateCcw,
    title: "بازگشت آسان",
    text: "در صورت نیاز، فرایند بازگشت کالا ساده و بی‌دردسر است.",
  },
];

const formatPrice = (value) =>
  new Intl.NumberFormat("fa-IR").format(value) + " تومان";

const getDiscountPercent = (price, originalPrice) =>
  Math.round(((originalPrice - price) / originalPrice) * 100);

function GlassChip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur-md">
      {children}
    </span>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[1.75rem] border border-white/50 bg-white/80 p-5 shadow-lg shadow-slate-200/50 backdrop-blur">
      <div className="text-2xl font-black text-slate-950">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

function StoryStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {stories.map((story) => (
          <div key={story.id} className="min-w-[92px] text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 p-[3px] shadow-lg shadow-rose-200">
              <div className="h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
                <img src={story.image} alt={story.title} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="mt-3 text-xs font-black text-slate-900">{story.title}</div>
            <div className="mt-1 text-[11px] text-slate-500">{story.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PromoBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 p-8 text-white shadow-2xl shadow-slate-900/15">
          <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="relative max-w-xl">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">بنر ویژه</span>
            <h3 className="mt-4 text-3xl font-black leading-tight">استایل جدیدت را همین امروز بساز</h3>
            <p className="mt-3 text-sm leading-8 text-white/75">
              کالکشن جدید با تخفیف لانچ، ارسال سریع و طراحی خاص برای فروشگاه مدرن تو.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100">
              مشاهده پیشنهاد ویژه
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-100 to-rose-100 p-6 shadow-sm">
            <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-black text-slate-900">تا 30٪ تخفیف</div>
            <h4 className="mt-4 text-2xl font-black text-slate-950">کالکشن پوشاک</h4>
            <p className="mt-2 text-sm leading-7 text-slate-600">برای استایل روزمره و مینیمال، انتخاب‌های خاص منتظرته.</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-100 to-cyan-100 p-6 shadow-sm">
            <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-black text-slate-900">دیجیتال داغ</div>
            <h4 className="mt-4 text-2xl font-black text-slate-950">گجت‌های پریمیوم</h4>
            <p className="mt-2 text-sm leading-7 text-slate-600">محصولات دیجیتال با ظاهر شیک و تجربه کاربری حرفه‌ای.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd, isFavorite, onToggleFavorite, onQuickView }) {
  const discount = getDiscountPercent(product.price, product.originalPrice);
  const lowStock = product.stock <= 8;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200"
    >
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-slate-950/20">
          {product.badge}
        </span>
        <button
          onClick={() => onToggleFavorite(product.id)}
          className={`rounded-full border p-2.5 backdrop-blur transition ${
            isFavorite
              ? "border-rose-500 bg-rose-500 text-white"
              : "border-white/70 bg-white/85 text-slate-700"
          }`}
        >
          <Heart className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="relative h-72 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">
              {discount}٪ تخفیف
            </span>
            {lowStock && (
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
                موجودی محدود
              </span>
            )}
          </div>
          <button
            onClick={() => onQuickView(product)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-slate-950"
          >
            <Eye className="h-3.5 w-3.5" />
            پیش‌نمایش
          </button>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
            {product.category}
          </span>
          <div className="flex items-center gap-1 font-semibold">
            <Star className="h-4 w-4 fill-current text-amber-400" />
            <span>{product.rating}</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black text-slate-950">{product.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-600">{product.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <span
              key={color}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {color}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
          <span>ارسال 24 ساعته</span>
          <span>ضمانت اصالت</span>
          <span>{product.stock} عدد</span>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-xl font-black text-slate-950">{formatPrice(product.price)}</div>
            <div className="mt-1 text-sm text-slate-400 line-through">
              {formatPrice(product.originalPrice)}
            </div>
          </div>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            افزودن
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function QuickViewModal({ product, open, onClose, onAdd }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            className="fixed inset-x-4 top-1/2 z-50 mx-auto grid max-w-4xl -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl lg:grid-cols-2"
          >
            <div className="relative min-h-[320px] bg-slate-100">
              <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
              <div className="absolute right-4 top-4 rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
                {product.badge}
              </div>
            </div>
            <div className="p-6 sm:p-8" dir="rtl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">{product.category}</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">{product.title}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600">
                <Star className="h-4 w-4 fill-current text-amber-400" />
                {product.rating} امتیاز
                <span className="text-slate-300">•</span>
                {product.stock} عدد موجود
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-600">{product.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700"
                  >
                    {color}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-4">
                <div className="text-2xl font-black text-slate-950">{formatPrice(product.price)}</div>
                <div className="mt-1 text-sm text-slate-400 line-through">
                  {formatPrice(product.originalPrice)}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  [Truck, "ارسال سریع"],
                  [ShieldCheck, "ضمانت اصالت"],
                  [RotateCcw, "بازگشت آسان"],
                ].map(([Icon, label]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 p-3 text-center">
                    <Icon className="mx-auto h-4 w-4 text-slate-700" />
                    <div className="mt-2 text-xs font-bold text-slate-600">{label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  onAdd(product);
                  onClose();
                }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white transition hover:bg-slate-800"
              >
                <ShoppingCart className="h-4 w-4" />
                افزودن به سبد خرید
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CartDrawer({
  open,
  cart,
  onClose,
  onIncrement,
  onDecrement,
  finalTotal,
  promoApplied,
  promoDiscount,
}) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const shipping = subtotal > 0 ? 99000 : 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed left-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-r border-white/10 bg-white"
            dir="rtl"
          >
            <div className="border-b border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-slate-950">سبد خرید</h2>
                  <p className="mt-1 text-sm text-slate-500">{totalItems} آیتم انتخاب شده</p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                  <ShoppingCart className="mx-auto h-10 w-10 text-slate-400" />
                  <p className="mt-4 text-base font-bold text-slate-800">سبدت هنوز خالیه</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    چند محصول انتخاب کن تا سفارش آماده بشه.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="truncate font-bold text-slate-900">{item.title}</h3>
                            <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                          </div>
                          <span className="text-sm font-bold text-slate-950">
                            {formatPrice(item.price)}
                          </span>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2 rounded-full bg-slate-100 p-1">
                            <button
                              onClick={() => onDecrement(item.id)}
                              className="rounded-full bg-white p-2 shadow-sm transition hover:bg-slate-50"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-8 text-center text-sm font-black">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onIncrement(item.id)}
                              className="rounded-full bg-white p-2 shadow-sm transition hover:bg-slate-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="text-sm text-slate-600">
                            جمع: {formatPrice(item.quantity * item.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="border-t border-slate-200 p-5">
              <div className="space-y-3 rounded-[1.75rem] bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>جمع کالاها</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>ارسال</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                {promoApplied && (
                  <div className="flex items-center justify-between text-sm text-emerald-700">
                    <span>تخفیف</span>
                    <span>- {formatPrice(promoDiscount)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-black text-slate-950">
                  <span>مبلغ نهایی</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
              </div>

              <button className="mt-4 w-full rounded-2xl bg-slate-950 px-4 py-4 text-sm font-black text-white transition hover:bg-slate-800">
                ادامه فرایند خرید
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Header({ currentPage, setCurrentPage, cartCount, favoritesCount, setCartOpen }) {
  const navButton = (label, page, icon) => {
    const Icon = icon;
    const active = currentPage === page;
    return (
      <button
        onClick={() => setCurrentPage(page)}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-black transition ${
          active
            ? "bg-slate-950 text-white shadow-lg shadow-slate-900/15"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
        }`}
      >
        <Icon className="h-4 w-4" />
        {label}
      </button>
    );
  };

  return (
    <>
      <div className="border-b border-white/10 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-center text-xs font-semibold sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <Truck className="h-3.5 w-3.5" /> ارسال رایگان برای سفارش‌های ویژه
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5" /> ضمانت اصالت کالا
          </span>
          <span className="inline-flex items-center gap-2">
            <CreditCard className="h-3.5 w-3.5" /> پرداخت امن
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/20">
              <Store className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-slate-950">ShopFlow</div>
              <div className="text-xs text-slate-500">نسخه پریمیوم فروشگاه</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm lg:flex">
            {navButton("خانه", "home", LayoutGrid)}
            {navButton("محصولات", "products", Package)}
            {navButton("پیشنهادها", "offers", Percent)}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm md:block">
              {favoritesCount} علاقه‌مندی
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="relative inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-xl shadow-slate-900/20"
            >
              <ShoppingCart className="h-4 w-4" />
              سبد خرید
              {cartCount > 0 && (
                <span className="absolute -left-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function HomePage({
  productsPreview,
  bestDeal,
  featureProducts,
  setCurrentPage,
  onAdd,
  favorites,
  onToggleFavorite,
  onQuickView,
}) {
  return (
    <>
      <StoryStrip />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.12fr_.88fr] lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-4 flex flex-wrap gap-3">
            <GlassChip>
              <Sparkles className="h-3.5 w-3.5" />
              طراحی مدرن و لوکس
            </GlassChip>
            <GlassChip>
              <Truck className="h-3.5 w-3.5" />
              ارسال سریع به سراسر کشور
            </GlassChip>
            <GlassChip>
              <Gem className="h-3.5 w-3.5" />
              تجربه خرید پریمیوم
            </GlassChip>
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            هدر خفن، استوری، بنر و تجربه خرید حرفه‌ای در یک فروشگاه مدرن
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            صفحه اصلی حالا سبک‌تر و حرفه‌ای‌تر شده: چند محصول نمونه، بنرهای تبلیغاتی، بخش استوری و CTA واضح برای رفتن به صفحه جداگانه محصولات.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setCurrentPage("products")}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:bg-slate-800"
            >
              مشاهده بیشتر محصولات
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
              مشاهده پیشنهاد ویژه
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <StatCard value="+12K" label="مشتری راضی" />
            <StatCard value="98%" label="رضایت خرید" />
            <StatCard value="24h" label="تحویل سریع" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 p-6 text-white shadow-2xl shadow-slate-900/30"
        >
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full bg-cyan-300/15 blur-3xl" />

          <div className="relative flex h-full flex-col gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/75">پیشنهاد ویژه هفته</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Best Seller</span>
              </div>
              <h3 className="mt-4 text-2xl font-black">{bestDeal.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/75">
                کارت هیرو ارتقایافته با افکت شیشه‌ای، عمق بصری بهتر و CTA مناسب برای لانچ حرفه‌ای فروشگاه.
              </p>
              <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-3">
                <img
                  src={bestDeal.image}
                  alt={bestDeal.title}
                  className="h-72 w-full rounded-[1.3rem] object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {featureCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                >
                  <item.icon className="h-5 w-5" />
                  <div className="mt-3 text-sm font-bold">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <PromoBanners />

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-slate-500">نمونه محصولات</span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">چند انتخاب محبوب</h2>
          </div>
          <button
            onClick={() => setCurrentPage("products")}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            مشاهده بیشتر
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {productsPreview.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
              onQuickView={onQuickView}
            />
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {featureProducts.map((item, index) => (
            <div
              key={item.id}
              className="rounded-[2rem] border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-500">محصول ویژه {index + 1}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  {item.category}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-20 w-20 rounded-2xl object-cover" />
                <div className="min-w-0">
                  <h3 className="truncate font-black text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{formatPrice(item.price)}</p>
                </div>
              </div>
              <button
                onClick={() => onQuickView(item)}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-950"
              >
                مشاهده سریع
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductsPage({
  filteredProducts,
  categories,
  query,
  setQuery,
  sortBy,
  setSortBy,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  showFavoritesOnly,
  setShowFavoritesOnly,
  resetFilters,
  onAdd,
  favorites,
  onToggleFavorite,
  onQuickView,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 p-8 text-white shadow-2xl shadow-slate-900/20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">صفحه محصولات</span>
            <h1 className="mt-4 text-4xl font-black tracking-tight">همه محصولات فروشگاه</h1>
            <p className="mt-3 max-w-2xl text-sm leading-8 text-white/75">
              اینجا همه محصولات را با فیلتر، جستجو، مرتب‌سازی و پیش‌نمایش سریع می‌بینی.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/10 px-5 py-4 text-sm font-bold backdrop-blur-md">
            {filteredProducts.length} محصول نمایش داده می‌شود
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-4 rounded-[2rem] border border-black/5 bg-white p-5 shadow-sm lg:grid-cols-[1fr_220px]">
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-black text-slate-950">
            <SlidersHorizontal className="h-4 w-4" />
            فیلترهای هوشمند
          </div>

          <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:flex">
            <label className="flex min-w-[240px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی محصول..."
                className="w-full border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </label>

            <label className="flex min-w-[200px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <Filter className="h-4 w-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              >
                <option value="featured">مرتب‌سازی پیش‌فرض</option>
                <option value="price-low">ارزان‌ترین</option>
                <option value="price-high">گران‌ترین</option>
                <option value="rating">بیشترین امتیاز</option>
                <option value="discount">بیشترین تخفیف</option>
              </select>
            </label>
          </div>

          <div className="mb-5 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => setSelectedCategory(category.label)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                  selectedCategory === category.label
                    ? "bg-slate-950 text-white shadow-xl shadow-slate-900/20"
                    : "bg-white text-slate-700 ring-1 ring-black/5 hover:bg-slate-100"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-600">
              <span>سقف قیمت</span>
              <span>{formatPrice(maxPrice)}</span>
            </div>
            <input
              type="range"
              min="1000000"
              max="5500000"
              step="100000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:border-r lg:border-slate-200 lg:pr-5">
          <button
            onClick={() => setShowFavoritesOnly((prev) => !prev)}
            className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
              showFavoritesOnly
                ? "bg-rose-50 text-rose-600 ring-1 ring-rose-200"
                : "bg-slate-50 text-slate-600"
            }`}
          >
            فقط علاقه‌مندی‌ها
          </button>
          <button
            onClick={resetFilters}
            className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            ریست فیلترها
          </button>
        </div>
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
            onQuickView={onQuickView}
          />
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="mt-6 rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
          محصولی با این فیلتر پیدا نشد.
        </div>
      )}
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative mt-14 overflow-hidden border-t border-white/20 bg-slate-950 text-white">
      <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
              <Store className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xl font-black">ShopFlow</div>
              <div className="text-xs text-white/60">فروشگاه آنلاین مدرن</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-8 text-white/70">
            از انتخاب محصول تا پرداخت، همه چیز برای یک تجربه خرید سریع، امن و جذاب طراحی شده.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" className="rounded-xl border border-white/15 bg-white/5 p-2.5 transition hover:bg-white/10">
              <Heart className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-xl border border-white/15 bg-white/5 p-2.5 transition hover:bg-white/10">
              <Sparkles className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black text-white/90">دسترسی سریع</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {["خانه", "محصولات", "پیشنهادها", "پیگیری سفارش", "سوالات متداول"].map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black text-white/90">ارتباط با ما</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="inline-flex items-center gap-2">
              <Home className="h-4 w-4" />
              تهران، خیابان آزادی، پلاک ۲۱
            </li>
            <li className="inline-flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              ۰۲۱-۱۲۳۴۵۶۷۸
            </li>
            <li className="inline-flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              پشتیبانی ۲۴ ساعته
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} ShopFlow. تمامی حقوق محفوظ است.</span>
          <span>طراحی شده با ❤️ برای یک فروشگاه جذاب و حرفه‌ای</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [sortBy, setSortBy] = useState("featured");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5500000);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("shop-favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("shop-cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem("shop-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("shop-cart", JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "همه") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (query.trim()) {
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (showFavoritesOnly) {
      result = result.filter((item) => favorites.includes(item.id));
    }

    result = result.filter((item) => item.price <= maxPrice);

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        result.sort(
          (a, b) =>
            getDiscountPercent(b.price, b.originalPrice) -
            getDiscountPercent(a.price, a.originalPrice)
        );
        break;
      default:
        result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [query, selectedCategory, sortBy, favorites, showFavoritesOnly, maxPrice]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const shipping = subtotal > 0 ? 99000 : 0;
  const promoDiscount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal + shipping - promoDiscount;
  const featureProducts = products.slice(0, 3);
  const productsPreview = products.slice(0, 3);
  const bestDeal = [...products].sort(
    (a, b) => getDiscountPercent(b.price, b.originalPrice) - getDiscountPercent(a.price, a.originalPrice)
  )[0];

  const addToCart = (product) => {
    setCartOpen(true);
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const incrementItem = (id) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (id) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const applyPromo = () => {
    setPromoApplied(promoCode.trim().toUpperCase() === "SHOP10");
  };

  const resetFilters = () => {
    setQuery("");
    setSelectedCategory("همه");
    setSortBy("featured");
    setShowFavoritesOnly(false);
    setMaxPrice(5500000);
  };

  return (
    <div
      className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff,_#f8fafc_35%,_#eef2ff_100%)] text-slate-900"
      dir="rtl"
    >
      <QuickViewModal
        product={quickViewProduct}
        open={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onAdd={addToCart}
      />

      <CartDrawer
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        finalTotal={finalTotal}
        promoApplied={promoApplied}
        promoDiscount={promoDiscount}
      />

      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={cartCount}
        favoritesCount={favorites.length}
        setCartOpen={setCartOpen}
      />

      <main>
        {currentPage === "home" && (
          <HomePage
            productsPreview={productsPreview}
            bestDeal={bestDeal}
            featureProducts={featureProducts}
            setCurrentPage={setCurrentPage}
            onAdd={addToCart}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onQuickView={setQuickViewProduct}
          />
        )}

        {currentPage === "products" && (
          <ProductsPage
            filteredProducts={filteredProducts}
            categories={categories}
            query={query}
            setQuery={setQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            showFavoritesOnly={showFavoritesOnly}
            setShowFavoritesOnly={setShowFavoritesOnly}
            resetFilters={resetFilters}
            onAdd={addToCart}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onQuickView={setQuickViewProduct}
          />
        )}

        {currentPage === "offers" && (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <PromoBanners />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
              <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 lg:p-10">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                  پیشنهاد ویژه راه‌اندازی
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  فروشگاهت حالا یک لول حرفه‌ای‌تر شد
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75 sm:text-base">
                  مرحله بعدی می‌تواند چندصفحه‌ای کردن فروشگاه با React Router، صفحه جزییات محصول، پنل مدیریت، اتصال به بک‌اند و درگاه پرداخت باشد.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["React Router", "Product Page", "Checkout", "Admin Panel"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-slate-950">
                  <BadgePercent className="h-5 w-5" />
                  <h3 className="text-lg font-black">کد تخفیف</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  برای تست تجربه خرید، کد <span className="font-black text-slate-950">SHOP10</span> را وارد کن.
                </p>
                <div className="mt-5 space-y-3">
                  <input
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="مثلاً SHOP10"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                  />
                  <button
                    onClick={applyPromo}
                    className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800"
                  >
                    اعمال کد تخفیف
                  </button>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm font-bold ${
                      promoApplied
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-slate-50 text-slate-500"
                    }`}
                  >
                    {promoApplied ? (
                      <span className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4" /> ۱۰٪ تخفیف اعمال شد
                      </span>
                    ) : (
                      "هنوز تخفیفی اعمال نشده"
                    )}
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                    <div className="flex items-center justify-between">
                      <span>مبلغ قابل پرداخت</span>
                      <span className="font-black text-slate-950">{formatPrice(finalTotal)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />

      <div className="fixed bottom-4 left-1/2 z-20 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-[1.5rem] border border-white/30 bg-white/85 p-3 shadow-2xl shadow-slate-900/10 backdrop-blur xl:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs text-slate-500">سبد خرید</div>
            <div className="text-sm font-black text-slate-950">{cartCount} آیتم</div>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white"
          >
            <ShoppingCart className="h-4 w-4" />
            {formatPrice(finalTotal)}
          </button>
        </div>
      </div>
    </div>
  );
}
