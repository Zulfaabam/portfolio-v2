import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/journey')({
  component: Journey,
});

function Journey() {
  return (
    <main className='flex min-h-dvh w-screen flex-col items-center justify-center gap-y-4 p-4'>
      <img
        className='w-full max-w-sm'
        src='https://raw.githubusercontent.com/tanstack/tanstack.com/main/src/images/splash-dark.png'
        alt='TanStack Logo'
      />
      <h1 className='font-outfit'>Journey</h1>
      <a
        className='bg-foreground text-background rounded-full px-4 py-1 hover:opacity-90'
        href='https://tanstack.com/start/latest'
        target='_blank'
      >
        Docs
      </a>
    </main>
  );
}
