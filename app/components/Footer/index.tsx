function Footer() {
  const linkStyle = 'border-b-gray-900 text-gray-900 hover:border-b-[1px]'

  return (
    <footer className="container mx-auto pt-16 text-center">
      <p>
        {`Developped by `}
        <a
          className={linkStyle}
          href="https://github.com/hugogarnier"
          target="_blank"
          rel="noreferrer"
        >
          Hugo
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
