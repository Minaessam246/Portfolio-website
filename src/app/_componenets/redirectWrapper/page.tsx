// app/components/RedirectWrapper.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectWrapper() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null; // nothing to render
}
