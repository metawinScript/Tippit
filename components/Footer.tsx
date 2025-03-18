
import Image from "next/image";

type Props = {
    className?: string;
};

const navigation = [
    {
        name: "Tippit",
        href: "",
    },
];

export default function Footer() {
    return (
        <footer className="bg-gypsum mt-auto border-black border-t">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-black hover:text-forest"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">{item.name}</span>
                        </a>
                    ))}
                  
                </div>
            </div>
        </footer>
    );
}
