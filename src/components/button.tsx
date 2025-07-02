"use client"
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type props = {
  label: string;
  className?: string;
  icon?: ReactNode;
  notFilled?: boolean;
  onClick?: string;
}
export const Button = ({ label, className, icon, notFilled, onClick }: props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`${onClick}`)}
      className={`py-3 px-10 font-semibold flex items-center gap-3 w-fit rounded-full cursor-pointer transition
        ${notFilled && 'border-2 border-blue-600 bg-white text-blue-600 hover:bg-zinc-100 '}
        ${!notFilled && 'bg-blue-600 text-white hover:bg-blue-700'} 
        ${className}`}
    >
      {label} {icon}
    </button>
  )
}