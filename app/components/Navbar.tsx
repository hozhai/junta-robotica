import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center fixed min-w-full px-12">
            <div className="">
                <ul className="flex justify-center items-center list-none">
                    <li>Home</li>
                </ul>
            </div>
            <div className="flex justify-center items-center self-start">
                <Image
                    src="https://dummyimage.com/500x500/000/fff&text=+LOGO+"
                    width={80}
                    height={80}
                    alt="Logo Placeholder Image"
                />
            </div>
            <div>
                <ul className="flex justify-center items-center list-none">
                    <li>Home</li>
                </ul>
            </div>
        </nav>
    );
}
