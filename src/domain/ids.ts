import { randomBytes } from "node:crypto";

const RUN_ID_PATTERN = /^[0-9]{8}T[0-9]{6}Z-[a-z0-9]{8}$/;

function utcBasicTimestamp(date: Date): string {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

export function createRunId(now: Date = new Date()): string {
  return `${utcBasicTimestamp(now)}-${randomBytes(4).toString("hex")}`;
}

export function createObservationId(runId: string, sequence: number): string {
  if (!RUN_ID_PATTERN.test(runId)) {
    throw new Error(`Invalid run ID: ${runId}`);
  }
  if (!Number.isSafeInteger(sequence) || sequence < 1 || sequence > 999) {
    throw new Error("Observation sequence must be an integer from 1 to 999");
  }
  return `${runId}-${sequence.toString().padStart(3, "0")}`;
}
