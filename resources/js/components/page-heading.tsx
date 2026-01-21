import { Link } from '@inertiajs/react';

import { BreadcrumbItem } from '@/types';

interface Props {
    heading: string;
    breadcrumb: BreadcrumbItem[];
}

const PageHeading = ({ heading, breadcrumb }: Props) => {
    return (
        <div className="page-heading border-b border-sidebar-border bg-white px-[20px] py-[25px]">
            <h2 className="mb-2 text-2xl font-normal uppercase">{heading}</h2>
            <ol className="custom-breadcrumb flex flex-1">
                {breadcrumb.map((item, index) => (
                    <li key={index}>
                        <Link className="text-[0.875rem]" href={item.href}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default PageHeading;
