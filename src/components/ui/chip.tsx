import { cn } from '@/lib/utils';
import React from 'react';

export interface ChipProps {
  label: string;
  className?: string;
}

export default function Chip({ label, className }: ChipProps) {
  return (
    <div className={cn('w-fit rounded-lg px-2 py-1', className)}>{label}</div>
  );
}
