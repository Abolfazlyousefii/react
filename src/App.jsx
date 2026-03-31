import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";
import heroImage from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
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
  User,
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
      heroImage,
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
      reactLogo,
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
      viteLogo,
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
      heroImage,
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
      reactLogo,
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
      viteLogo,
    colors: ["مشکی", "خاکستری"],
  },
];

const stories = [
  {
    id: 1,
    title: "ترند امروز",
    subtitle: "کالکشن جدید",
    image:
      heroImage,
  },
  {
    id: 2,
    title: "تخفیف ویژه",
    subtitle: "تا 40٪",
    image:
      reactLogo,
  },
  {
    id: 3,
    title: "دیجیتال",
    subtitle: "گجت‌های داغ",
    image:
      viteLogo,
  },
  {
    id: 4,
    title: "لایف‌استایل",
    subtitle: "انتخاب خاص",
    image:
      heroImage,
  },
  {
    id: 5,
    title: "خانه",
    subtitle: "پیشنهاد مینیمال",
    image:
      reactLogo,
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

const blogPosts = [
  {
    id: 1,
    title: "چطور استایل مینیمال اما خاص داشته باشیم؟",
    excerpt:
      "چند نکته ساده برای ترکیب رنگ، انتخاب آیتم‌های کلیدی و ساخت استایل روزمره که همیشه جذاب به‌نظر برسد.",
    tag: "استایل",
    readTime: "۵ دقیقه",
  },
  {
    id: 2,
    title: "راهنمای خرید گجت برای استفاده روزانه",
    excerpt:
      "اگر دنبال هدفون، ساعت هوشمند یا اکسسوری دیجیتال هستی، این چک‌لیست سریع کمکت می‌کند انتخاب دقیق‌تری داشته باشی.",
    tag: "دیجیتال",
    readTime: "۷ دقیقه",
  },
  {
    id: 3,
    title: "نکات مهم نگهداری از کفش و کیف چرمی",
    excerpt:
      "با چند عادت ساده عمر محصولات چرمی را بیشتر کن و ظاهر حرفه‌ای آن‌ها را برای مدت طولانی حفظ کن.",
    tag: "مراقبت محصول",
    readTime: "۴ دقیقه",
  },
];

const homeHighlights = [
  { title: "بسته‌بندی پریمیوم", text: "تمام سفارش‌ها با بسته‌بندی شیک و امن ارسال می‌شوند." },
  { title: "پرداخت منعطف", text: "قابلیت پرداخت امن آنلاین و گزینه‌های متنوع پرداخت." },
  { title: "پشتیبانی سریع", text: "پاسخ‌گویی نزدیک به لحظه برای سوالات قبل و بعد خرید." },
  { title: "تضمین قیمت", text: "ارائه قیمت رقابتی برای خرید مطمئن و اقتصادی‌تر." },
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

function PromoBanners({ banners }) {
  const [mainBanner, sideBannerOne, sideBannerTwo] = banners;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 p-8 text-white shadow-2xl shadow-slate-900/15">
          <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="relative max-w-xl">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">
              {mainBanner?.subtitle || "بنر ویژه"}
            </span>
            <h3 className="mt-4 text-3xl font-black leading-tight">
              {mainBanner?.title || "استایل جدیدت را همین امروز بساز"}
            </h3>
            <p className="mt-3 text-sm leading-8 text-white/75">
              {mainBanner?.description ||
                "کالکشن جدید با تخفیف لانچ، ارسال سریع و طراحی خاص برای فروشگاه مدرن تو."}
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100">
              مشاهده پیشنهاد ویژه
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-100 to-rose-100 p-6 shadow-sm">
            <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-black text-slate-900">
              {sideBannerOne?.subtitle || "تا 30٪ تخفیف"}
            </div>
            <h4 className="mt-4 text-2xl font-black text-slate-950">
              {sideBannerOne?.title || "کالکشن پوشاک"}
            </h4>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {sideBannerOne?.description ||
                "برای استایل روزمره و مینیمال، انتخاب‌های خاص منتظرته."}
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-100 to-cyan-100 p-6 shadow-sm">
            <div className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-black text-slate-900">
              {sideBannerTwo?.subtitle || "دیجیتال داغ"}
            </div>
            <h4 className="mt-4 text-2xl font-black text-slate-950">
              {sideBannerTwo?.title || "گجت‌های پریمیوم"}
            </h4>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {sideBannerTwo?.description ||
                "محصولات دیجیتال با ظاهر شیک و تجربه کاربری حرفه‌ای."}
            </p>
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
    <Motion.div
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
    </Motion.div>
  );
}

function QuickViewModal({ product, open, onClose, onAdd }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <Motion.div
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
                  { icon: Truck, label: "ارسال سریع" },
                  { icon: ShieldCheck, label: "ضمانت اصالت" },
                  { icon: RotateCcw, label: "بازگشت آسان" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 p-3 text-center">
                    <item.icon className="mx-auto h-4 w-4 text-slate-700" />
                    <div className="mt-2 text-xs font-bold text-slate-600">{item.label}</div>
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
          </Motion.div>
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
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm"
          />
          <Motion.aside
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
                  <Motion.div
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
                  </Motion.div>
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
          </Motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Header({
  currentPage,
  setCurrentPage,
  cartCount,
  favoritesCount,
  setCartOpen,
}) {
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
            {navButton("وبلاگ", "blog", Sparkles)}
            {navButton("تماس با ما", "contact", Headphones)}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentPage("login")}
              className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm md:inline-flex md:items-center md:gap-2"
            >
              <User className="h-4 w-4" />
              ورود
            </button>
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
  banners,
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
        <Motion.div
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
        </Motion.div>

        <Motion.div
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
        </Motion.div>
      </section>

      <PromoBanners banners={banners} />

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

        <Motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
        </Motion.div>
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

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-sm font-semibold text-slate-500">چرا ShopFlow؟</span>
          <h2 className="mt-2 text-3xl font-black text-slate-950">امکانات بیشتر برای تجربه بهتر</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {homeHighlights.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
              <Zap className="h-5 w-5 text-slate-900" />
              <h3 className="mt-3 font-black text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-end justify-between gap-3">
            <div>
              <span className="text-sm font-semibold text-slate-500">نظر مشتریان</span>
              <h2 className="mt-2 text-3xl font-black text-slate-950">تجربه کاربران از خرید</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              امتیاز میانگین ۴.۸
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "ارسال خیلی سریع بود و کیفیت محصول عالی بود. دقیقاً چیزی بود که می‌خواستم.",
              "طراحی سایت جذابه و خرید خیلی راحت انجام شد. پشتیبانی هم خیلی سریع جواب داد.",
              "تخفیف‌ها واقعی بودن و تجربه کلی خرید کاملاً حرفه‌ای و لذت‌بخش بود.",
            ].map((text, idx) => (
              <div key={idx} className="rounded-[1.5rem] bg-slate-50 p-4">
                <div className="mb-3 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
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

      <Motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
      </Motion.div>

      {filteredProducts.length === 0 && (
        <div className="mt-6 rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
          محصولی با این فیلتر پیدا نشد.
        </div>
      )}
    </section>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 p-8 text-white shadow-2xl">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black">تماس با ما</span>
        <h1 className="mt-4 text-4xl font-black tracking-tight">همیشه در دسترس تو هستیم</h1>
        <p className="mt-3 max-w-2xl text-sm leading-8 text-white/75">
          اگر سوالی درباره سفارش، محصول یا پشتیبانی داری، از طریق فرم زیر یا اطلاعات تماس با ما در ارتباط باش.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <form className="space-y-4 rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-950">فرم ارسال پیام</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400" placeholder="نام و نام خانوادگی" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400" placeholder="شماره تماس" />
          </div>
          <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400" placeholder="ایمیل" />
          <textarea rows={5} className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400" placeholder="متن پیام..." />
          <button type="button" className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-slate-800">
            ارسال پیام
          </button>
        </form>

        <div className="space-y-4">
          {[
            { icon: Headphones, title: "پشتیبانی", text: "۲۴ ساعته در ۷ روز هفته" },
            { icon: Truck, title: "پیگیری سفارش", text: "۰۲۱-۱۲۳۴۵۶۷۸" },
            { icon: Home, title: "آدرس دفتر", text: "تهران، خیابان آزادی، پلاک ۲۱" },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
              <item.icon className="h-5 w-5 text-slate-900" />
              <h3 className="mt-3 font-black text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">وبلاگ فروشگاه</span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">آخرین مقالات و راهنماها</h1>
        <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-600">
          ترندها، نکات خرید هوشمند و راهنمای نگهداری محصولات را از اینجا دنبال کن.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="rounded-[2rem] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                {post.tag}
              </span>
              <span className="text-xs font-semibold text-slate-500">{post.readTime}</span>
            </div>
            <h2 className="mt-4 text-xl font-black text-slate-950">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
            <button className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950">
              مطالعه مقاله
              <ChevronLeft className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function AccountPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
            <User className="h-9 w-9 text-slate-700" />
          </div>
          <h2 className="mt-4 text-center text-xl font-black text-slate-950">کاربر مهمان</h2>
          <p className="mt-2 text-center text-sm text-slate-500">برای مدیریت کامل سفارش‌ها وارد حساب کاربری شو.</p>
          <button className="mt-5 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800">
            ورود / ثبت‌نام
          </button>
        </aside>

        <div className="space-y-6">
          <div className="rounded-[2rem] bg-gradient-to-br from-indigo-950 to-slate-900 p-8 text-white shadow-2xl">
            <h1 className="text-3xl font-black">حساب کاربری من</h1>
            <p className="mt-3 text-sm leading-8 text-white/75">
              وضعیت سفارش‌ها، آدرس‌ها، علاقه‌مندی‌ها و اطلاعات پرداختت را از این بخش مدیریت کن.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "سفارش‌های اخیر", value: "۳ سفارش", icon: Package },
              { title: "علاقه‌مندی‌ها", value: "۸ محصول", icon: Heart },
              { title: "آدرس‌های ذخیره شده", value: "۲ آدرس", icon: Home },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-sm">
                <item.icon className="h-5 w-5 text-slate-900" />
                <h3 className="mt-3 text-sm font-bold text-slate-500">{item.title}</h3>
                <div className="mt-1 text-2xl font-black text-slate-950">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LoginPage() {
  const floatingItems = [
    { id: 1, label: "هودی", delay: 0, x: -95, y: -65 },
    { id: 2, label: "کت", delay: 0.25, x: 92, y: -45 },
    { id: 3, label: "کتانی", delay: 0.45, x: -72, y: 72 },
    { id: 4, label: "کیف", delay: 0.65, x: 76, y: 78 },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2.25rem] border border-black/5 bg-white shadow-2xl shadow-slate-900/10">
        <div className="grid min-h-[680px] lg:grid-cols-2">
          <div className="relative overflow-hidden bg-slate-950">
            <img
              src={heroImage}
              alt="فشن مدرن"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/45 to-indigo-900/40" />

            <div className="absolute left-1/2 top-1/2 z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl">
                <Shirt className="h-9 w-9" />
              </div>

              {floatingItems.map((item) => (
                <Motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                    x: [item.x, item.x + 5, item.x],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 flex w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl border border-white/20 bg-white/15 px-3 py-2 text-white backdrop-blur-md"
                  style={{ marginLeft: `${item.x}px`, marginTop: `${item.y}px` }}
                >
                  <Shirt className="h-4 w-4" />
                  <span className="mt-1 text-[11px] font-bold">{item.label}</span>
                </Motion.div>
              ))}
            </div>

            <div className="absolute bottom-8 right-8 left-8 z-10 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
              <p className="text-xs text-white/80">ورود به تجربه خرید اختصاصی</p>
              <h2 className="mt-2 text-2xl font-black">استایل جدیدت فقط چند کلیک فاصله داره</h2>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white p-6 sm:p-10">
            <div className="w-full max-w-md" dir="rtl">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
                ورود کاربر
              </span>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
                خوش برگشتی 👋
              </h1>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                برای مشاهده سفارش‌ها، علاقه‌مندی‌ها و پیشنهادهای شخصی‌سازی شده وارد حساب کاربری‌ات شو.
              </p>

              <form className="mt-8 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">شماره موبایل یا ایمیل</span>
                  <input
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                    placeholder="مثلاً 0912xxxxxxx"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">رمز عبور</span>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                    placeholder="رمز عبور"
                  />
                </label>
                <button
                  type="button"
                  className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800"
                >
                  ورود به حساب
                </button>
              </form>

              <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                <button className="font-bold text-slate-700">فراموشی رمز عبور</button>
                <button className="font-bold text-slate-700">ایجاد حساب جدید</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdminLoginPage({ onLogin, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-2xl shadow-slate-900/10 sm:p-10">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">
          Admin Access
        </span>
        <h1 className="mt-4 text-4xl font-black text-slate-950">ورود به پنل ادمین</h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          فقط مدیر سایت به این بخش دسترسی دارد. نام کاربری و رمز اختصاصی خودت را وارد کن.
        </p>

        <div className="mt-8 space-y-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="نام کاربری ادمین"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
          />

          {error && <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700">{error}</div>}

          <button
            onClick={() => onLogin(username, password)}
            className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-slate-800"
          >
            ورود امن به پنل
          </button>
        </div>
      </div>
    </section>
  );
}

function AdminPanelPage({
  products,
  onAddProduct,
  banners,
  onUpdateBanner,
  credentials,
  onUpdateCredentials,
  onLogout,
}) {
  const [productForm, setProductForm] = useState({
    title: "",
    category: "پوشاک",
    price: "",
    originalPrice: "",
    stock: "",
    badge: "جدید",
    image: "",
    description: "",
  });

  const [credentialForm, setCredentialForm] = useState(credentials);

  const submitProduct = () => {
    if (!productForm.title || !productForm.price || !productForm.originalPrice) return;
    onAddProduct(productForm);
    setProductForm({
      title: "",
      category: "پوشاک",
      price: "",
      originalPrice: "",
      stock: "",
      badge: "جدید",
      image: "",
      description: "",
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] bg-slate-950 p-6 text-white">
        <div>
          <h1 className="text-3xl font-black">پنل مدیریت خفن فروشگاه</h1>
          <p className="mt-2 text-sm text-white/75">
            از اینجا می‌تونی محصول اضافه کنی، بنر سایت رو تغییر بدی و ورود ادمین رو شخصی‌سازی کنی.
          </p>
        </div>
        <button
          onClick={onLogout}
          className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black"
        >
          خروج از پنل
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">افزودن محصول جدید</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input value={productForm.title} onChange={(e) => setProductForm((p) => ({ ...p, title: e.target.value }))} placeholder="نام محصول" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.category} onChange={(e) => setProductForm((p) => ({ ...p, category: e.target.value }))} placeholder="دسته‌بندی" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.price} onChange={(e) => setProductForm((p) => ({ ...p, price: e.target.value }))} placeholder="قیمت" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.originalPrice} onChange={(e) => setProductForm((p) => ({ ...p, originalPrice: e.target.value }))} placeholder="قیمت قبل تخفیف" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.stock} onChange={(e) => setProductForm((p) => ({ ...p, stock: e.target.value }))} placeholder="موجودی" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.badge} onChange={(e) => setProductForm((p) => ({ ...p, badge: e.target.value }))} placeholder="برچسب (مثل ویژه)" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            </div>
            <input value={productForm.image} onChange={(e) => setProductForm((p) => ({ ...p, image: e.target.value }))} placeholder="لینک تصویر محصول" className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            <textarea value={productForm.description} onChange={(e) => setProductForm((p) => ({ ...p, description: e.target.value }))} rows={3} placeholder="توضیح کوتاه محصول" className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            <button onClick={submitProduct} className="mt-3 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">
              افزودن محصول
            </button>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">تغییر اطلاعات ورود ادمین</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input value={credentialForm.username} onChange={(e) => setCredentialForm((p) => ({ ...p, username: e.target.value }))} placeholder="نام کاربری جدید" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input type="password" value={credentialForm.password} onChange={(e) => setCredentialForm((p) => ({ ...p, password: e.target.value }))} placeholder="رمز جدید" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            </div>
            <button
              onClick={() => onUpdateCredentials(credentialForm)}
              className="mt-3 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white"
            >
              ذخیره اطلاعات ورود
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">مدیریت بنرهای سایت</h2>
            <div className="mt-4 space-y-4">
              {banners.map((banner, idx) => (
                <div key={banner.id} className="rounded-2xl bg-slate-50 p-4">
                  <div className="mb-3 text-sm font-black text-slate-800">بنر {idx + 1}</div>
                  <input
                    value={banner.title}
                    onChange={(e) => onUpdateBanner(banner.id, "title", e.target.value)}
                    placeholder="عنوان بنر"
                    className="mb-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none"
                  />
                  <input
                    value={banner.subtitle}
                    onChange={(e) => onUpdateBanner(banner.id, "subtitle", e.target.value)}
                    placeholder="زیرعنوان بنر"
                    className="mb-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none"
                  />
                  <textarea
                    rows={2}
                    value={banner.description}
                    onChange={(e) => onUpdateBanner(banner.id, "description", e.target.value)}
                    placeholder="توضیح بنر"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black text-slate-950">خلاصه وضعیت فروشگاه</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4 text-center">
                <div className="text-sm text-slate-500">تعداد محصولات</div>
                <div className="mt-1 text-2xl font-black text-slate-950">{products.length}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-center">
                <div className="text-sm text-slate-500">تعداد بنر فعال</div>
                <div className="mt-1 text-2xl font-black text-slate-950">{banners.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <a
            href="/admin"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-black text-white transition hover:bg-white/20"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            ورود به پنل ادمین
          </a>
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
  const [siteProducts, setSiteProducts] = useState(() => {
    const saved = localStorage.getItem("shop-products");
    return saved ? JSON.parse(saved) : products;
  });
  const [siteBanners, setSiteBanners] = useState(() => {
    const saved = localStorage.getItem("shop-banners");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "استایل جدیدت را همین امروز بساز",
            subtitle: "بنر ویژه",
            description: "کالکشن جدید با تخفیف لانچ، ارسال سریع و طراحی خاص برای فروشگاه مدرن تو.",
          },
          {
            id: 2,
            title: "کالکشن پوشاک",
            subtitle: "تا 30٪ تخفیف",
            description: "برای استایل روزمره و مینیمال، انتخاب‌های خاص منتظرته.",
          },
          {
            id: 3,
            title: "گجت‌های پریمیوم",
            subtitle: "دیجیتال داغ",
            description: "محصولات دیجیتال با ظاهر شیک و تجربه کاربری حرفه‌ای.",
          },
        ];
  });
  const [adminCredentials, setAdminCredentials] = useState(() => {
    const saved = localStorage.getItem("shop-admin-credentials");
    return saved ? JSON.parse(saved) : { username: "admin", password: "admin" };
  });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return localStorage.getItem("shop-admin-auth") === "true";
  });
  const [adminLoginError, setAdminLoginError] = useState("");

  useEffect(() => {
    localStorage.setItem("shop-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("shop-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("shop-products", JSON.stringify(siteProducts));
  }, [siteProducts]);

  useEffect(() => {
    localStorage.setItem("shop-banners", JSON.stringify(siteBanners));
  }, [siteBanners]);

  useEffect(() => {
    localStorage.setItem("shop-admin-credentials", JSON.stringify(adminCredentials));
  }, [adminCredentials]);

  useEffect(() => {
    localStorage.setItem("shop-admin-auth", isAdminAuthenticated ? "true" : "false");
  }, [isAdminAuthenticated]);

  const filteredProducts = useMemo(() => {
    let result = [...siteProducts];

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
  }, [query, selectedCategory, sortBy, favorites, showFavoritesOnly, maxPrice, siteProducts]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const shipping = subtotal > 0 ? 99000 : 0;
  const promoDiscount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const finalTotal = subtotal + shipping - promoDiscount;
  const featureProducts = siteProducts.slice(0, 3);
  const productsPreview = siteProducts.slice(0, 3);
  const bestDeal = [...siteProducts].sort(
    (a, b) => getDiscountPercent(b.price, b.originalPrice) - getDiscountPercent(a.price, a.originalPrice)
  )[0] || products[0];

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

  const addAdminProduct = (form) => {
    setSiteProducts((current) => {
      const nextId = current.length ? Math.max(...current.map((item) => item.id)) + 1 : 1;
      const newItem = {
        id: nextId,
        title: form.title,
        category: form.category || "پوشاک",
        price: Number(form.price),
        originalPrice: Number(form.originalPrice),
        rating: 4.7,
        badge: form.badge || "جدید",
        stock: Number(form.stock || 5),
        description: form.description || "محصول جدید اضافه‌شده توسط پنل ادمین.",
        image:
          form.image ||
          reactLogo,
        colors: ["مشکی", "سفید"],
      };
      return [newItem, ...current];
    });
  };

  const updateBanner = (id, field, value) => {
    setSiteBanners((current) =>
      current.map((banner) => (banner.id === id ? { ...banner, [field]: value } : banner))
    );
  };

  const handleAdminLogin = (username, password) => {
    if (username === adminCredentials.username && password === adminCredentials.password) {
      setIsAdminAuthenticated(true);
      setAdminLoginError("");
      setCurrentPage("admin-panel");
      return;
    }
    setAdminLoginError("نام کاربری یا رمز عبور اشتباه است.");
  };

  const updateAdminCredentials = (nextCredentials) => {
    if (!nextCredentials.username || !nextCredentials.password) return;
    setAdminCredentials(nextCredentials);
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    setCurrentPage("home");
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
        isAdminAuthenticated={isAdminAuthenticated}
      />

      <main>
        {currentPage === "home" && (
          <HomePage
            productsPreview={productsPreview}
            bestDeal={bestDeal}
            featureProducts={featureProducts}
            banners={siteBanners}
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
            <PromoBanners banners={siteBanners} />
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

        {currentPage === "blog" && <BlogPage />}

        {currentPage === "contact" && <ContactPage />}

        {currentPage === "account" && <AccountPage />}

        {currentPage === "login" && <LoginPage />}

        {currentPage === "admin-login" && (
          <AdminLoginPage onLogin={handleAdminLogin} error={adminLoginError} />
        )}

        {currentPage === "admin-panel" &&
          (isAdminAuthenticated ? (
            <AdminPanelPage
              products={siteProducts}
              onAddProduct={addAdminProduct}
              banners={siteBanners}
              onUpdateBanner={updateBanner}
              credentials={adminCredentials}
              onUpdateCredentials={updateAdminCredentials}
              onLogout={logoutAdmin}
            />
          ) : (
            <AdminLoginPage onLogin={handleAdminLogin} error={adminLoginError} />
          ))}
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
