import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export const CardBalance3 = () => {
  return (
    <Card className="xl:max-w-sm bg-success rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <div className="flex flex-col">
            <span className="text-white">最热菜品</span>
            <span className="text-white text-xs">Top Dish</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">宫保鸡丁</span>
          <span className="text-warning text-xs">🔥热销</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="text-xs text-white">45</span>
            </div>
            <span className="text-white text-xs">销售量</span>
          </div>

          <div>
            <div>
              <span className="text-xs text-white">4.9</span>
            </div>
            <span className="text-white text-xs">评分</span>
          </div>

          <div>
            <div>
              <span className="text-xs text-white">¥28</span>
            </div>
            <span className="text-white text-xs">单价</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
