import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div class="display: justify- container flex items-center p-5">
        <div class="h-10 w-10 animate-spin rounded-full border-4 border-blue-300 border-b-blue-400"></div>
        <div>
          <p className="ml-3 animate-pulse">Loading...</p>
        </div>
      </div>
    </main>
  );
}
