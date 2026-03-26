export function Footer() {
  return (
    <footer className="py-8 text-center bg-black border-t border-white/10">
      <p className="text-sm text-gray-500 font-mono">
        Designed & Built by Shubham
      </p>
      <p className="text-xs text-gray-600 mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
