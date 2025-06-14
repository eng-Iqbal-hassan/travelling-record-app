import { Table, TableBody, TableHead, TableRow, Th, TableData, Button, NoData } from "@common/components";

export function TrailTable({ data }) {
  const hasData = Array.isArray(data) && data?.length > 0;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Sr. No' />
          <Th text='Description' />
          <Th text='Type' />
          <Th text='Payment Type' />
          <Th text='Debit' />
          <Th text='Credit' />
          <Th text='Balance' />
        </TableRow>
      </TableHead>
      <TableBody>
        {hasData ? (
          [...data].reverse()?.map((item, index) => (
            <TableRow key={index} className='h-[3.75rem]'>
              <TableData text={data.length - index} />
              <TableData text={item.name} />
              <TableData text={item.type || "-"} />
              <TableData text={item.paymentType || "-"} />
              <TableData text={(item.paymentType === "debit" && item.amount) || "0.00"} />
              <TableData text={(item.paymentType === "credit" && item.amount) || "0.00"} />
              <TableData text={item.balance || "-"} />
            </TableRow>
          ))
        ) : (
          <NoData />
        )}
      </TableBody>
    </Table>
  );
}
