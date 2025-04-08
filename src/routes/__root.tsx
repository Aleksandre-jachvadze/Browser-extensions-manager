import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { cva } from 'class-variance-authority';

import { Button } from '@/components/ui/button';

import Logo from '../assets/images/logo.svg';
import IconMoon from '../assets/images/icon-moon.svg';
import useDarkMode from '@hooks/use-dark-mode';

const rootBackground = cva(
  'h-full w-full min-h-screen bg-linear-[180deg]',
  {
    variants: {
      mode: {
        light: 'from-gradient-light-end to-gradient-light-end',
        dark: 'from-gradient-start-end to-gradient-dark-end',
      },
    },
    defaultVariants: {
      mode: 'light',
    },
  }
);

const RouteContent = () => {
  const {mode, toggleDarkMode} = useDarkMode();

  const backgroundClass = rootBackground({ mode });

  return (
    <div className={backgroundClass}>
      <header className="py-4 px-6 lg:px-8">
        <div className="container mx-auto flex flex-row justify-between max-w-3xl rounded-xl shadow bg-white dark:bg-neutral-800 p-4">
          <a href="/" aria-label="Go to home">
            <img src={Logo} alt='App logo'></img>
          </a>

          <Button variant="secondary" size="icon" onClick={() => {
            toggleDarkMode();
          }}>
            <img src={IconMoon} alt='Moon icon'></img>
          </Button>
        </div>

      </header>
      <main className="relative isolate px-6 lg:px-8">
        <Outlet />
      </main>
      <footer>
        <div className="text-center text-xs">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="https://github.com/thomasjonstrup">Thomas Jonstrup</a>.
        </div>
      </footer>
      <TanStackRouterDevtools />
    </div>
  )
}

export const Route = createRootRoute({
  component: () => (
    <RouteContent />
  ),
})
