import { MdOutlineRestorePage } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { BoundingBox, motion } from "framer-motion";

export default function Card({ data, reference }: { data: any, reference: React.RefObject<Element> | false | Partial<BoundingBox> | undefined }) {
    // ...

    return (
        <motion.div
            drag dragConstraints={reference}
            whileDrag={{ scale: 2 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
            className='relative w-32 h-44 flex-shrink-0 rounded-[50px] bg-zinc-900/90 px-5 py-3 overflow-hidden text-white'>
            <MdOutlineRestorePage />
            <p className='text-sm leading-tight text-semibold mt-2 text-white'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0'>
                <div className="flex items-center justify-between px-2 py-2 mb-3">
                    <h5 className="ml-2">{data.filesize}</h5>

                    <span className="w-4 h-4 p-1 bg-zinc-600 rounded-full flex items-center justify-center m-2">
                        {data.close ? <IoCloseSharp /> : <FaDownload size=".7em" color='#fff' />}
                    </span>
                </div>
                <div className={`tag w-full py-4 ${data.tag.tagColor === "yellow" ? "bg-yellow-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className="text-sm">{data.tag.tagTitle}</h3>
                </div>
            </div>
        </motion.div>
    );
}