import { Loader2 } from 'lucide-react';
import React from 'react';

import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';

interface Props {
    loading?: boolean;
    title?: string;
    description?: string;
    height?: string;
    isShowHeader?: boolean;
    isShowFooter?: boolean;
    children: React.ReactNode;
    footerChildren?: React.ReactNode;
}

const CustomCard = ({
    loading,
    title,
    description,
    height,
    isShowHeader,
    isShowFooter,
    children,
    footerChildren,
}: Props) => {
    return (
        <div className="relative overflow-hidden rounded-sm">
            {isShowHeader && (
                <CardHeader className="border-b">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            )}
            <CardContent className={`py-8 ${height ?? 'h-48'}`}>
                {children}
            </CardContent>
            {isShowFooter && (
                <CardFooter className="flex justify-center">
                    {footerChildren}
                </CardFooter>
            )}
            {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 dark:bg-black/40">
                    <Loader2 className="size-8 animate-spin text-muted-foreground" />
                </div>
            )}
        </div>
    );
};

export default CustomCard;
