export default function FloatingCTA() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red shadow-lg transition-transform hover:scale-110"
      aria-label="카카오톡 상담"
    >
      {/* Kakao speech bubble icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.89 5.29 4.71 6.71L5.71 21l4.08-2.12c.72.08 1.46.12 2.21.12 5.52 0 10-3.58 10-8s-4.48-8-10-8z"
          fill="white"
        />
      </svg>
    </a>
  );
}
