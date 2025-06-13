import { Table, TableBody, TableHead, TableRow, Th, TableData, Button } from "@common/components";

export function VendorTable({ vendor, onUpdate, handleDelete }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Sr. No' />
          <Th text='Vendor' />
          <Th text='Email' />
          <Th text='Company Name' />
          <Th text='Mobile Number' />
          <Th className='w-[12.0625rem]' text='Action' />
        </TableRow>
      </TableHead>
      <TableBody>
        {[...vendor].reverse().map((item, index) => (
          <TableRow key={index} className='h-[3.75rem]'>
            <TableData text={vendor.length - index} />
            <TableData text={item.name} />
            <TableData text={item.email} />
            <TableData text={item.companyName} />
            <TableData text={item.phoneNumber} />
            <div className='flex gap-2 p-2.5 w-[12.0625rem] table-actions'>
              <Button type='button' title='Update' className='bg-blue-600' onClick={() => onUpdate(item)} />
              <Button type='button' title='delete' className='bg-blue-600' onClick={() => handleDelete(item.id)} />
            </div>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
