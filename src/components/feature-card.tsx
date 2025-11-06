import { Card, CardBody, CardHeader } from "@heroui/react";
import { type Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

/**
 * Reusable feature card component
 * Displays a feature with icon, title, and description
 * Includes hover animations and accessibility features
 */
export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <Card
      className="glass-effect transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] cursor-pointer border border-divider/50"
      isPressable
    >
      <CardHeader className="flex gap-3">
        <div
          className={`w-12 h-12 rounded-xl bg-linear-to-br from-${feature.colorClass}/20 to-${feature.colorClass}/5 flex items-center justify-center shadow-sm`}
          aria-hidden="true"
        >
          <Icon className={`w-6 h-6 text-${feature.colorClass}`} />
        </div>
        <div className="flex flex-col">
          <p className="text-md font-semibold">{feature.title}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-foreground-600">{feature.description}</p>
      </CardBody>
    </Card>
  );
}
