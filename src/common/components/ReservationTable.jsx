import { Table, TableBody, TableHead, TableRow, Th } from "@common/components";

export function ReservationTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Company' />
          <Th text='Contact' />
          <Th text='Country' />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <Th text='Company' />
          <Th text='Contact' />
          <Th text='Country' />
        </TableRow>
      </TableBody>
    </Table>
  );
}
