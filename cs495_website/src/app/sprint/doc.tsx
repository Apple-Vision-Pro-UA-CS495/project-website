import Link from "next/link";

interface Doc {
    iteration: string;
    fileName: string;
    href: string;
}

export default function Doc({ iteration, fileName, href}: Doc) {
    let fileFullName: string = fileName + " " + iteration
    return (
        <div className='text-xl font-normal text-left mt-[1em] underline'>
            <Link href={href} download target="_blank">
                {fileName}
            </Link>
        </div>
    )
}