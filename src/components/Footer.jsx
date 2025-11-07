export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pilates Market • Built for easy studio bookings
      </div>
    </footer>
  );
}
