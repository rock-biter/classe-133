import Filters from './Filters';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className='navbar'>
          <div>
            Logo
          </div>

          {/* filters */}
          <Filters />
        </div>
      </div>
    </header>
  )
}