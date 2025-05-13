import Link from "next/link"
import { Logo } from "@/components/logo"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Logo />
            <p className="text-muted-foreground text-sm mt-3">
              Connecting content creators with skilled clippers to maximize reach and engagement.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ClipFarm. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
