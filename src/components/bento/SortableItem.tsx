// components/bento/SortableItem.tsx
'use client';
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Role } from '@/types/user';

interface SortableItemProps {
    id: string;
    className?: string;
    role: Role;
    children: React.ReactNode;
}

export function SortableItem({ id, className, role, children }: SortableItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        zIndex: isDragging ? 1 : 0,
        position: 'relative',
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={className}
            role={role}
        >
            {children}
        </div>
    );
}