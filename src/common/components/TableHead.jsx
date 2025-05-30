export function TableHead({ children, className }) {
  return <thead className={`bg-[#000080] text-white ${className}`}>{children}</thead>;
}
