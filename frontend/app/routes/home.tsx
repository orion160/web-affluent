
import type { Route } from './+types/home'
import { NavLink } from 'react-router'
import StockInfoCard from '~/stock/StockInfoCard'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <nav>
      <NavLink to="/about" end>
        Home
      </NavLink>
      <br />
      <StockInfoCard />
    </nav>
  )
}
