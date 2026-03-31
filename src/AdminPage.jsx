import { useEffect, useMemo, useState } from "react";
import {
  ShieldCheck,
  LogOut,
  Plus,
  ShoppingBag,
  Wallet,
  Users,
  BarChart3,
  AlertTriangle,
  Megaphone,
  KeyRound,
  Sparkles,
  Boxes,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import heroImage from "./assets/hero.png";

const DEFAULT_BANNERS = [
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

const formatPrice = (value) => `${new Intl.NumberFormat("fa-IR").format(value)} تومان`;

function StatCard({ icon: Icon, label, value, hint, accent = "from-slate-900 to-slate-700" }) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
          <p className="mt-1 text-xs text-slate-500">{hint}</p>
        </div>
        <div className={`rounded-2xl bg-gradient-to-br ${accent} p-3 text-white shadow-lg`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function SectionCard({ title, icon: Icon, children }) {
  return (
    <section className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-slate-950">
        <div className="rounded-xl bg-slate-100 p-2">
          <Icon className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-black">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function AdminPanel({ products, setProducts, banners, setBanners, credentials, setCredentials, onLogout }) {
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

  const addProduct = () => {
    if (!productForm.title || !productForm.price || !productForm.originalPrice) return;
    const nextId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([
      {
        id: nextId,
        title: productForm.title,
        category: productForm.category,
        price: Number(productForm.price),
        originalPrice: Number(productForm.originalPrice),
        rating: 4.7,
        badge: productForm.badge || "جدید",
        stock: Number(productForm.stock || 5),
        description: productForm.description || "محصول جدید اضافه شد.",
        image: productForm.image || heroImage,
        colors: ["مشکی", "سفید"],
      },
      ...products,
    ]);

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

  const updateBanner = (id, field, value) => {
    setBanners((current) =>
      current.map((banner) => (banner.id === id ? { ...banner, [field]: value } : banner))
    );
  };

  const saveCredentials = () => {
    if (!credentialForm.username || !credentialForm.password) return;
    setCredentials(credentialForm);
  };

  const totalStock = useMemo(
    () => products.reduce((sum, item) => sum + Number(item.stock || 0), 0),
    [products]
  );

  const inventoryValue = useMemo(
    () => products.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.stock || 0), 0),
    [products]
  );

  const lowStockProducts = useMemo(
    () => products.filter((item) => Number(item.stock || 0) <= 3).slice(0, 5),
    [products]
  );

  const topProducts = useMemo(
    () => [...products].sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0)).slice(0, 4),
    [products]
  );

  const activityFeed = [
    "محصول جدید در فروشگاه ثبت شد.",
    "تنظیمات بنرها بروزرسانی شد.",
    "ادمین وارد پنل مدیریت شد.",
    "اطلاعات امنیتی پنل ذخیره شد.",
  ];

  const performanceBars = [
    { label: "پوشاک", value: 78 },
    { label: "دیجیتال", value: 64 },
    { label: "اکسسوری", value: 51 },
    { label: "خانه", value: 42 },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" dir="rtl">
      <div className="mb-6 overflow-hidden rounded-[2rem] border border-black/5 bg-slate-950 text-white shadow-xl shadow-slate-900/20">
        <div className="grid gap-4 p-6 lg:grid-cols-[1.2fr_1fr] lg:p-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold">
              <Sparkles className="h-3.5 w-3.5" />
              داشبورد مدیریتی کامل
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight">پنل مدیریت فروشگاه</h1>
            <p className="mt-2 text-sm text-white/75">
              تمام بخش‌های مهم مثل آمار فروش، وضعیت موجودی، مدیریت محصول، بنر و امنیت از همین صفحه قابل کنترل هستند.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="/" className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black">
                بازگشت به سایت
              </a>
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black"
              >
                <LogOut className="h-4 w-4" />
                خروج
              </button>
            </div>
          </div>
          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-3">
              <div className="text-xs text-white/70">محصولات فعال</div>
              <div className="mt-1 text-2xl font-black">{products.length}</div>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <div className="text-xs text-white/70">موجودی کل</div>
              <div className="mt-1 text-2xl font-black">{new Intl.NumberFormat("fa-IR").format(totalStock)}</div>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <div className="text-xs text-white/70">بنرهای فعال</div>
              <div className="mt-1 text-2xl font-black">{banners.length}</div>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <div className="text-xs text-white/70">ارزش انبار</div>
              <div className="mt-1 text-sm font-black">{formatPrice(inventoryValue)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Wallet} label="فروش امروز" value={formatPrice(inventoryValue * 0.04)} hint="نسبت به دیروز +۱۲٪" accent="from-emerald-600 to-emerald-500" />
        <StatCard icon={ShoppingBag} label="سفارش‌های امروز" value={new Intl.NumberFormat("fa-IR").format(Math.max(products.length * 3, 12))} hint="نرخ تکمیل ۹۴٪" accent="from-blue-600 to-indigo-500" />
        <StatCard icon={Users} label="کاربران آنلاین" value={new Intl.NumberFormat("fa-IR").format(Math.max(products.length * 7, 38))} hint="میانگین زمان حضور ۳:۲۱" accent="from-fuchsia-600 to-violet-500" />
        <StatCard icon={BarChart3} label="نرخ تبدیل" value="۴.۹٪" hint="هفته قبل: ۴.۱٪" accent="from-amber-500 to-orange-500" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <SectionCard title="افزودن محصول جدید" icon={Plus}>
            <div className="grid gap-3 sm:grid-cols-2">
              <input value={productForm.title} onChange={(e) => setProductForm((p) => ({ ...p, title: e.target.value }))} placeholder="نام محصول" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.category} onChange={(e) => setProductForm((p) => ({ ...p, category: e.target.value }))} placeholder="دسته‌بندی" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.price} onChange={(e) => setProductForm((p) => ({ ...p, price: e.target.value }))} placeholder="قیمت" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.originalPrice} onChange={(e) => setProductForm((p) => ({ ...p, originalPrice: e.target.value }))} placeholder="قیمت قبل تخفیف" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.stock} onChange={(e) => setProductForm((p) => ({ ...p, stock: e.target.value }))} placeholder="موجودی" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input value={productForm.badge} onChange={(e) => setProductForm((p) => ({ ...p, badge: e.target.value }))} placeholder="برچسب" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            </div>
            <input value={productForm.image} onChange={(e) => setProductForm((p) => ({ ...p, image: e.target.value }))} placeholder="لینک یا مسیر تصویر" className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            <textarea value={productForm.description} onChange={(e) => setProductForm((p) => ({ ...p, description: e.target.value }))} rows={3} placeholder="توضیحات" className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            <button onClick={addProduct} className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">
              <Plus className="h-4 w-4" />
              افزودن محصول
            </button>
          </SectionCard>

          <SectionCard title="محصولات منتخب / عملکرد" icon={Boxes}>
            <div className="space-y-3">
              {topProducts.length ? (
                topProducts.map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-2xl border border-slate-100 p-3">
                    <div className="flex items-center gap-3">
                      <img src={item.image || heroImage} alt={item.title} className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <div className="text-sm font-black text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-500">امتیاز {item.rating || 0} • موجودی {item.stock || 0}</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-emerald-700">{formatPrice(item.price || 0)}</div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">هنوز محصولی اضافه نشده است.</div>
              )}
            </div>

            <div className="mt-5 space-y-3">
              {performanceBars.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-slate-900" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <SectionCard title="مدیریت بنرهای سایت" icon={Megaphone}>
            <div className="space-y-4">
              {banners.map((banner, idx) => (
                <div key={banner.id} className="rounded-2xl bg-slate-50 p-4">
                  <div className="mb-3 text-sm font-black text-slate-800">بنر {idx + 1}</div>
                  <input value={banner.title} onChange={(e) => updateBanner(banner.id, "title", e.target.value)} placeholder="عنوان" className="mb-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none" />
                  <input value={banner.subtitle} onChange={(e) => updateBanner(banner.id, "subtitle", e.target.value)} placeholder="زیرعنوان" className="mb-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none" />
                  <textarea rows={2} value={banner.description} onChange={(e) => updateBanner(banner.id, "description", e.target.value)} placeholder="توضیح" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none" />
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="هشدار موجودی" icon={AlertTriangle}>
            {lowStockProducts.length ? (
              <div className="space-y-3">
                {lowStockProducts.map((item) => (
                  <div key={item.id} className="flex items-center justify-between rounded-2xl border border-amber-100 bg-amber-50/60 p-3">
                    <div>
                      <div className="text-sm font-black text-amber-900">{item.title}</div>
                      <div className="text-xs text-amber-700">موجودی پایین ({item.stock || 0} عدد)</div>
                    </div>
                    <button className="rounded-xl bg-amber-500 px-3 py-2 text-xs font-bold text-white">شارژ موجودی</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
                وضعیت عالیه! هیچ محصولی با موجودی بحرانی ثبت نشده.
              </div>
            )}
          </SectionCard>

          <SectionCard title="امنیت و ورود" icon={KeyRound}>
            <div className="grid gap-3 sm:grid-cols-2">
              <input value={credentialForm.username} onChange={(e) => setCredentialForm((p) => ({ ...p, username: e.target.value }))} placeholder="نام کاربری" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input type="password" value={credentialForm.password} onChange={(e) => setCredentialForm((p) => ({ ...p, password: e.target.value }))} placeholder="رمز عبور" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            </div>
            <button onClick={saveCredentials} className="mt-3 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">ذخیره اطلاعات ورود</button>
          </SectionCard>

          <SectionCard title="فعالیت‌های اخیر" icon={Clock3}>
            <div className="space-y-3">
              {activityFeed.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-slate-50 p-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-slate-600">
              مشاهده گزارش کامل
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </SectionCard>
        </div>
      </div>
    </section>
  );
}

export default function AdminPage() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("shop-products");
    return saved ? JSON.parse(saved) : [];
  });
  const [banners, setBanners] = useState(() => {
    const saved = localStorage.getItem("shop-banners");
    return saved ? JSON.parse(saved) : DEFAULT_BANNERS;
  });
  const [credentials, setCredentials] = useState(() => {
    const saved = localStorage.getItem("shop-admin-credentials");
    return saved ? JSON.parse(saved) : { username: "admin", password: "admin" };
  });

  useEffect(() => {
    localStorage.setItem("shop-products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("shop-banners", JSON.stringify(banners));
  }, [banners]);

  useEffect(() => {
    localStorage.setItem("shop-admin-credentials", JSON.stringify(credentials));
  }, [credentials]);

  const logout = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff,_#f8fafc_30%,_#eef2ff_100%)] text-slate-900">
      <header className="border-b border-black/5 bg-white/80 backdrop-blur" dir="rtl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-slate-950">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-lg font-black">Admin Dashboard</span>
          </div>
          <a href="/" className="text-sm font-bold text-slate-700 hover:text-slate-950">
            رفتن به صفحه اصلی
          </a>
        </div>
      </header>
      <AdminPanel
        products={products}
        setProducts={setProducts}
        banners={banners}
        setBanners={setBanners}
        credentials={credentials}
        setCredentials={setCredentials}
        onLogout={logout}
      />
    </div>
  );
}
