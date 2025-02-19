import { MousePointer2 } from "lucide-react";
import React from "react";

type PointerProps = {
    name: string;
    color?: "red" | "blue";
};

const Pointer: React.FC<PointerProps> = ({ name, color = "blue" }) => {
    return (
        <div>
            <MousePointer2 size={25} className="mb-1" />
            <p
                className={`ml-5 inline-flex rounded-full font-bold text-sm px-2 rounded-tl-none 
                    ${color === "red" ? "bg-red-500" : "bg-blue-500"}`}
            >
                {name}
            </p>
        </div>
    );
};

export default Pointer;
