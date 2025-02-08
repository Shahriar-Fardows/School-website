import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Announcement = () => {
    const [scrollMSG, setScrollMSG] = useState([]);

    useEffect(() => {
        fetch('/announcement.json')
            .then(response => response.json())
            .then(data => setScrollMSG(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="bg-[#1C8E5A] overflow-hidden py-2">
            <div className="scroll-container">
                {scrollMSG.map((item) => (
                    <p key={item.id} className="text-white whitespace-nowrap px-5">
                        <Marquee>
                            {item.message}
                        </Marquee>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Announcement;

