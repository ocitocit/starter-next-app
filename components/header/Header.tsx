import Link from 'next/link';
import { ToggleTheme } from '../ToggleTheme';
import { buttonVariants } from '../ui/button';
import { Icons } from '../icons';
import { cn } from '@/lib/utils';

const Header = () => {
  // hard code
  const disabled = false;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div
        className="
          container 
          flex 
          h-16 
          items-center 
          space-x-4 
          sm:justify-between 
          sm:space-x-0"
      >
        {/* left side */}
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block font-bold">Next.js</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href={'/'}
              className={cn(
                'flex items-center text-sm font-medium text-muted-foreground',
                disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              Home
            </Link>
          </nav>
        </div>

        {/* right side */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={'/'} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={'/'} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ToggleTheme />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
