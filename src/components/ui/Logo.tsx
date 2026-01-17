import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 24,
  md: 32,
  lg: 40,
};

export default function Logo({ size = 'md', className }: LogoProps) {
  const dimension = sizes[size];

  return (
    <Image
      src="/favicon.svg"
      alt="AS Logo"
      width={dimension}
      height={dimension}
      className={cn('rounded-lg', className)}
      priority
    />
  );
}
