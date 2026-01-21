import { Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from './ui/collapsible';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={
                            item.items && item.items.length > 0
                                ? item.items.some((subItem) =>
                                      page.url.startsWith(subItem.url),
                                  )
                                : !!item.isActive
                        }
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                {item.items && item.items.length > 0 ? (
                                    <SidebarMenuButton
                                        isActive={
                                            item.items.some((subItem) =>
                                                page.url.startsWith(
                                                    subItem.url,
                                                ),
                                            ) ||
                                            page.url.startsWith(
                                                typeof item.href === 'string'
                                                    ? item.href
                                                    : item.href.url,
                                            )
                                        }
                                        tooltip={{ children: item.title }}
                                    >
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                ) : (
                                    <SidebarMenuButton
                                        asChild
                                        isActive={page.url.startsWith(
                                            typeof item.href === 'string'
                                                ? item.href
                                                : item.href.url,
                                        )}
                                        tooltip={{ children: item.title }}
                                    >
                                        <Link href={item.href} prefetch>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                )}
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem, subIndex) => (
                                        <SidebarMenuSubItem key={subIndex}>
                                            <SidebarMenuSubButton
                                                asChild
                                                isActive={page.url.startsWith(
                                                    subItem.url,
                                                )}
                                            >
                                                <Link
                                                    href={subItem.url}
                                                    prefetch
                                                >
                                                    <span>{subItem.title}</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
