import React from "react";

const departments = [
    {
        name: "Cardiology",
        value: 25,
        img: "https://plus.unsplash.com/premium_vector-1725498874800-49ea959a5368?q=80&w=880&auto=format&fit=crop",
    },
    {
        name: "Orthopedics",
        value: 10,
        img: "https://plus.unsplash.com/premium_vector-1726065008180-80714a645638?w=500&auto=format&fit=crop&q=60",
    },
    {
        name: "General OPD",
        value: 20,
        img: "https://plus.unsplash.com/premium_vector-1724672970115-3b8ef4f3165b?w=500&auto=format&fit=crop&q=60",
    },
    {
        name: "Neurology",
        value: 10,
        img: "https://plus.unsplash.com/premium_vector-1726297593118-ec7d2a2d5a83?q=80&w=880&auto=format&fit=crop",
    },
];

function Department() {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {departments.map((dept, index) => (
                    <div
                        key={index}
                        className="shadow-lg rounded-xl p-4 flex items-center justify-between hover:shadow-2xl transition-shadow"
                    >
                        <div>
                            <h2 className="text-gray-600 text-lg font-semibold">{dept.name}</h2>
                            <div className="flex justify-center items-center rounded-full w-16 h-16 mt-2 bg-green-200 text-lg font-bold">
                                {dept.value}
                            </div>
                        </div>
                        <div>
                            <img
                                src={dept.img}
                                alt={dept.name}
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Department;
