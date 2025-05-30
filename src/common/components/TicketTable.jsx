import { Table, TableBody, TableHead, TableRow, Th, TableData, Button } from "@common/components";

export function TicketTable({ data }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Sr. No' />
          <Th text='Date' />
          <Th text='Vendor' />
          <Th text='Description' />
          <Th text='Debit (Sell)' />
          <Th text='Credit (Buy)' />
          <Th text='Balance' />
          <Th text='Action' />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className='h-[3.75rem]'>
            <TableData text={index + 1} />
            <TableData text={item.date || "-"} />
            <TableData text={item.vendor.name || "-"} />
            <TableData text={item.description || "-"} />
            <TableData text={item.debit || "-"} />
            <TableData text={item.credit || "-"} />
            <TableData text={item.balance || "-"} />
            <div className='p-2.5'>
              <Button className='bg-blue-600' title='Email' />
            </div>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
