"use client";
import { IconArrowDown, IconChevronsRight } from "@tabler/icons-react";
import Link from "next/link";
import Lines from "./Lines";

type Props = {
  pageName: string;
  pageLink: string;
};

const Breadcrumbs = ({ pageName, pageLink }: Props) => {
  return (
    <section className="spy120px relative overflow-hidden bg-primary/5">
      <div className="container">
        <div className="flex items-center justify-between max-xs:flex-col max-xs:gap-10">
          <div>
            <h3 className="d3 title-animation font-medium capitalize">
              {pageName}
            </h3>
            <div className="xl-text mt-6 flex items-center gap-2">
              <Link href={`/`}>Home</Link>
              <IconChevronsRight />
              <Link href={`${pageLink}`} className="capitalize text-primary">
                {pageName}
              </Link>
            </div>
          </div>

          <Link
            href="#scrollPosition"
            className="alter-btn btn-anim group/link relative z-10 inline-flex size-[140px] items-center justify-center gap-4 overflow-hidden rounded-full border border-black-3 bg-inherit font-semibold text-black-4 hover:border-accent-3 "
          >
            <div className="flex flex-col items-center justify-center">
              <p className="capitalize">Scroll Down</p>
              <IconArrowDown size={32} stroke={1} className="max-sm:size-8" />
            </div>
            <span className="pointer-events-none absolute z-[-1] h-0 w-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-accent-3 duration-700 group-hover/link:w-[calc(100%*2.25)] group-hover/link:pt-[calc(100%*2.25)]"></span>
          </Link>
        </div>
      </div>
      <Lines />
    </section>
  );
};

export default Breadcrumbs;
