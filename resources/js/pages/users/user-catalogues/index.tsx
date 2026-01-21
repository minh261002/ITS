import { Head } from '@inertiajs/react';

import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Quản lý nhóm thành viên',
        href: '/user-catalogues',
    },
];

export default function UserCatalogue() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Quản lý nhóm thành viên" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                QL Nhóm thành viên
            </div>
        </AppLayout>
    );
}
