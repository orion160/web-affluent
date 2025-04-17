import { NavLink, Outlet } from 'react-router'
import { Button } from '~/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '~/components/ui/navigation-menu'

export default function EntryLayout() {
  return (
    <>

      <header className="border-b-2 bg-white">
        <div className="flex h-16 items-center px-4">
          <div className="flex gap-6">
            <NavLink to="/" end className="font-bold text-4xl">
              Affluent
            </NavLink>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Invierte</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    CDT
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Aprende mas sobre nosotros</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    Vision
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" asChild>
              <NavLink to="/login" end>Login</NavLink>
            </Button>
            <Button variant="default" asChild>
              <NavLink to="/register" end>Register</NavLink>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}