export default function Home() {
  return (
    <>
      <h1>List</h1>
      <ul role="list" className="p-6 divide-y divide-slate-200">
        <li className="flex py-4 first:pt-0 last:pb-0">
          <img className="h-10 w-10 rounded-full" src="next.svg" alt="" />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-slate-900">nickname</p>
            <p className="text-sm text-slate-500 truncate">email</p>
          </div>
        </li>
        <li className="flex py-4 first:pt-0 last:pb-0">
          <img className="h-10 w-10 rounded-full" src="vercel.svg" alt="" />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-slate-900">nickname</p>
            <p className="text-sm text-slate-500 truncate">email</p>
          </div>
        </li>
      </ul>

      <h1>Form</h1>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Username</span>
          <input type="text" value="tbone" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
        </label>
      </form>

      <h1>Categories</h1>
      <div>
        <ul className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
          <li>Sales</li>
          <li>Marketing</li>
          <li>SEO</li>
        </ul>
      </div>
    </>
  );
}
