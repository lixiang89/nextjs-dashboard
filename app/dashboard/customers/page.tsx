import { fetchCustomers,fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers=await fetchFilteredCustomers(query);
  return <Table customers={customers} />
}
