import { Table, TableBody, TableHead, TableRow, Th, TableData } from "@common/components";

export function TicketTable() {
  const TicketTableData = [
    {
      serial: "1",
      date: "01/01/2024",
      description: "4",
      debit: "90.00",
      credit: "40.00",
      balance: "180",
    },
    {
      serial: "1",
      date: "01/01/2024",
      description: "4",
      debit: "90.00",
      credit: "40.00",
      balance: "180",
    },
    {
      serial: "1",
      date: "01/01/2024",
      description: "4",
      debit: "90.00",
      credit: "40.00",
      balance: "180",
    },
    {
      serial: "1",
      date: "01/01/2024",
      description: "4",
      debit: "90.00",
      credit: "40.00",
      balance: "180",
    },
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Sr. No' />
          <Th text='Date' />
          <Th text='Description' />
          <Th text='Debit (Sell)' />
          <Th text='Credit (Buy)' />
          <Th text='Balance' />
        </TableRow>
      </TableHead>
      <TableBody>
        {TicketTableData.map((data, index) => (
          <TableRow key={index}>
            <TableData text={data.serial} />
            <TableData text={data.date} />
            <TableData text={data.description} />
            <TableData text={data.debit} />
            <TableData text={data.credit} />
            <TableData text={data.balance} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
