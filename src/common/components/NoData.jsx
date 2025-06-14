import { NoDataImg } from "@assets/svgs";
import React from "react";

export function NoData() {
  return (
    <div className='w-fit absolute top-1/2 left-1/2 text-2xl font-semibold -translate-x-1/2 -translate-y-1/2'>
      <NoDataImg />
    </div>
  );
}
