import { Table, TableBody, TableHead, TableRow, Th, TableData, Button } from "@common/components";

export function VisaTable() {
  const VisaTable = [
    {
      name: "Ali",
      passportNumber: "AS987",
      voucherNumber: "A876",
    },
    {
      name: "Noman",
      passportNumber: "AS988",
      voucherNumber: "A877",
    },
    {
      name: "Haider",
      passportNumber: "AS989",
      voucherNumber: "A878",
    },
    {
      name: "Nabeel",
      passportNumber: "AS990",
      voucherNumber: "A879",
    },
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Name' />
          <Th text='Passport Number' />
          <Th text='Voucher Number' />
          <Th className='w-[12.0625rem]' text='Action' />
        </TableRow>
      </TableHead>
      <TableBody>
        {VisaTable.map((item, index) => (
          <TableRow key={index} className='h-[3.75rem]'>
            <TableData text={item.name} />
            <TableData text={item.passportNumber} />
            <TableData text={item.voucherNumber} />
            <div className='flex gap-2 p-2.5 w-[12.0625rem] border-b border-[#ccc]'>
              <Button type='button' title='Update' className='bg-blue-600' onClick={() => onUpdate(item)} />
              <Button type='button' title='delete' className='bg-blue-600' onClick={() => handleDelete(item.id)} />
            </div>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
