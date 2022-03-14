export function Table({ children }: React.PropsWithChildren<{}>) {
  return (
    <table className="my-5 min-w-full overflow-hidden rounded-xl border  bg-glass text-center text-white shadow-lg md:min-w-min">
      {children}
    </table>
  )
}

export function TableCell({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <td
      className={`${
        (className && className) || ''
      } border-t border-main px-3 py-2`}
    >
      {children}
    </td>
  )
}

export function TableHead({ children }: React.PropsWithChildren<{}>) {
  return <thead className="bg-slate-900 font-bold">{children}</thead>
}
