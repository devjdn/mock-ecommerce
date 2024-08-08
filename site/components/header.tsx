export default function Header() {
    return(
        <header className='flex align-center justify-between gap-6 p-2 px-4 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50'>
            <a href="/"><span className="text-black dark:text-white text-2xl font-medium">MockEcom</span></a>
        </header>
    );
}