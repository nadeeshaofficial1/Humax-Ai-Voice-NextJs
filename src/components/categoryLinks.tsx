import React from "react";

import {
    IconBriefcase,
    IconBulb,
    IconSchool,
    IconWriting,
    IconMoodSmile,
    IconHeart
}
 from "@tabler/icons-react"

const categories = [
    {
        label: "Business",
        icon: IconBriefcase,
    },
    {
        label: "Technology",
        icon: IconBulb,
    },
    {
        label: "Education",
        icon: IconSchool,
    },
    {
        label: "Writing",
        icon: IconWriting,
    },
    {
        label: "Communication",
        icon: IconMoodSmile,
    },
    {
        label: "Health",
        icon: IconHeart,
    },
];

const CategoryLinks: React.FC = () => {
    return (
        <div className="mt-10 sm:mt-20">
            {categories.map(({icon:Icon, label}) => (
                <div
                key={label}
                 className="
                 m-1 py-2 px-3 inline-flex items-center gap-x-2 text-md font-medium rounded-lg
                 border border-gray-200 shadow-sm hover:bg-neutral-800 hover:text-white hover:border-gray-300
                 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 cursor-pointer
                 text-white
                 ">

                    <Icon size={22} />
                    <p className="text-md ">{label}</p>
                </div>
            ))}
        </div>
    )
}
export default CategoryLinks;