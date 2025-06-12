import { Table, TableBody, TableHead, TableRow, Th, TableData, Button } from "@common/components";

export function VisaTable({ data }) {
  const hasData = Array.isArray(data) && data?.length > 0;
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
        {data?.map((item, index) => (
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
        {/* {hasData ? (
          data?.map((item, index) => (
            <TableRow key={index} className='h-[3.75rem]'>
              <TableData text={item.name} />
              <TableData text={item.passportNumber} />
              <TableData text={item.voucherNumber} />
              <div className='flex gap-2 p-2.5 w-[12.0625rem] border-b border-[#ccc]'>
                <Button type='button' title='Update' className='bg-blue-600' onClick={() => onUpdate(item)} />
                <Button type='button' title='delete' className='bg-blue-600' onClick={() => handleDelete(item.id)} />
              </div>
            </TableRow>
          ))
        ) : (
          <TableRow className='relative h-[71vh]'>
            <div className='w-fit absolute top-1/2 left-1/2 text-2xl font-semibold -translate-x-1/2'>No Data Found</div>
          </TableRow>
        )} */}
      </TableBody>
    </Table>
  );
}
