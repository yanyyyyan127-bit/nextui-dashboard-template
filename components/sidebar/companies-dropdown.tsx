"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { AcmeLogo } from "../icons/acmelogo";
import { BottomIcon } from "../icons/sidebar/bottom-icon";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "美味楼",
    location: "北京市朝阳区",
    logo: <AcmeIcon />,
  });
  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          {company.logo}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              {company.name}
            </h3>
            <span className="text-xs font-medium text-default-500">
              {company.location}
            </span>
          </div>
          <BottomIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(e) => {
          if (e === "1") {
            setCompany({
              name: "顶级美食",
              location: "上海市浦东新区",
              logo: <AcmeIcon />,
            });
          }
          if (e === "2") {
            setCompany({
              name: "金牌酒楼",
              location: "广州市天河区",
              logo: <AcmeLogo />,
            });
          }
          if (e === "3") {
            setCompany({
              name: "家常菜馆",
              location: "成都市武侯区",
              logo: <AcmeIcon />,
            });
          }
          if (e === "4") {
            setCompany({
              name: "美味楼",
              location: "北京市朝阳区",
              logo: <AcmeIcon />,
            });
          }
        }}
        aria-label="Avatar Actions"
      >
        <DropdownSection title="餐厅分店">
          <DropdownItem
            key="1"
            startContent={<AcmeIcon />}
            description="上海市浦东新区"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            顶级美食
          </DropdownItem>
          <DropdownItem
            key="2"
            startContent={<AcmeLogo />}
            description="广州市天河区"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            金牌酒楼
          </DropdownItem>
          <DropdownItem
            key="3"
            startContent={<AcmeIcon />}
            description="成都市武侯区"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            家常菜馆
          </DropdownItem>
          <DropdownItem
            key="4"
            startContent={<AcmeIcon />}
            description="北京市朝阳区"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            美味楼
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
