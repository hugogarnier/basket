function Footer() {
  const linkStyle = 'border-b-blue-500 text-blue-500 hover:border-b-[1px]'

  return (
    <footer className="container mx-auto pt-16 text-center">
      <p>
        {`Developped by `}
        <a
          className={linkStyle}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          Hugo Garnier
        </a>

        {` with `}
        <a
          className={linkStyle}
          href="https://remix.run"
          target="_blank"
          rel="noreferrer"
        >
          Remix.run
        </a>
      </p>
    </footer>
  )
}

export default Footer
