# Phase 1 Regions

The canonical machine-readable list is [`config/regions.json`](config/regions.json). Locale and timezone are experimental defaults, not claims about all users in a region. A comparison should normally freeze them instead of automatically changing them with network location.

| Group          | Region         | Code | Slug             | Status  |
| -------------- | -------------- | ---- | ---------------- | ------- |
| Greater China  | China Mainland | CN   | `cn-mainland`    | Planned |
| Greater China  | Hong Kong      | HK   | `hong-kong`      | Planned |
| Greater China  | Macau          | MO   | `macau`          | Planned |
| Greater China  | Taiwan         | TW   | `taiwan`         | Planned |
| East Asia      | Japan          | JP   | `japan`          | Planned |
| East Asia      | South Korea    | KR   | `south-korea`    | Planned |
| Southeast Asia | Singapore      | SG   | `singapore`      | Planned |
| Southeast Asia | Malaysia       | MY   | `malaysia`       | Planned |
| Southeast Asia | Thailand       | TH   | `thailand`       | Planned |
| Southeast Asia | Indonesia      | ID   | `indonesia`      | Planned |
| Southeast Asia | Vietnam        | VN   | `vietnam`        | Planned |
| Southeast Asia | Philippines    | PH   | `philippines`    | Planned |
| South Asia     | India          | IN   | `india`          | Planned |
| Oceania        | Australia      | AU   | `australia`      | Planned |
| Oceania        | New Zealand    | NZ   | `new-zealand`    | Planned |
| North America  | United States  | US   | `united-states`  | Planned |
| North America  | Canada         | CA   | `canada`         | Planned |
| Europe         | United Kingdom | GB   | `united-kingdom` | Planned |
| Europe         | Germany        | DE   | `germany`        | Planned |
| Europe         | France         | FR   | `france`         | Planned |

Adding a region requires a decision record when it changes an active sampling plan. Each new entry needs a stable slug, ISO 3166-1 alpha-2 code, representative egress location, and explicit rollout phase.
