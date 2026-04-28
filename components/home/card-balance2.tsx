import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";

export const CardBalance2 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-default-900">今日订单数</span>
            <span className="text-default-900 text-xs">Today Orders</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-default-900 text-xl font-semibold">
            128
          </span>
          <span className="text-success text-xs">+ 8.2%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success-600 text-xs">
                {"↓"}
              </span>
              <span className="text-xs">92</span>
            </div>
            <span className="text-default-900 text-xs">已完成</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-warning text-xs">{"⏱"}</span>
              <span className="text-xs">28</span>
            </div>
            <span className="text-default-900 text-xs">进行中</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"❌"}</span>
              <span className="text-xs">8</span>
            </div>
            <span className="text-default-900 text-xs">取消</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
