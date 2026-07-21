import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '#' },
  { label: 'Contact', path: '#' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-y-3 px-4 py-4 sm:flex-nowrap sm:px-6 lg:px-8">
        {/* Logo - always first, never grows */}
        <NavLink
          to="/"
          className="order-1 flex-shrink-0 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
        >
          Grandir
        </NavLink>

        {/* Order Now - row 1 on mobile (right side), last on desktop */}
        <NavLink
          to="/cart"
          className="order-2 flex-shrink-0 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700 sm:order-3 sm:px-5 sm:py-2.5"
        >
          Order Now
        </NavLink>

        {/* Nav links - wraps to its own full-width row on mobile, centered flex-1 column on desktop */}
        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full basis-full flex-wrap items-center justify-center gap-4 sm:order-2 sm:w-auto sm:basis-auto sm:flex-1 sm:gap-6"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-150 ${
                  isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
// function Navbar() {
//   return (
//     <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
//       <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
//         <NavLink
//           to="/"
//           className="flex-shrink-0 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
//         >
//           Grandir
//         </NavLink>

//         <nav
//           aria-label="Primary navigation"
//           className="order-3 flex w-full basis-full flex-wrap items-center justify-center gap-4 sm:order-2 sm:basis-auto sm:gap-6 md:flex-1 md:justify-center"
//         >
//           {navItems.map((item) => (
//             <NavLink
//               key={item.label}
//               to={item.path}
//               className={({ isActive }) =>
//                 `text-sm font-medium transition-colors duration-150 ${
//                   isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
//                 }`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>

//         <NavLink
//           to="/cart"
//           className="ml-auto inline-flex items-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700 sm:px-5 sm:py-2.5"
//         >
//           Order Now
//         </NavLink>
//       </div>
//     </header>
//   )
// }

export default Navbar
