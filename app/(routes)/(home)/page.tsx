import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Hero from "../_components/Hero";
import ProductList from "../_components/Product/ProductList";

export default function Home() {
  return (
    <div>
      <Hero/>
     <ProductList/>
    </div>
  );
}
