// components/widgets/AnnouncementsWidget.tsx
'use client';
import { useQuery } from '@tanstack/react-query';
// import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/lib/api';

interface Announcement {
    id: string;
    title: string;
    content: string;
}

export function AnnouncementsWidget() {
    const { data, isLoading } = useQuery<Announcement[]>({
        queryKey: ['announcements'],
        queryFn: async () => {
            const response = await api.get('/announcements');
            return response.data;
        },
    });

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Latest Announcements</h3>
            {isLoading ? (
                <div className="space-y-3">
                    {/* <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-2/3" /> */}
                </div>
            ) : (
                data?.map((announcement) => (
                    <div key={announcement.id} className="space-y-1">
                        <h4 className="text-sm font-medium">{announcement.title}</h4>
                        <p className="text-sm text-muted-foreground">
                            {announcement.content}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}