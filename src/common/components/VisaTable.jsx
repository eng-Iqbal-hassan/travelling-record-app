import { Table, TableBody, TableHead, TableRow, Th, TableData } from "@common/components";

export function VisaTable({ data }) {
  const hasData = Array.isArray(data) && data?.length > 0;
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th text='Sr. No' />
          <Th text='Visa Holder' />
          <Th text='Passport Number' />
          <Th text='Voucher Number' />
          <Th text='Payment Type' />
          <Th text='Debit' />
          <Th text='Credit' />
          <Th text='Balance' />
        </TableRow>
      </TableHead>
      <TableBody>
        {hasData ? (
          [...data]?.reverse().map((item, index) => (
            <TableRow key={index} className='h-[3.75rem]'>
              <TableData text={data.length - index} />
              <TableData text={item.name} />
              <TableData text={item.passportNumber || "-"} />
              <TableData text={item.voucherNumber || "-"} />
              <TableData text={item.paymentType || "-"} />
              <TableData text={(item.paymentType === "debit" && item.pkrAmount) || "0.00"} />
              <TableData text={(item.paymentType === "credit" && item.pkrAmount) || "0.00"} />
              <TableData text={item.balance || "-"} />
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
