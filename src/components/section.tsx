import { cn } from '@/lib/utils';
import React from 'react';

export interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section
      className={cn(
        'mx-auto max-w-screen-lg px-4 py-12 lg:px-0 xl:max-w-[1040px] xl:py-20',
        className,
      )}
      id={id}
    >
      {children}
    </section>
  );
}
