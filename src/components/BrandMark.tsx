import logo from '../assets/logo.png'

type BrandMarkProps = {
  className?: string
}

export default function BrandMark({ className }: BrandMarkProps) {
  return (
    <img
      src={logo}
      alt=""
      className={className}
      width={26}
      height={13}
      decoding="async"
    />
  )
}
