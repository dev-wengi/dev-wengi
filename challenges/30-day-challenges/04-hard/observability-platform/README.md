# Observability Platform

Category: Hard

## Project Overview

Build an Observability Platform that collects logs, metrics, or traces and presents operational insights for a system. The application should provide comprehensive monitoring capabilities for understanding system behavior and performance.

## Core Features

- Ingest telemetry data such as logs, metrics, or traces
- Display dashboards showing system health and performance
- Provide searchable or filterable operational data
- Show alerts or important events based on thresholds
- Correlate metrics, logs, and traces for root cause analysis
- A polished observability interface

## Technical Recommendations

- Backend: Node.js, Go, or Python for data ingestion and processing
- Storage: Time-series database (InfluxDB, Prometheus), Elasticsearch, or similar
- Ingestion: Implement log collectors, metric exporters, or trace receivers
- Processing: Stream processing with Kafka, RabbitMQ, or similar
- Dashboard: React, Vue, or Grafana-like interface for visualization
- Charts: Chart.js, D3.js, or similar for time-series visualization
- Alerting: Implement threshold-based alerting rules

## Success Criteria

- Users can understand system behavior from telemetry data
- The platform surfaces useful operational insights
- The final app demonstrates observability concepts effectively
- Logs, metrics, and traces are correlated meaningfully
- The dashboard provides real-time visibility into system health
