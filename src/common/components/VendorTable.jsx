import { Table, TableBody, TableHead, TableRow, Th, TableData, Button } from "@common/components";

export function VendorTable({ vendor }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Vendor' />
          <Th text='Email' />
          <Th text='Company Name' />
          <Th text='Mobile Number' />
          <Th text='Type' />
          <Th text='Action' />
        </TableRow>
      </TableHead>
      <TableBody>
        {vendor.map((item, index) => (
          <TableRow key={index} className='h-[3.75rem]'>
            <TableData text={item.name} />
            <TableData text={item.email} />
            <TableData text={item.companyName} />
            <TableData text={item.phoneNumber} />
            <TableData text={item.type} />
            <div className='flex gap-2 p-2.5 w-fit'>
              <Button type='button' title='Update' className='bg-blue-600' />
              <Button type='button' title='delete' className='bg-blue-600' />
            </div>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
