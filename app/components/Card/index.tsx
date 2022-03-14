export function Card() {
  return (
    <article
      className={
        'firefox:bg-slate-750 flex rounded-lg border border-main bg-glass text-white backdrop-blur-lg duration-300 hover:cursor-pointer hover:bg-slate-700'
      }
    >
      <div className="flex w-full flex-col">
        <div className="flex p-6">
          <span>Team1</span>
          <span>test</span>
          <div className="mt-3 flex flex-1">
            <p className={'w-1/3 text-left text-2xl font-bold opacity-50'}>
              100
            </p>

            <p className="flex-1 whitespace-nowrap px-3 pt-1.5 text-center uppercase"></p>

            <p className={'w-1/3 text-right text-2xl font-bold opacity-50'}>
              200
            </p>
          </div>

          <span>Team2</span>
          <span>test</span>
        </div>

        <footer className="border-t border-main py-2 text-center text-sm">
          View details
        </footer>
      </div>
    </article>
  )
}
