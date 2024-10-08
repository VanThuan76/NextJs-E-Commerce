import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Badge } from '@/shared/components/ui/badge';

import { ICategory } from '@/server/_types/category-type';

import { CellAction } from './cell-action';
import { formatCurrencyVN } from '@/shared/utils/format-money';

export const columns: ColumnDef<ICategory>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'category.name',
        header: 'Category',
        cell: ({ getValue }) => {
            const categoryName = getValue() as string;
            return (
                <Badge className='text-center'>{categoryName}</Badge>
            );
        }
    },
    {
        accessorKey: 'imageUrl',
        header: 'Image',
        cell: ({ getValue }) => {
            const imageUrl = getValue() as string;
            return (
                <Image
                    src={imageUrl}
                    alt="Product Image"
                    width={100}
                    height={100}
                    className='w-[100px] h-auto object-cover'
                />
            );
        }
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'description',
        header: 'Description',
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ getValue }) => {
            return <p>{formatCurrencyVN(Number(getValue()))}</p>
        }
    },
    {
        accessorKey: 'createdAt',
        header: 'Created At',
        cell: ({ getValue }) => {
            const date = new Date(getValue() as number);
            return date.toLocaleDateString();
        }
    },
    {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        cell: ({ getValue }) => {
            const date = new Date(getValue() as number);
            return date.toLocaleDateString();
        }
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellAction data={row.original} />
    }
];
