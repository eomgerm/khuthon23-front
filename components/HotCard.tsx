"use client";

type HotCardProps = {
  title: string;
  contents: string;
};

const HotCard = ({ title, contents }: HotCardProps) => {
  if (title.length > 15) {
    title = title.slice(0, 10) + "...";
  }
  if (contents.length > 50) {
    contents = contents.slice(0, 30) + "...";
  }
  return (
    <div className="w-64 h-52 bg-white/10 inline-block mr-2 rounded-lg shadow-md p-4 whitespace-normal">
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{`${contents}`}</p>
      </div>
    </div>
  );
};

export default HotCard;
