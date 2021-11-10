import React from "react";
import Link from "next/link";
import { Wrapper, LogoAndName, List, ListItem } from "./elements";

type SideBarProps = {
  className?: string;
  tabs: { href: string; name: string; selected?: boolean }[];
  imagePath: string;
  imageAlt: string;
  name: string;
};

export default function SideBar({
  className,
  tabs,
  imagePath,
  imageAlt,
  name,
}: SideBarProps): React.ReactElement {
  return (
    <Wrapper className={className}>
      <LogoAndName imagePath={imagePath} imageAlt={imageAlt} name={name} />
      <List>
        {tabs.map((tab) => {
          return (
            <Link href={tab.href} key={`sidebar-item-${tab.name}`}>
              <ListItem selected={tab.selected}>{tab.name}</ListItem>
            </Link>
          );
        })}
      </List>
    </Wrapper>
  );
}
