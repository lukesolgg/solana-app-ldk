"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Repeat, CreditCard, Users } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t">
      <div className="flex justify-around items-center h-16">
        <Link href="/" 
          className={`flex flex-col items-center ${pathname === '/' ? 'text-blue-500' : 'text-gray-500'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/swap"
          className={`flex flex-col items-center ${pathname === '/swap' ? 'text-blue-500' : 'text-gray-500'}`}>
          <Repeat size={24} />
          <span className="text-xs mt-1">Swap</span>
        </Link>
        <Link href="/purchase"
          className={`flex flex-col items-center ${pathname === '/purchase' ? 'text-blue-500' : 'text-gray-500'}`}>
          <CreditCard size={24} />
          <span className="text-xs mt-1">Purchase</span>
        </Link>
        <Link href="/invite"
          className={`flex flex-col items-center ${pathname === '/invite' ? 'text-blue-500' : 'text-gray-500'}`}>
          <Users size={24} />
          <span className="text-xs mt-1">Invite</span>
        </Link>
      </div>
    </nav>
  );
}