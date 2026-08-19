"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesList() {
  return (
    <>
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          isActive={index === 0}
          onHover={() => {}}
        />
      ))}
    </>
  );
}
