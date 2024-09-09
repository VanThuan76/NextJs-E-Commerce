import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { ICategory } from '@/server/_types/category-type';

import { CellAction } from './cell-action';

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
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'description',
        header: 'Description',
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
