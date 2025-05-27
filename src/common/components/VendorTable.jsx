import { Table, TableBody, TableHead, TableRow, Th, TableData } from "@common/components";
import { useEffect, useState } from "react";

export function VendorTable({ vendor }) {
  // const vendorTableData = [
  //   {
  //     vendor: "Ali",
  //     email: "Ali@gmail.com",
  //     company: "Ali Co.",
  //     mobile: "090",
  //     type: "ticket",
  //   },
  //   {
  //     vendor: "Ahmed",
  //     email: "Ahmed@gmail.com",
  //     company: "Ahmed Co.",
  //     mobile: "091",
  //     type: "hotel",
  //   },
  //   {
  //     vendor: "Sara",
  //     email: "Sara@gmail.com",
  //     company: "Sara Co.",
  //     mobile: "092",
  //     type: "hotel",
  //   },
  //   {
  //     vendor: "Zara",
  //     email: "Zara@gmail.com",
  //     company: "Zara Co.",
  //     mobile: "093",
  //     type: "ticket",
  //   },
  //   {
  //     vendor: "Ali",
  //     email: "Ali@gmail.com",
  //     company: "Ali Co.",
  //     mobile: "090",
  //     type: "ticket",
  //   },
  //   {
  //     vendor: "Ahmed",
  //     email: "Ahmed@gmail.com",
  //     company: "Ahmed Co.",
  //     mobile: "091",
  //     type: "hotel",
  //   },
  //   {
  //     vendor: "Sara",
  //     email: "Sara@gmail.com",
  //     company: "Sara Co.",
  //     mobile: "092",
  //     type: "hotel",
  //   },
  //   {
  //     vendor: "Zara",
  //     email: "Zara@gmail.com",
  //     company: "Zara Co.",
  //     mobile: "093",
  //     type: "ticket",
  //   },
  //   {
  //     vendor: "Ali",
  //     email: "Ali@gmail.com",
  //     company: "Ali Co.",
  //     mobile: "090",
  //     type: "ticket",
  //   },
  //   {
  //     vendor: "Ahmed",
  //     email: "Ahmed@gmail.com",
  //     company: "Ahmed Co.",
  //     mobile: "091",
  //     type: "hotel",
  //   },
  //   {
  //     vendor: "Sara",
  //     email: "Sara@gmail.com",
  //     company: "Sara Co.",
  //     mobile: "092",
  //     type: "hotel",
  //   },
  //   {
  //     vendor: "Zara",
  //     email: "Zara@gmail.com",
  //     company: "Zara Co.",
  //     mobile: "093",
  //     type: "ticket",
  //   },
  // ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Vendor' />
          <Th text='Email' />
          <Th text='Company Name' />
          <Th text='Mobile Number' />
          <Th text='Type' />
        </TableRow>
      </TableHead>
      <TableBody>
        {vendor.map((item, index) => (
          <TableRow key={index}>
            <TableData text={item.name} />
            <TableData text={item.email} />
            <TableData text={item.companyName} />
            <TableData text={item.phoneNumber} />
            <TableData text={item.type} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
