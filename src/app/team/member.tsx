import { StaticImageData } from 'next/image';
import Image from "next/image";
import {gmail} from "../../../assets/icons/icon"; 

interface Member {
    name: string;
    description: string;
    contact: string;
    picture: StaticImageData;
}

export default function Member({ name, description, picture, contact}: Member) {
    let email: string = 'mailto:' + contact;

    return (
        <div className='flex flex-col justify-between items-center text-base bg-gray-100 p-6 rounded-2xl w-xs h-120 text-black'>
            <Image
                src={picture}
                alt="Member Photo"
                className="relative rounded-full w-24 border-2 border-orange-300"
            />
            <h2 className="font-semibold text-xl">{name}</h2>
            <h3 className="mb-4">{description}</h3>
            <a href={email} target='_blank'>
                <div>{gmail}</div>
            </a>
        </div>
    )
}