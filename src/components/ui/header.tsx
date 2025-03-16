"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, MoveRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

interface NavigationItem {
    title: string;
    href?: string;
    description?: string;
    items?: {
        title: string;
        href: string;
        description?: string;
    }[];
}

function Header() {
    const navigationItems: NavigationItem[] = [
        {
            title: "Company",
            description: "Learn more about our mission and vision",
            items: [
                {
                    title: "About",
                    href: "#vision",
                },
                {
                    title: "Demo",
                    href: "https://www.youtube.com/watch?v=cEo4WlCanMc",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background/80 backdrop-blur-sm border-b border-zinc-800/50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo - Always visible */}
                <div className="flex items-center">
                    <Link href="/" className="font-semibold text-lg md:text-xl tracking-[0.2em] hover:text-primary/90 transition-colors">
                        PROCEPTION
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.items ? (
                                        <>
                                            <NavigationMenuTrigger className="h-9">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="w-[200px] p-2">
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                asChild
                                                                key={subItem.title}
                                                            >
                                                                <Link
                                                                    href={subItem.href}
                                                                    className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                                >
                                                                    <span>{subItem.title}</span>
                                                                    <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <Link href={item.href || "#"}>{item.title}</Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center gap-4">
                        <Button asChild variant="outline" size="sm">
                            <Link href="#investors">Partner With Us</Link>
                        </Button>
                        <Button asChild size="sm">
                            <Link href="#careers">Join Our Team</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-zinc-800/50">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-6 bg-background/95 backdrop-blur-sm">
                        <nav className="flex flex-col gap-4">
                            {navigationItems.map((item) => (
                                <div key={item.title} className="space-y-3">
                                    <div className="font-medium">{item.title}</div>
                                    {item.items && (
                                        <div className="flex flex-col gap-2 pl-4">
                                            {item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                        
                        <div className="flex flex-col gap-3">
                            <Button asChild variant="outline" className="w-full justify-center">
                                <Link href="#investors" onClick={() => setOpen(false)}>
                                    Partner With Us
                                </Link>
                            </Button>
                            <Button asChild className="w-full justify-center">
                                <Link href="#careers" onClick={() => setOpen(false)}>
                                    Join Our Team
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header }; 