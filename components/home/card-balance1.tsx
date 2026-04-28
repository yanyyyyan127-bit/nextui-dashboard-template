import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export const CardBalance1 = () => {
  return (
    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex gap-2.5">
          <div className="flex flex-col">
            <span className="text-white">每日销售总额</span>
            <span className="text-white text-xs">Today Revenue</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">¥8,540</span>
          <span className="text-success text-xs">+ 12.5%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="text-xs text-white">128</span>
            </div>
            <span className="text-white text-xs">订单数</span>
          </div>

          <div>
            <div>
              <span className="text-xs text-white">4.8</span>
            </div>
            <span className="text-white text-xs">评分</span>
          </div>

          <div>
            <div>
              <span className="text-xs text-white">342</span>
            </div>
            <span className="text-white text-xs">人次</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
