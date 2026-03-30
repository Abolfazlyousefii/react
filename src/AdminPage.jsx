import { useEffect, useState } from "react";
import { ShieldCheck, LogOut, Plus } from "lucide-react";

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
        image:
          productForm.image ||
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
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

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" dir="rtl">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] bg-slate-950 p-6 text-white">
        <div>
          <h1 className="text-3xl font-black">پنل مدیریت اختصاصی</h1>
          <p className="mt-2 text-sm text-white/75">این صفحه جدا از index است و تغییراتش مستقیم روی سایت اعمال می‌شود.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black">بازگشت به سایت</a>
          <button onClick={onLogout} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black">
            <LogOut className="h-4 w-4" />
            خروج
          </button>
        </div>
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
              <input value={productForm.badge} onChange={(e) => setProductForm((p) => ({ ...p, badge: e.target.value }))} placeholder="برچسب" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            </div>
            <input value={productForm.image} onChange={(e) => setProductForm((p) => ({ ...p, image: e.target.value }))} placeholder="لینک تصویر" className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            <textarea value={productForm.description} onChange={(e) => setProductForm((p) => ({ ...p, description: e.target.value }))} rows={3} placeholder="توضیحات" className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            <button onClick={addProduct} className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">
              <Plus className="h-4 w-4" />
              افزودن محصول
            </button>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">تنظیمات ورود ادمین</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input value={credentialForm.username} onChange={(e) => setCredentialForm((p) => ({ ...p, username: e.target.value }))} placeholder="نام کاربری" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
              <input type="password" value={credentialForm.password} onChange={(e) => setCredentialForm((p) => ({ ...p, password: e.target.value }))} placeholder="رمز عبور" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none" />
            </div>
            <button onClick={saveCredentials} className="mt-3 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">ذخیره اطلاعات ورود</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">مدیریت بنرهای سایت</h2>
            <div className="mt-4 space-y-4">
              {banners.map((banner, idx) => (
                <div key={banner.id} className="rounded-2xl bg-slate-50 p-4">
                  <div className="mb-3 text-sm font-black text-slate-800">بنر {idx + 1}</div>
                  <input value={banner.title} onChange={(e) => updateBanner(banner.id, "title", e.target.value)} placeholder="عنوان" className="mb-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none" />
                  <input value={banner.subtitle} onChange={(e) => updateBanner(banner.id, "subtitle", e.target.value)} placeholder="زیرعنوان" className="mb-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none" />
                  <textarea rows={2} value={banner.description} onChange={(e) => updateBanner(banner.id, "description", e.target.value)} placeholder="توضیح" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black text-slate-950">وضعیت سریع</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4 text-center">
                <div className="text-sm text-slate-500">تعداد محصولات</div>
                <div className="mt-1 text-2xl font-black text-slate-950">{products.length}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-center">
                <div className="text-sm text-slate-500">تعداد بنر</div>
                <div className="mt-1 text-2xl font-black text-slate-950">{banners.length}</div>
              </div>
            </div>
          </div>
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff,_#f8fafc_35%,_#eef2ff_100%)] text-slate-900">
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
