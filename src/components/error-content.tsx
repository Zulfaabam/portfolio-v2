export default function ErrorContent({ reset }: { reset: () => void }) {
  return (
    <>
      <h2 className='text-red-400'>Something went wrong!</h2>
      <button
        onClick={reset}
        className='rounded-lg bg-fg px-4 py-2 shadow-[0_0_5px_1px] shadow-fg transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_4px_1px_#eaf0f5]'
      >
        Try again
      </button>
    </>
  );
}
