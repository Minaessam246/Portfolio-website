// "use client"
import "./globals.css";




// export default function RootLayout({children}:{ children: React.ReactNode }) {
//   const y=useRouter()
//   useEffect(() => {
// y.push("home")
//   }, [y])
  
//   return (
//     <>
   
    
//     <html lang="en">
//       <body className="">
//         <div className="fixed top-0 left-0 right-0 z-10">
//         <Navbar/>
//         </div>
//         {children??<span className="loader h-2/4"></span>}
//       </body>
//     </html>
//      </>
//   );
// }
// app/layout.tsx or RootLayout.tsx


import { Suspense } from 'react';
import Navbar from "./_componenets/navbar/page";
import RedirectWrapper from "./_componenets/redirectWrapper/page";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 left-0 right-0 z-10">
          <Navbar />
        </div>

        <RedirectWrapper />

        <Suspense fallback={<span className="loader"></span>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}

