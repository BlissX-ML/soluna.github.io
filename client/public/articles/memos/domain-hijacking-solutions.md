---
titleEn: "Domain Hijacking Solutions"
titleCh: "域名劫持解决方法"
tags: ["engineering"]
---

1. **问题**：劫持会返回假 IP，或者直接不返回 → 访问不到目标网站。
2. **常见应对方式**：
    - 使用**可信 DNS** 服务（如 8.8.8.8 Google DNS，1.1.1.1 Cloudflare）。
    - 启用 **DoH**（DNS over HTTPS） / **DoT**（DNS over TLS），对 DNS 请求加密。
    - 使用 **DNSSEC** 验证 DNS 响应的真实性。
3. **面试速答**：
    - **HTTPS 证书校验**、**DoH/DoT 加密 DNS 查询**，以及 **DNSSEC** 保证 DNS 响应不可篡改。