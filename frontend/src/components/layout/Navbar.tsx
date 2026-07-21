'use client';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="group relative">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:from-accent group-hover:to-primary sm:text-3xl">
                grandir
              </span>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                to="/"
                className="group relative px-3 py-2 text-sm font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
                <span className="absolute bottom-0 left-3 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
              </NavLink>
            ))}
          </div>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-3">
            <button className="hidden group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 sm:block">
              <span className="relative z-10 flex items-center gap-2">
                ORDER NOW
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border/40 md:hidden">
            <div className="space-y-1 px-2 py-4 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  to="/"
                  className="block px-3 py-2 rounded-lg text-base font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <button className="w-full mt-4 group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                <span className="relative z-10">ORDER NOW</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


// import { NavLink } from 'react-router-dom'

// const navItems = [
//   { label: 'Home', path: '/' },
//   { label: 'Menu', path: '/menu' },
//   { label: 'About', path: '#' },
//   { label: 'Contact', path: '#' },
// ]

// function Navbar() {
//   return (
//     <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <NavLink to="/" className="flex-shrink-0 text-2xl font-bold tracking-tight text-slate-900">
//           Grandir
//         </NavLink>

//         {/* Navigation Links */}
//         <nav
//           aria-label="Primary navigation"
//           className="hidden flex-1 items-center justify-center gap-8 md:flex"
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

//         {/* CTA Button */}
//         <NavLink
//           to="/cart"
//           className="inline-flex items-center rounded-lg bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-amber-700"
//         >
//           Order Now
//         </NavLink>
//       </div>
//     </header>
//   )
// }

// export default Navbar




// 
// const navItems = [
//   { label: 'Home', href: '#' },
//   { label: 'Menu', href: '#' },
//   { label: 'About', href: '#' },
//   { label: 'Contact', href: '#' },
// ]

// function Navbar() {
//   return (
//     <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//         <a href="#" className="text-xl font-semibold tracking-tight text-slate-900">
//           Grandir
//         </a>

//         <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="text-sm font-medium text-slate-600 transition duration-200 ease-out hover:text-slate-900"
//             >
//               {item.label}
//             </a>
//           ))}
//         </nav>

//         <a
//           href="#"
//           className="inline-flex items-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition duration-200 ease-out hover:bg-amber-700"
//         >
//           Order Now
//         </a>
//       </div>
//     </header>
//   )
// }

// export default Navbar
