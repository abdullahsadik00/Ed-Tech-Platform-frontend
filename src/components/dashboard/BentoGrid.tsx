'use client';
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import React, { useState } from 'react';
// import { SortableItem } from './SortableItem';
import { cn } from '@/lib/utils';
import { Role } from '@/types/user';
import type { DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { SortableItem } from '../bento/SortableItem';

type BentoItem = {
    id: string;
    component: React.ReactNode;
    col: number;
    row: number;
}
export const BentoGrid = ({ initialItems, role }: { initialItems: BentoItem[], role: Role }) => {
    const [items, setItems] = useState(initialItems);
    const [activeId, setActiveId] = useState<string | null>(null)
    const handleDragStart = (event: any) => {
        setActiveId(event.activeId.id);
    }

    const hanldeDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id)
                const newIndex = items.findIndex((item) => item.id === over.id)
                return arrayMove(items, oldIndex, newIndex)
            })
        }
        setActiveId(null);
    }
    return (<DndContext
        collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={hanldeDragEnd}>
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
            <SortableContext items={items} strategy={rectSortingStrategy}>
                {items.map((item) => (
                    <SortableItem
                        key={item.id}
                        id={item.id}
                        className={cn(
                            'bg-white p-4 rounded-xl border shadow-sm',
                            `col-span-${item.col} row-span-${item.row}`
                        )}
                        role={role}>
                        {item.component}
                    </SortableItem>
                ))}
            </SortableContext>
        </div>
        <DragOverlay>
            {activeId ? (
                <div className="bg-white p-4 rounded-xl border shadow-lg transform scale-105">
                    {items.find(i => i.id === activeId)?.component}
                </div>
            ) : null}
        </DragOverlay>
    </DndContext>)
}
