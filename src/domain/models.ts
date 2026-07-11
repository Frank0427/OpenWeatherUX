import { z } from "zod";

export const SCHEMA_VERSION = "1.0.0" as const;

export const runStatusSchema = z.enum([
  "planned",
  "running",
  "complete",
  "partial",
  "failed",
]);
export type RunStatus = z.infer<typeof runStatusSchema>;

export const observationStatusSchema = z.enum([
  "complete",
  "partial",
  "failed",
]);
export type ObservationStatus = z.infer<typeof observationStatusSchema>;

export const evidenceLevelSchema = z.enum([
  "verified-fact",
  "strong-evidence",
  "hypothesis",
  "unknown",
]);
export type EvidenceLevel = z.infer<typeof evidenceLevelSchema>;

export const collectorCapabilitySchema = z.enum([
  "html",
  "screenshot",
  "network",
  "console",
  "headers",
  "native-navigation",
]);
export type CollectorCapability = z.infer<typeof collectorCapabilitySchema>;

export interface CollectorDescriptor {
  readonly id: string;
  readonly version: string;
  readonly capabilities: ReadonlySet<CollectorCapability>;
}

export interface CollectionRequest {
  readonly runId: string;
  readonly observationId: string;
  readonly entryUrl: URL;
  readonly outputDirectory: URL;
}

export interface CollectionResult {
  readonly status: ObservationStatus;
  readonly finalUrl?: URL;
  readonly limitations: readonly string[];
}

export interface Collector {
  readonly descriptor: CollectorDescriptor;
  collect(request: CollectionRequest): Promise<CollectionResult>;
}
