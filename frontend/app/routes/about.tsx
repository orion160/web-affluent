import { Button } from '~/components/ui/button'

import type { Route } from './+types/home'
import { NavLink } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function About() {
  return (
    <nav>
      <NavLink to="/" end>
        About
      </NavLink>
    </nav>
  )
}
