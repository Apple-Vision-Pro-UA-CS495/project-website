import Link from "next/link";

interface Doc {
    iteration: string;
    fileName: string;
    href: string;
    download: Boolean
}

export default function Doc({ iteration, fileName, href, download}: Doc) {
    return (
        <div className='text-xl font-normal text-left mt-[1em] underline'>
            <Link href={href} download={download} target="_blank">
                {fileName}
            </Link>
        </div>
    )
}