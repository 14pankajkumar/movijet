import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-black bg-opacity-30 py-8">
      <div className="mx-auto max-w-7xl flex">
        <div className='mx-2'>
          <Link href="/policy">Privacy policy</Link>
        </div>

        <div className='mx-2'>
          <Link href="/contactus">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
