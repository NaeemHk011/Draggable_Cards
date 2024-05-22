import { useRef } from 'react';
import Card from "./Card"
import Particle from './Particles';

interface DataType {
  desc: string;
  filesize: string;
  close: boolean;
  tag: {
    isOpen: boolean;
    tagTitle: string;
    tagColor: string;
  };
}

function Forground() {
  const ref = useRef(null);
  const data: DataType[] = [
    {
      desc: "Hi, I'm front end Developer.",
      filesize: "",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green" }
    },
    {
      desc: "Hi, I'm Backend Developer",
      filesize: "",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
    },
    {
      desc: "Hi, I'm Full Stack Developer.",
      filesize: "",
      close: false,
      tag: { isOpen: true, tagTitle: "Publish", tagColor: "yellow" }
    },
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      <Particle />
      {data.map((item: DataType) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Forground;