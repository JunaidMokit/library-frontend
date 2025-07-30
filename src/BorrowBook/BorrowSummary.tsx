import { useGetBorrowSummaryQuery } from "../Api/baseApi";

export default function BorrowSummary() {
    const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

    if (isLoading) return <p className="text-center mt-10">Loading summary...</p>;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Borrow Summary</h1>

            <table className="min-w-full table-auto border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 border text-left">Book Title</th>
                        <th className="p-3 border text-left">ISBN</th>
                        <th className="p-3 border text-left">Total Quantity Borrowed</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((item: any, idx: number) => (
                        <tr key={idx} className="border-t hover:bg-gray-50">
                            <td className="p-3 border">{item.book.title}</td>
                            <td className="p-3 border">{item.book.isbn}</td>
                            <td className="p-3 border">{item.totalQuantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
