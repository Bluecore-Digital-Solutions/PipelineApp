import React, { useState } from "react";

const SubscriptionList = () => {
  // const [subs, setSubs] = useState<[]>([

  // ]);

  const list = [
    {
      id: 1,
      plan: "Silver plan upgrade",
      date: "Dec 2023",
      amount: 5000,
    },
    {
      id: 2,
      plan: "Bronze membership subscription",
      date: "Dec 2023",
      amount: 10000,
    },
  ];

  return (
    <ul className="flex flex-col gap-5 px-[10px] mt-3">
      {list.map((item) => (
        <li key={item.id} className="text-sm font-[500]">
          <p className="text-xs">{item.date}</p>
          <p>{item.plan}</p>

          <div className="flex justify-between items-center">
            {/* price */}
            <p>N{item.amount}</p>

            {/* status */}
            <p className="text-[#FF0000C9] text-xs">Approved</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SubscriptionList;
