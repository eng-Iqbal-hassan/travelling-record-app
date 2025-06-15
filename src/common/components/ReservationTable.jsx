import { Table, TableBody, TableHead, TableRow, Th, TableData, Button, NoData } from "@common/components";

export function ReservationTable({ data, detailBtnClick, onSendEmail }) {
  const hasData = Array.isArray(data) && data?.length > 0;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Sr. No' />
          <Th text='Hotel' />
          <Th text='Reservation No.' />
          <Th text='Checked-In' />
          <Th text='Checked-Out' />
          <Th text='Nights' />
          <Th text='Debit' />
          <Th text='Credit' />
          <Th text='Balance' />
          <Th text='Action' className='w-[11.25rem]' />
        </TableRow>
      </TableHead>
      <TableBody>
        {hasData ? (
          [...data]?.reverse().map((item, index) => (
            <TableRow key={index}>
              <TableData text={data.length - index} />
              <TableData text={item.name || "-"} />
              <TableData text={item.reservationNo || "-"} />
              <TableData text={item.checkedIn || "-"} />
              <TableData text={item.checkedOut || "-"} />
              <TableData text={item.nts || "-"} />
              <TableData text={(item.paymentType === "debit" && item.pkrAmount) || "0.00"} />
              <TableData text={(item.paymentType === "credit" && item.pkrAmount) || "0.00"} />
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
