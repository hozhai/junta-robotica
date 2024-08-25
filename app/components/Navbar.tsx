import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-evenly align-center fixed min-w-full">
            <div className="flex justify-center items-center">
                <Image
                    src="https://dummyimage.com/500x500/000/fff&text=+LOGO+"
                    width={80}
                    height={80}
                    alt="Logo Placeholder Image"
                />
                <h3 className="mx-5 text-slate-300">FESRO</h3>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                </ul>
            </div>
        </nav>
    );
}
