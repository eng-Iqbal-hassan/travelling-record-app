import { Table, TableBody, TableHead, TableRow, Th, TableData, Button } from "@common/components";

export function ReservationTable({ data, onClick }) {
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
          <Th text='Action' className='w-40' />
        </TableRow>
      </TableHead>
      <TableBody>
        {hasData ? (
          data?.map((item, index) => (
            <TableRow key={index}>
              <TableData text={index + 1} />
              <TableData text={item.name || "-"} />
              <TableData text={item.reservationNo || "-"} />
              <TableData text={item.checkedIn || "-"} />
              <TableData text={item.checkedOut || "-"} />
              <TableData text={item.nts || "-"} />
              <TableData text={(item.paymentType === "debit" && item.pkrAmount) || "0.00"} />
              <TableData text={(item.paymentType === "credit" && item.pkrAmount) || "0.00"} />
              <TableData text={item.balance || "-"} />
              <div className='p-2.5 w-40 border-b border-[#ccc]'>
                <Button className='bg-blue-600' title='Detail' onClick={onClick} />
              </div>
            </TableRow>
          ))
        ) : (
          <TableRow className='relative h-[71vh]'>
            <div className='w-fit absolute top-1/2 left-1/2 text-2xl font-semibold -translate-x-1/2'>No Data Found</div>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
