import { Grid, Text } from "@mantine/core";
import Image from "next/image";

interface RoleContent {
    teacher: string;
    student: string;
    parent: string;
    admin: string;
}
interface HeroColumnProps {
    selectedRole: keyof RoleContent;
    roleImages: RoleContent;
    roleDescriptions: RoleContent;
    roleQuotes: RoleContent;
}

export default function HeroColumn({
    selectedRole,
    roleImages,
    roleDescriptions,
    roleQuotes,
}: HeroColumnProps) {
    return (
        <Grid.Col span={{ base: 12, lg: 7 }} className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-900/60 z-10" />
            <Image
                src={roleImages[selectedRole]}
                alt={`${selectedRole} background`}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 transform scale-105 hover:scale-100"
                loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center text-white p-8 space-y-6 backdrop-blur-sm bg-black/10 rounded-3xl border border-white/10 max-w-xl mx-auto">
                    <Text className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                        {roleDescriptions[selectedRole]}
                    </Text>
                    <Text className="text-lg text-white/90 max-w-md">
                        {roleQuotes[selectedRole]}
                    </Text>
                    <div className="flex items-center justify-center space-x-4 text-white/60 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-primary/50" />
                            <span>Trusted by 1000+ institutions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-primary/50" />
                            <span>WCAG 2.1 AA Compliant</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
        </Grid.Col>
    );
}