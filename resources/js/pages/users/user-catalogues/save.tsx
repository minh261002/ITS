import { Head } from '@inertiajs/react';

import PageHeading from '@/components/page-heading';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem, type PageConfig } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Quản lý nhóm thành viên',
        href: '/user-catalogues',
    },
    {
        title: 'Thêm nhóm thành viên mới',
        href: '/user-catalogues/create',
    },
];

const pageConfig: PageConfig = {
    heading: 'Thêm nhóm thành viên mới',
};

export default function UserCatalogueSave() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Quản lý nhóm thành viên" />
            <div className="page-wrapper flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl">
                <PageHeading
                    heading={pageConfig.heading}
                    breadcrumb={breadcrumbs}
                />
            </div>
        </AppLayout>
    );
}
