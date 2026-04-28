import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

const items = [
  {
    name: "宫保鸡丁",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "45份",
    date: "¥1260",
  },
  {
    name: "红油豆腐",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "38份",
    date: "¥950",
  },
  {
    name: "水煮鱼",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "35份",
    date: "¥1225",
  },
  {
    name: "青椒肉丝",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "32份",
    date: "¥960",
  },
  {
    name: "土豆咖喱鸡",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "28份",
    date: "¥840",
  },
];

export const CardTransactions = () => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              菜品销售排名
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          {items.map((item) => (
            <div key={item.name} className="grid grid-cols-4 w-full">
              <div className="w-full">
                <Avatar
                  isBordered
                  color="secondary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              </div>

              <span className="text-default-900  font-semibold">
                {item.name}
              </span>
              <div>
                <span className="text-success text-xs">{item.amount}</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
