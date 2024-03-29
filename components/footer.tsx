import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; 2024 Lijin Wilson. All right reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.Js (App router & Server Actions), TypeScript, Tailwind CSS,
        Framer motion, React Email and Resend, Vercel hosting.
      </p>
    </footer>
  );
}
