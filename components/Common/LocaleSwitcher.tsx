import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  const handleChangeLocale = (e) => {
    const newLocale = e.target.value;
    const { pathname, query } = router;

    // Update the locale using Next.js router
    router.push(
      {
        pathname,
        query,
      },
      null,
      { locale: newLocale }
    );
  };

  return (
    <div className="flex space-x-2">
      <select
        className="p-2 border border-red-900 focus:ring-2 focus:outline-none focus:ring-red-700 rounded-md cursor-pointer"
        onChange={handleChangeLocale}
        value={router.locale} // Set the selected value to match the current locale
      >
        <option value="en-US">EN</option>
        <option value="es-MX">ES</option>
      </select>
    </div>
  );
}
