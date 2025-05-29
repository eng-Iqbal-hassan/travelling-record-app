import { Table, TableBody, TableHead, TableRow, Th, TableData } from "@common/components";

export function ReservationTable() {
  const ReservationTableData = [
    {
      serial: "1",
      hotelName: "01/01/2024",
      reservation: "4",
      checkedIn: "01/01/2024",
      checkedOut: "03/01/2024",
      nights: "2",
      debit: "190",
      credit: "230",
      total: "900",
    },
    {
      serial: "1",
      hotelName: "01/01/2024",
      reservation: "4",
      checkedIn: "01/01/2024",
      checkedOut: "03/01/2024",
      nights: "2",
      debit: "190",
      credit: "230",
      total: "900",
    },
    {
      serial: "1",
      hotelName: "01/01/2024",
      reservation: "4",
      checkedIn: "01/01/2024",
      checkedOut: "03/01/2024",
      nights: "2",
      debit: "190",
      credit: "230",
      total: "900",
    },
    {
      serial: "1",
      hotelName: "01/01/2024",
      reservation: "4",
      checkedIn: "01/01/2024",
      checkedOut: "03/01/2024",
      nights: "2",
      debit: "190",
      credit: "230",
      total: "900",
    },
  ];
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
          <Th text='Total Amount' />
        </TableRow>
      </TableHead>
      <TableBody>
        {ReservationTableData.map((data, index) => (
          <TableRow key={index}>
            <TableData text={data.serial} />
            <TableData text={data.hotelName} />
            <TableData text={data.reservation} />
            <TableData text={data.checkedIn} />
            <TableData text={data.checkedOut} />
            <TableData text={data.nights} />
            <TableData text={data.debit} />
            <TableData text={data.credit} />
            <TableData text={data.total} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
