import { Table, TableBody, TableHead, TableRow, Th, TableData } from "@common/components";

export function ReservationTable({ data }) {
  const hasData = Array.isArray(data) && data.length > 0;

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
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
