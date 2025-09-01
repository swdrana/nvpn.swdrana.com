export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© 2024 SWDRana VPN. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}