import './globals.css'
import Link from 'next/link'

export const metadata = { title: 'IAM Store' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white border-b">
          <div className="container flex items-center justify-between py-4">
            <div className="text-xl font-bold">IAM Miguela Manalo</div>
            <nav className="flex gap-3">
              <Link href="/">Dashboard</Link>
              <Link href="/login">Login</Link>
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/payment">Payment</Link>
              <Link href="/status">Status</Link>
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="banner-shape mt-8">
          <div className="container py-6 text-white text-sm">
            <div>Email: iamworldwidemiguelamanalo@gmail.com</div>
            <div>Shop Address: Calapan City, Oriental Mindoro, Philippines</div>
            <div>Facebook: facebook.com/iam.miguela.manalo</div>
          </div>
        </footer>
      </body>
    </html>
  )
}
