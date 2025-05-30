import { Table, TableBody, TableHead, TableRow, Th, TableData, Button } from "@common/components";

export function VendorTable({ vendor, onUpdate, handleDelete }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Vendor' />
          <Th text='Email' />
          <Th text='Company Name' />
          <Th text='Mobile Number' />
          <Th text='Type' />
          <Th className='w-[12.0625rem]' text='Action' />
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
