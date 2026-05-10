import React from 'react'

function SearchField({ showInNavbar = false }) {
  const [focused, setFocused] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 730)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 730)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile && !showInNavbar) return null
  if (!isMobile && showInNavbar) return null

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      maxWidth: showInNavbar ? '100%' : '568px',
      margin: showInNavbar ? '0' : '10px 110 110 101',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        height: '40px',
        border: focused ? '1.5px solid #1a73e8' : '1px solid #d1d5db',
        borderRight: 'none',
        borderRadius: '40px 0 0 40px',
        paddingLeft: '16px',
        paddingRight: '8px',
        background: 'inherit',
        boxSizing: 'border-box',
        boxShadow: focused ? 'inset 0 1px 3px rgba(0,0,0,0.1)' : 'none',
        transition: 'border 0.2s'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="#aaa" style={{ flexShrink: 0, marginRight: '8px' }}>
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
        </svg>
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1, minWidth: 0, height: '100%',
            outline: 'none', border: 'none',
            background: 'transparent', fontSize: '15px', color: '#111',
          }}
        />
      </div>

      <button style={{
        height: '40px', width: '64px', background: '#f8f8f8',
        border: '1px solid #d1d5db', borderLeft: '1px solid rgba(0,0,0,0.1)',
        borderRadius: '0 40px 40px 0', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, transition: 'background 0.2s'
      }}
        onMouseEnter={e => e.currentTarget.style.background = '#e8e8e8'}
        onMouseLeave={e => e.currentTarget.style.background = '#f8f8f8'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="#555">
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
        </svg>
      </button>
    </div>
  )
}

export default SearchField