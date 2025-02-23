import type React from "react";
import { Container, SimpleGrid, Title, Text, List } from "@mantine/core";
import { Card } from "./Card";
import { Button } from "./Button";

export interface PricingPlan {
    name: string;
    price: string;
    features: string[];
    ctaText: string;
    onCtaClick: () => void;
}

export interface PricingTableProps {
    plans: PricingPlan[];
}

export const PricingTable: React.FC<PricingTableProps> = ({ plans }) => {
    return (
        <Container size="lg" className="py-16">
            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3 }} // Responsive columns
                spacing="lg"
            >
                {plans.map((plan, index) => (
                    <Card key={index} className="text-center">
                        <Title order={3} className="mb-2">
                            {plan.name}
                        </Title>
                        <Text className="text-3xl font-bold mb-4">{plan.price}</Text>
                        <List className="mb-6">
                            {plan.features.map((feature, featureIndex) => (
                                <List.Item key={featureIndex}>{feature}</List.Item>
                            ))}
                        </List>
                        <Button onClick={plan.onCtaClick} fullWidth>
                            {plan.ctaText}
                        </Button>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
};