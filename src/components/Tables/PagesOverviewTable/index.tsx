import React from "react";
import Link from "next/link";
import Warning from "components/Warning";
import {
  Table,
  BodyRow,
  TableData,
  TableLink,
  BodyText,
  HeadRow,
  HeadText,
} from "./elements";

type PagesOverviewTableProps = {
  pages: [
    {
      _id: string;
      name: string;
      lastUpdated: Date;
    }
  ];
  isAdmin: boolean;
  suggestions: [
    {
      suggestions: [];
      status: string;
      page: string;
    }
  ];
  className?: string;
};

export default function PagesOverviewTable({
  pages,
  isAdmin,
  suggestions,
  className,
}: PagesOverviewTableProps): React.ReactElement {
  return (
    <Table className={className}>
      <thead>
        <HeadRow>
          <TableData width={300}>
            <HeadText>{"Page"}</HeadText>
          </TableData>
          <TableData width={258}>
            <HeadText>{"Last updated"}</HeadText>
          </TableData>
          {isAdmin && (
            <TableData width={329}>
              <HeadText>{"Suggested Updates?"}</HeadText>
            </TableData>
          )}
        </HeadRow>
      </thead>
      <tbody>
        {pages.map((page) => {
          const hasSuggestions =
            suggestions.filter((suggestion) => {
              return (
                suggestion.page === page._id && suggestion.status === "waiting"
              );
            }).length > 0;

          return (
            <BodyRow key={page.name}>
              <TableData width={300}>
                <Link href={`/page/${page.name}`}>
                  <TableLink>{page.name}</TableLink>
                </Link>
              </TableData>
              <TableData width={258}>
                <BodyText>
                  {`last updated ${new Date(
                    page.lastUpdated
                  ).toLocaleDateString()}`}
                </BodyText>
              </TableData>
              {isAdmin && (
                <TableData width={329}>
                  {hasSuggestions && (
                    <Warning
                      text={"Updated Suggestion"}
                      actionText={"See Update"}
                      href={`/suggestion`}
                    ></Warning>
                  )}
                </TableData>
              )}
            </BodyRow>
          );
        })}
      </tbody>
    </Table>
  );
}
