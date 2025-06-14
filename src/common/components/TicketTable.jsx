import { Table, TableBody, TableHead, TableRow, Th, TableData, Button, NoData } from "@common/components";

export function TicketTable({ data, detailBtnClick, onSendEmail }) {
  const hasData = Array.isArray(data) && data?.length > 0;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Sr. No' />
          <Th text='Date' />
          <Th text='Vendor' />
          <Th text='Debit (Sell)' />
          <Th text='Credit (Buy)' />
          <Th text='Balance' />
          <Th className='w-[11.25rem]' text='Action' />
        </TableRow>
      </TableHead>
      <TableBody>
        {hasData ? (
          [...data]?.reverse().map((item, index) => (
            <TableRow key={index} className='h-[3.75rem]'>
              <TableData text={data.length - index} />
              <TableData text={item.date || "-"} />
              <TableData text={item.vendor.name || "-"} />
              <TableData text={item.debit || "-"} />
              <TableData text={item.credit || "-"} />
              <TableData text={item.balance || "-"} />
              <div className='flex gap-2 p-2.5 w-[11.25rem] table-actions'>
                <Button className='bg-blue-600' title='Email' onClick={() => onSendEmail(item.id)} />
                <Button className='bg-blue-600' title='Detail' onClick={() => detailBtnClick(item)} />
              </div>
            </TableRow>
          ))
        ) : (
          <NoData />
        )}
      </TableBody>
    </Table>
  );
}
