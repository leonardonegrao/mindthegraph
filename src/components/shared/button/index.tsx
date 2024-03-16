import Link from 'next/link'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  btnType: 'primary' | 'bordered';
}

export default function Button({ href = '', btnType = 'primary', ...rest }: ButtonProps) {
  const buttonClasses = {
    common: 'px-6 py-2.5 rounded-full font-bold',
    primary: 'bg-primary-btn-pattern text-white',
    bordered: 'bg-transparent border border-white text-white',
  }

  return (
    <>
      {(href && href.includes('http')) && (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={`${buttonClasses.common} ${buttonClasses[btnType]}`}
        >
          {rest.children}
        </a>
      )}

      {(href && !href.includes('http')) && (
        <Link
          href={href}
          className={`${buttonClasses.common} ${buttonClasses[btnType]}`}
        >
          {rest.children}
        </Link>
      )}

      {!href && (
        <button
          {...rest}
          className={`${buttonClasses.common} ${buttonClasses[btnType]}`}
        >
          {rest.children}
        </button>
      )}
    </>
  )
}