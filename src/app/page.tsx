import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";


export default function Home() {
    const {userId} = auth();
    
    if(userId){
      redirect('/dashboard');
    }
  return (
    <main className="">
      <div className="flex">
        <h1>Autenticação Next Js</h1>
        </div>
       <div>

       
       </div>
       
      
    </main>
  );
}
