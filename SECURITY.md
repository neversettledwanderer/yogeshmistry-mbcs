# Website security configuration

## Required production security headers

### Content Security Policy

The source HTML includes an enforcing `Content-Security-Policy` meta element as
defence-in-depth. The production site must also return the policy as an HTTP
response header so scanners and browsers receive it before processing the
document.

Use this production header value:

```text
default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; script-src 'self'; style-src 'self'; style-src-attr 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; media-src 'self'; manifest-src 'self'; worker-src 'self' blob:; frame-src 'none'; form-action 'self'; upgrade-insecure-requests
```

`frame-ancestors 'none'` appears only in the response-header version because
browsers ignore that directive when it is delivered through a meta element.

### HTTP Strict Transport Security

The production HTTPS responses must also include:

```text
Strict-Transport-Security: max-age=31536000
```

HSTS cannot be configured through an HTML meta element. It must be set by the
server or edge network on HTTPS responses, including the apex-domain redirect.

Start with a 12-month max age. Keep `includeSubDomains` disabled until every
current and planned subdomain has been confirmed to support HTTPS. Keep
`preload` disabled until the domain has operated successfully with HSTS and the
long-lived consequences of browser preload submission have been accepted.

## Current hosting constraint

The site is served directly by GitHub Pages. GitHub Pages does not provide a
repository setting for arbitrary HTTP response headers, so committing the HTML
policy alone does not clear a scanner finding that specifically requires a CSP
header.

To apply the header while retaining GitHub Pages as the origin:

1. Proxy both `yogeshmistry.com` and `www.yogeshmistry.com` through a CDN that
   supports response-header modification.
2. Create a response-header rule that sets `Content-Security-Policy` to the
   value above on all responses.
3. Enable HSTS at the edge with a 12-month max age, initially without
   `includeSubDomains` or `preload`.
4. Keep the canonical redirect from the apex domain to `www` and ensure it also
   receives the HSTS header.
5. Verify both hosts after DNS and CDN changes:

```bash
curl -I https://yogeshmistry.com/
curl -I https://www.yogeshmistry.com/
```

Both responses should contain exactly one `content-security-policy` header and
exactly one `strict-transport-security` header.

### Recommended Cloudflare settings

- **SSL/TLS → Edge Certificates → Always Use HTTPS:** On
- **SSL/TLS → Edge Certificates → HTTP Strict Transport Security:** On
- **Max Age Header:** 12 months
- **Apply HSTS policy to subdomains:** Off initially
- **Preload:** Off initially
- **Rules → Transform Rules → Modify Response Header:** set the CSP value above
  for all requests to both hostnames

After all subdomains have been inventoried and verified over HTTPS,
`includeSubDomains` can be assessed as a separate hardening change. Preloading
should remain a separate, explicit decision.

## Policy design

- Scripts, styles, images, fonts, connections, media, manifests and workers are
  restricted to the site's own origin unless explicitly required.
- Inline JavaScript and `eval` are not allowed.
- Inline style attributes remain allowed because the React animation layer uses
  them; inline style elements are not allowed.
- Object and frame content are blocked.
- Framing the site is blocked by the header-only `frame-ancestors` directive.
- Insecure subresources are upgraded to HTTPS.
- Browsers are instructed to use HTTPS for 12 months after receiving the HSTS
  header.

When adding analytics, embeds, third-party fonts or external APIs, update the
policy narrowly for the exact required origins rather than adding broad `*` or
`https:` source expressions.
