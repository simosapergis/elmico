AGENTS.md

Purpose

This repository contains a production-ready business website.

The website must be:

* Fast
* Responsive
* Accessible
* SEO-ready
* Secure by default
* Maintainable
* Semantically structured
* Optimized for mobile
* Easy to deploy
* Easy to reuse as a template for future client projects

The agent must prioritize:

1. Correctness
2. Simplicity
3. Performance
4. Accessibility
5. SEO
6. Maintainability
7. Visual quality
8. Development speed

Do not introduce complexity unless it provides a clear benefit to the project.

⸻

1. Core Principles

1.1 Keep the architecture simple

This project is primarily a content-focused business website.

Prefer static rendering whenever possible.

Avoid unnecessary:

* Client-side JavaScript
* Dependencies
* Third-party scripts
* API calls
* Animations
* Framework complexity
* State management
* Client-side rendering

Do not introduce:

* Databases
* Authentication
* Custom backend services
* Complex APIs
* Server-side functionality

unless explicitly required by the project.

If a feature can be implemented statically, implement it statically.

⸻

2. Technology Rules

Use Astro and Tailwind CSS as the default development stack.

Use a different framework or styling system only when explicitly requested by the user.

For an existing project with an established stack, preserve that stack unless the user explicitly requests a migration.

Do not change frameworks or major dependencies unless explicitly requested.

Default architecture for static business websites:

* Astro
* TypeScript where appropriate
* Tailwind CSS
* Minimal JavaScript
* Git for version control
* Static deployment where possible

If Next.js is used instead of Astro:

* Prefer static generation / SSG for content pages
* Avoid unnecessary client components
* Avoid unnecessary server-side functionality
* Use Server Components by default where applicable
* Use client-side JavaScript only when required

Do not migrate between Astro and Next.js during a project unless explicitly requested.

⸻

3. Project Structure

Keep the project organized and predictable.

Prefer a structure similar to:

src/
├── components/
├── layouts/
├── pages/
├── content/
├── data/
├── styles/
├── utils/
└── assets/

Use reusable components for repeated UI patterns.

Examples:

* Header
* Navigation
* Footer
* Hero
* CTA
* ServiceCard
* Testimonial
* Gallery
* FAQ
* ContactSection
* Breadcrumbs

Do not duplicate large blocks of markup when a reusable component is appropriate.

Do not over-abstract simple one-off sections.

⸻

4. Content Requirements

Content must be:

* Original
* Specific to the business
* Accurate
* Useful
* Natural
* Written for humans first

Do not generate generic filler content.

Do not fabricate:

* Experience
* Years in business
* Certifications
* Awards
* Partnerships
* Customer numbers
* Statistics
* Reviews
* Testimonials
* Qualifications
* Services
* Locations served
* Business claims

If information is missing, use a placeholder or request the information.

Never invent facts to make a page look complete.

4.1 Language and Localization

Greek is the default and required website language.

Before implementation begins, ask the user whether English should also be supported for the specific project.

Do not assume that English content or English routes are required unless the user confirms them.

When English is requested, support it as the second locale and implement both Greek and English completely for all intended localized pages and shared interface content.

Even when a project initially launches only in Greek, keep the content and routing architecture ready to add English and further locales without restructuring the application.

Follow scalable internationalization best practices:

* Define supported locales and the default locale in one central configuration.
* Use standard locale codes, such as `el` for Greek and `en` for English.
* Keep translatable interface strings and localized content separate from components and business logic.
* Avoid duplicating entire components solely to change their language.
* Use a consistent locale-aware URL strategy.
* Prefer unprefixed canonical URLs for the default Greek locale and locale prefixes such as `/en/` for non-default locales, unless the existing production URL structure requires a different approach.
* Generate localized pages statically wherever possible.
* Set the correct `lang` attribute on every localized page.
* Localize titles, meta descriptions, Open Graph metadata, structured data, navigation, forms, validation messages, and other user-facing text.
* Add valid reciprocal `hreflang` links for each available language version and use `x-default` where appropriate.
* Use self-referencing canonical URLs for each localized page rather than canonicalizing all language versions to one locale.
* Provide an accessible language switcher when more than one locale is published.
* Preserve the equivalent page when switching languages where that translation exists.
* Define an explicit fallback policy, but never silently publish untranslated or mixed-language content as complete.
* Do not create indexable placeholder locale pages or advertise a locale that is not fully available.
* Ensure translated content is accurate, natural, and reviewed; do not invent or alter business facts during translation.

Do not add a client-side internationalization runtime when static localized routes and content can solve the requirement.

⸻

5. Business Information

Clearly communicate, where applicable:

* Business name
* What the business does
* Main services
* Target customers
* Location
* Service area
* Contact information
* Phone number
* Email
* Address
* Opening hours
* Main call to action

Maintain consistency throughout the website.

The same business information must not appear with conflicting values.

⸻

6. UX Requirements

Every page must have a clear purpose.

Users should understand within seconds:

1. What the business does
2. Who it serves
3. Where it operates
4. Why they should trust it
5. What action they should take next

Use clear CTAs.

Examples:

* Call now
* Request a quote
* Book an appointment
* Contact us
* Get directions
* Request information

Do not overload pages with unnecessary CTAs.

⸻

7. Responsive Design

The website must work correctly on:

* Mobile
* Tablet
* Desktop
* Large desktop screens

Test at minimum:

* 320px width
* 375px width
* 390px width
* 768px width
* 1024px width
* 1280px width
* 1440px width

Requirements:

* No horizontal overflow
* No clipped text
* No broken layouts
* No unusable navigation
* No overlapping elements
* Buttons must remain usable
* Text must remain readable
* Images must scale correctly
* Navigation must work on mobile

Mobile is a first-class experience, not an afterthought.

⸻

8. Semantic HTML

Use semantic HTML wherever appropriate.

Prefer:

<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>

Use buttons for actions.

Use links for navigation.

Do not use clickable <div> elements when a semantic element exists.

Forms must use:

* <form>
* <label>
* appropriate input types
* accessible error states
* meaningful names

⸻

9. Heading Structure

Every indexable page must have:

* Exactly one primary H1 unless a justified exception exists
* Logical H2 structure
* H3 headings only when appropriate

Do not use headings purely for visual styling.

Heading hierarchy should represent document structure.

Example:

H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2

Do not skip heading levels without a valid reason.

⸻

10. SEO — Technical Requirements

Every indexable page must have:

* Unique <title>
* Unique meta description
* Canonical URL
* Open Graph metadata
* Twitter/X metadata where appropriate
* Correct language declaration
* Clean URL
* Appropriate structured data
* Correct heading hierarchy
* Internal links where useful

The website must generate:

* sitemap.xml
* robots.txt

The sitemap must:

* Include intended indexable pages
* Exclude pages that should not be indexed
* Use canonical URLs
* Be valid XML

robots.txt must:

* Be syntactically valid
* Not accidentally block important pages
* Reference the sitemap when appropriate

⸻

11. SEO Titles

Each page must have a unique, descriptive title.

Titles should:

* Describe the page accurately
* Reflect search intent
* Include location where relevant
* Avoid keyword stuffing
* Be written for users

Do not create duplicate titles.

Do not use generic titles such as:

Home
Services
Welcome
Website

unless they are part of a more descriptive title.

⸻

12. Meta Descriptions

Each indexable page must have a unique meta description.

Descriptions must:

* Accurately describe the page
* Be useful to searchers
* Naturally include relevant context
* Avoid keyword stuffing
* Include a meaningful value proposition when appropriate

Do not duplicate the same description across pages.

⸻

13. URL Requirements

URLs must be:

* Short
* Descriptive
* Stable
* Human-readable
* Lowercase
* Hyphen-separated

Prefer:

/services/

or:

/accounting-services-athens/

Avoid:

/page?id=123

Avoid unnecessary URL nesting.

Do not change existing production URLs without considering redirects.

⸻

14. Canonical URLs

Every indexable page must have a canonical URL.

Canonical URLs must:

* Be absolute
* Match the intended preferred URL
* Use HTTPS in production
* Be consistent with sitemap URLs

Do not canonicalize unrelated pages to the homepage.

⸻

15. Open Graph

Every important shareable page should have:

* og:title
* og:description
* og:url
* og:type
* og:image
* og:site_name

Use appropriate image dimensions.

Do not use broken or missing OG images.

⸻

16. Structured Data / JSON-LD

Use JSON-LD when structured data provides genuine value.

Possible types include:

* Organization
* LocalBusiness
* ProfessionalService
* Service
* BreadcrumbList
* WebSite
* Article
* FAQPage where appropriate and compliant with current search guidelines

Do not add structured data merely for the sake of adding schema.

Structured data must accurately represent visible page content.

Never fabricate:

* Ratings
* Reviews
* Prices
* Services
* Awards
* Business information

Validate JSON-LD before production.

⸻

17. Local SEO

For local businesses:

Clearly display:

* Business name
* Address where appropriate
* Phone
* Service area
* Opening hours where applicable

Maintain consistent NAP information:

* Name
* Address
* Phone

Use LocalBusiness or a more specific appropriate schema type where applicable.

Include location information naturally.

Do not keyword-stuff location names.

Do not create doorway pages.

Do not generate dozens of nearly identical location pages solely to manipulate rankings.

Location-specific pages must provide genuine unique value.

⸻

18. Internal Linking

Create useful internal links between relevant pages.

Important pages should not become orphan pages.

Use descriptive anchor text.

Avoid:

Click here
Read more
Learn more

when a more descriptive anchor is appropriate.

Example:

Accounting services for small businesses

is preferable to:

Click here

⸻

19. Images

Images must be optimized.

Prefer:

* AVIF
* WebP
* appropriately compressed JPEG/PNG when required

Requirements:

* Correct dimensions
* Appropriate compression
* Responsive sizing
* Lazy loading for non-critical images
* Eager loading only for important above-the-fold images
* Width and height attributes where appropriate
* Descriptive alt text for meaningful images
* Empty alt text for purely decorative images

Do not use huge original images when a smaller version is sufficient.

Do not load unnecessary image libraries.

⸻

20. Accessibility

Follow practical WCAG principles.

Ensure:

* Sufficient color contrast
* Keyboard navigation
* Visible focus states
* Semantic HTML
* Form labels
* Accessible buttons
* Accessible links
* Meaningful alt text
* Proper heading hierarchy
* No inaccessible hover-only interactions
* Logical tab order
* Reduced-motion support where appropriate

Do not use color as the only way to communicate information.

⸻

21. Performance

Performance is a core requirement.

Minimize:

* JavaScript
* CSS
* Fonts
* Third-party scripts
* Large images
* Render-blocking resources

Prefer:

* Static HTML
* Optimized assets
* Modern image formats
* Local fonts when appropriate
* System fonts when possible
* Lazy loading
* Code splitting where applicable
* Minimal client-side hydration

Avoid unnecessary animations.

Avoid large UI libraries for simple websites.

⸻

22. Core Web Vitals

Optimize for:

* Largest Contentful Paint (LCP)
* Interaction to Next Paint (INP)
* Cumulative Layout Shift (CLS)

Pay particular attention to:

LCP

* Optimize hero images
* Avoid huge blocking assets
* Minimize render-blocking resources
* Preload critical resources only when justified

INP

* Minimize JavaScript
* Avoid long-running main-thread tasks
* Avoid unnecessary event handlers
* Keep interactive components lightweight

CLS

* Reserve image dimensions
* Avoid injecting content above existing content
* Avoid layout shifts caused by fonts
* Avoid dynamically inserted UI that moves page content

⸻

23. JavaScript Rules

JavaScript must be used only when necessary.

Before adding JavaScript, ask:

Can this be done with HTML/CSS?

If yes, prefer HTML/CSS.

Avoid:

* unnecessary client-side state
* unnecessary hydration
* unnecessary animations
* unnecessary libraries
* unnecessary event listeners

A static business website should contain as little client-side JavaScript as reasonably possible.

⸻

24. Third-Party Services

Minimize third-party dependencies.

Before adding a third-party script, evaluate:

* Performance impact
* Privacy implications
* Security
* Accessibility
* Necessity
* Whether a native/static alternative exists

Do not add:

* chat widgets
* tracking pixels
* analytics
* embedded social feeds
* map embeds
* marketing scripts

unless they provide clear value or are explicitly required.

⸻

25. Forms

Forms must:

* Have labels
* Have meaningful field names
* Validate input
* Provide useful error messages
* Provide success feedback
* Be usable on mobile
* Protect against obvious spam where appropriate

Do not rely blindly on client-side validation.

Use a reliable form endpoint/service for static sites.

Do not expose API keys or secrets in client-side code.

⸻

26. Security

Never commit secrets.

Do not expose:

* API keys
* private tokens
* passwords
* credentials
* private environment variables

Use environment variables for secrets.

Do not put secrets in:

* HTML
* JavaScript bundles
* Git
* public configuration

Keep dependencies reasonably up to date.

⸻

27. Privacy / GDPR

The website may operate in the EU.

Do not assume that all third-party services are privacy-neutral.

When using:

* Google Analytics
* Meta Pixel
* YouTube embeds
* Google Maps
* advertising scripts
* marketing cookies

consider applicable consent requirements.

Do not claim legal compliance.

The agent may implement technical mechanisms but must not provide legal advice.

If privacy requirements are unclear, flag the issue rather than inventing a solution.

⸻

28. Content Accuracy

The agent must never invent client information.

If required information is missing:

1. Use a clearly marked placeholder, or
2. Ask for the information.

Never silently invent:

* Phone numbers
* Addresses
* Email addresses
* Reviews
* Certifications
* Experience
* Pricing
* Business hours
* Staff
* Awards
* Statistics

⸻

29. SEO Scope

The website provides:

* Technical SEO
* On-page SEO
* Local SEO foundations
* Structured data
* Performance optimization
* Crawlability
* Indexability
* Internal linking

The website does NOT guarantee:

* Google rankings
* Page-one rankings
* First position
* Organic traffic
* Backlinks
* Domain authority

Do not make ranking guarantees.

⸻

30. Backlinks / Authority

Backlinks and authority are outside the technical website implementation.

The agent may:

* Suggest backlink opportunities
* Suggest local directories
* Suggest partnerships
* Suggest content strategies
* Suggest PR opportunities
* Suggest digital PR ideas

The agent must not:

* Fabricate backlinks
* Claim backlinks exist when they do not
* Purchase links without explicit authorization
* Generate spam links
* Create manipulative doorway networks

⸻

31. AI Content Rules

AI-generated content must be reviewed for:

* Accuracy
* Relevance
* Natural language
* Repetition
* Factual correctness
* Local relevance
* Business-specific details
* Keyword stuffing

AI should assist with production, not invent business facts.

Avoid generic AI phrases such as:

* “We are passionate about excellence”
* “Your trusted partner”
* “Tailored solutions for your needs”

unless they are actually appropriate and differentiated.

Content should sound like a real business.

⸻

32. Design System

Use a consistent design system.

Define:

* Typography scale
* Spacing scale
* Colors
* Buttons
* Links
* Cards
* Forms
* Containers
* Breakpoints
* Border radius
* Shadows

Avoid arbitrary values throughout the project.

Prefer reusable design tokens.

⸻

33. Visual Quality

The website must not look like a generic AI-generated template.

Avoid excessive:

* Gradients
* Glassmorphism
* Giant text
* Decorative blobs
* Random animations
* Unnecessary cards
* Stock-looking illustrations

Design should reflect the business.

For example:

* Accountant → trustworthy, clear, professional
* Mechanic → practical, strong, service-focused
* Barber → visual, premium, personality-driven
* Architect → editorial, minimal, visual
* Hotel → immersive, photographic, premium

⸻

34. Navigation

Navigation must be:

* Clear
* Consistent
* Responsive
* Keyboard accessible

Mobile navigation must be tested independently.

Do not create unnecessarily deep navigation structures.

Important pages should be reachable within a reasonable number of clicks.

⸻

35. Footer

The footer should contain appropriate:

* Business name
* Contact information
* Navigation
* Address where appropriate
* Legal links where required
* Social links where relevant

Do not overload the footer.

⸻

36. Error Handling

Provide appropriate:

* 404 page
* Form error states
* Form success states
* Broken image fallbacks where appropriate

The 404 page should help users navigate back to useful content.

⸻

37. Development Workflow

Use the following workflow.

CLIENT INPUT
    ↓
REQUIREMENTS
    ↓
CONTENT / INFORMATION VALIDATION
    ↓
WEBSITE STYLE DIRECTION
    ↓
ASSET INVENTORY / ASSET PLAN
    ↓
USER APPROVAL OF STYLE AND ASSETS
    ↓
SITE ARCHITECTURE
    ↓
DESIGN SYSTEM
    ↓
IMPLEMENTATION
    ↓
SEO IMPLEMENTATION
    ↓
ACCESSIBILITY
    ↓
PERFORMANCE OPTIMIZATION
    ↓
AUTOMATED BUILD
    ↓
AUTOMATED QA
    ↓
QA AGENT
    ↓
FIX FAILURES
    ↓
RE-RUN QA
    ↓
HUMAN REVIEW
    ↓
PRODUCTION BUILD
    ↓
DEPLOY
    ↓
POST-DEPLOY QA

⸻

38. Requirements Before Implementation

Before writing code, identify:

* Business name
* Business type
* Main services
* Target audience
* Location
* Service area
* Contact details
* Primary CTA
* Secondary CTA
* Existing branding
* Logo
* Images
* Social profiles
* Existing website
* Competitors
* Important pages
* Required languages, confirming whether English should be supported in addition to the default Greek locale
* Legal/privacy requirements
* Required integrations
* Approved website style direction
* Available assets and missing assets
* Approved asset sourcing or creation plan

If critical information is missing, do not invent it.

38.1 Style and Asset Approval Gate

Do not begin production implementation until the website style direction and asset plan have been discussed with and approved by the user.

The agent should help the user reach a clear decision rather than waiting for the user to provide a complete design specification unprompted.

Before implementation, establish the website style direction, including where applicable:

* Desired brand qualities and overall mood
* Relevant website or visual references
* Visual approaches to avoid
* Color palette
* Typography direction
* Layout and spacing character
* Photography, illustration, or graphic style
* Icon style
* Shape, border, radius, and shadow treatment
* Motion direction, if motion is genuinely useful
* The intended balance between trust, personality, clarity, and conversion

Before implementation, complete an asset inventory and plan covering, where applicable:

* Logo files and usable variants
* Brand guidelines
* Photography
* Illustrations
* Icons
* Fonts and font licenses
* Favicon and app icons
* Social sharing image
* Documents, certifications, or partner marks intended for display
* Existing assets that need optimization or conversion
* Missing assets that must be supplied, sourced, commissioned, or generated

For every missing asset, agree with the user whether it will be:

* Supplied by the user
* Sourced from an appropriate licensed source
* Created with ImageGen when original raster imagery, mockups, illustrations, textures, or photo-like assets are appropriate
* Replaced with a typography-, layout-, or CSS-based solution
* Deferred with an explicitly approved placeholder

Do not silently use random stock imagery, fabricate brand assets, or generate an unapproved visual identity.

Confirm that asset usage rights and licensing are appropriate where relevant. Do not claim that an asset is licensed unless that has been verified.

Exploratory moodboards, style tiles, mockups, asset concepts, and lightweight prototypes may be created during this pre-implementation phase when they help the user choose a direction. They are decision artifacts, not approval to begin the full production implementation.

Use ImageGen during the pre-implementation phase when an AI-generated bitmap would materially help the user evaluate the visual direction or fill an approved asset need.

Appropriate ImageGen uses include:

* Website and UI mockups for visual-direction exploration
* Hero-image concepts
* Original photographic or illustrative assets
* Textures, backgrounds, and decorative raster artwork
* Variants derived from user-provided visual references
* Editing approved raster assets when requested

Do not use ImageGen when the result is better created as semantic HTML, CSS, an existing icon component, or an editable repository-native SVG/vector asset.

Do not use an ImageGen mockup as the production website itself. Reproduce the approved direction with maintainable Astro components and Tailwind CSS.

Before placing generated imagery into the production website, show or describe the proposed output to the user, obtain approval, inspect it for visual defects and invented text or details, optimize it for the intended placement, and save the approved final asset inside the project.

Do not generate or replace a logo, established brand mark, or identity system without explicit user approval.

Record the approved direction concisely so implementation remains visually consistent.

⸻

39. Build Phase

During implementation:

1. Build reusable components.
2. Implement semantic HTML.
3. Implement responsive design.
4. Implement content.
5. Implement SEO metadata.
6. Implement structured data.
7. Implement sitemap.
8. Implement robots.txt.
9. Optimize images.
10. Minimize JavaScript.
11. Implement accessibility.
12. Run the production build.

Do not consider the project complete merely because the development server works.

⸻

40. Automated QA

Automated QA is mandatory.

The QA pipeline should check, where tooling permits:

Build

* Production build succeeds
* No build errors
* No unresolved imports
* No TypeScript errors
* No broken asset references

Links

* No broken internal links
* No broken local anchors
* No malformed URLs

SEO

* Title exists
* Title is unique
* Meta description exists
* Meta description is unique
* Canonical exists
* Canonical is valid
* Sitemap exists
* Sitemap is valid
* Robots.txt exists
* Robots.txt is valid
* Indexable pages are represented correctly
* H1 exists
* H1 count is appropriate
* Heading hierarchy is valid
* Open Graph metadata exists
* JSON-LD is valid where implemented

Images

* Images load
* Images have appropriate alt text
* Images are optimized
* No unnecessarily huge assets
* Width/height is present where appropriate

Accessibility

* Basic accessibility audit
* Form labels
* Button names
* Link names
* Heading structure
* Contrast where automated tools can detect it
* Keyboard-related checks where possible

Performance

Run Lighthouse or an equivalent automated performance audit.

Check:

* Performance
* Accessibility
* Best Practices
* SEO

Pay particular attention to:

* LCP
* CLS
* INP
* JavaScript size
* image size
* unused resources

⸻

41. QA Agent / QA Script

The implementation agent must NOT be the sole authority deciding whether the website passes QA.

Use a separate automated QA process.

Recommended architecture:

Builder Agent
     ↓
Production Build
     ↓
Automated QA Scripts
     ↓
Lighthouse
     ↓
HTML / SEO Checks
     ↓
Broken Link Checker
     ↓
Accessibility Checker
     ↓
QA Agent
     ↓
PASS / FAIL

The QA Agent receives:

* Build output
* Automated test results
* Lighthouse results
* SEO audit results
* Accessibility results
* Link checker results
* Relevant source files
* Site configuration

The QA Agent must identify:

* Critical failures
* SEO failures
* Accessibility failures
* Performance failures
* Broken functionality
* Missing metadata
* Content problems
* Fabricated information
* Design inconsistencies

The QA Agent must NOT modify production code automatically unless explicitly instructed.

Its default responsibility is:

INSPECT → REPORT → CLASSIFY → PASS/FAIL

⸻

42. QA Severity

Classify issues as:

CRITICAL

Must be fixed before deployment.

Examples:

* Production build fails
* Site does not load
* Major navigation broken
* Forms completely broken
* Incorrect canonical causing indexing problems
* Important pages blocked by robots.txt
* Missing critical business contact information
* Exposed secrets
* Broken mobile layout
* Major accessibility failure

HIGH

Should be fixed before deployment.

Examples:

* Missing titles
* Duplicate titles
* Missing meta descriptions
* Broken internal links
* Missing sitemap
* Invalid structured data
* Major performance problems
* Important images missing
* Incorrect business information

MEDIUM

Fix before final client delivery where practical.

Examples:

* Weak alt text
* Minor spacing problems
* Minor heading issues
* Non-critical accessibility improvements
* Slight performance inefficiencies

LOW

Can be deferred.

Examples:

* Minor visual inconsistencies
* Small copy improvements
* Non-critical refactoring

⸻

43. QA Pass Criteria

A project may pass automated QA only if:

* Production build succeeds
* No CRITICAL issues exist
* No HIGH issues remain
* SEO foundation is complete
* Sitemap is valid
* Robots.txt is valid
* Canonicals are valid
* Metadata is present
* No important broken links exist
* Mobile layout works
* Forms work
* No secrets are exposed
* Performance is acceptable
* Accessibility is acceptable

The QA Agent must explicitly report:

PASS

or:

FAIL

with reasons.

⸻

44. Iterative QA Loop

If QA fails:

QA FAIL
   ↓
Read failures
   ↓
Fix implementation
   ↓
Build
   ↓
Run automated QA again
   ↓
QA Agent reviews again

Do not deploy while CRITICAL or HIGH issues remain.

Do not assume a fix worked without rerunning the relevant test.

⸻

45. Human Review

Automated QA does not replace human review.

Before production deployment, manually inspect:

* Homepage
* Navigation
* Mobile navigation
* Main CTA
* Contact form
* Phone links
* Email links
* Important service pages
* Images
* Footer
* 404 page
* Mobile layout
* Desktop layout

Also verify:

* Business name
* Phone
* Email
* Address
* Services
* Opening hours
* Testimonials
* Claims
* Legal links

Human review is mandatory before final client delivery.

⸻

46. Pre-Deployment Checklist

Before deployment:

* Production build succeeds
* Automated QA passes
* QA Agent returns PASS
* No critical issues
* No high issues
* Sitemap generated
* Robots.txt generated
* Canonicals verified
* Titles verified
* Meta descriptions verified
* Open Graph verified
* JSON-LD verified
* Internal links verified
* Images optimized
* Alt text verified
* Mobile layout verified
* Desktop layout verified
* Forms tested
* Phone links tested
* Email links tested
* Analytics verified if applicable
* Privacy/cookie requirements reviewed
* No secrets committed
* 404 page tested
* Domain configuration verified

⸻

47. Deployment

Deploy only after:

BUILD = PASS
AUTOMATED QA = PASS
QA AGENT = PASS
HUMAN REVIEW = PASS

Production deployment should use the project’s standard deployment platform.

After deployment, run post-deployment QA.

⸻

48. Post-Deployment QA

Verify the actual production URL.

Check:

* HTTPS
* Domain
* Redirects
* Homepage
* Main pages
* Mobile layout
* Forms
* Phone links
* Email links
* Sitemap
* Robots.txt
* Canonicals
* Open Graph
* Structured data
* No production console errors
* No mixed content
* No broken assets

Do not assume local/staging success means production success.

⸻

49. Post-Deployment SEO

Where applicable:

* Submit sitemap to Google Search Console
* Verify indexing configuration
* Verify canonical URLs
* Verify structured data
* Verify business information
* Verify Google Business Profile links
* Verify analytics

Do not claim ranking results immediately after launch.

⸻

50. Client Handover

The client should receive:

* Production URL
* Domain information
* Contact information
* Basic maintenance instructions
* CMS instructions if a CMS exists
* Analytics information where applicable
* Important credentials through a secure method

Never send passwords in plain text in source code or public repositories.

⸻

51. Maintenance

Keep maintenance simple.

For static sites:

* Monitor uptime
* Monitor forms
* Update dependencies when necessary
* Review security
* Update content when requested
* Monitor broken links
* Monitor domain/SSL
* Monitor analytics where applicable

Do not perform unnecessary updates merely for the sake of updating.

⸻

52. Reusability

This project should be reusable as a template.

When implementing features, consider:

Can this become a reusable component or pattern for the next client?

Prefer reusable:

* Layouts
* Components
* SEO utilities
* Metadata helpers
* Schema generators
* CTA sections
* Form components
* Navigation
* Footer
* Design tokens
* Content structures

Do not duplicate logic unnecessarily.

⸻

53. Client-Specific Data

Separate business-specific data from reusable components where practical.

Prefer structured data/configuration such as:

business.name
business.phone
business.email
business.address
business.services
business.socials
business.hours
business.location

This makes future client cloning faster and safer.

⸻

54. No Overengineering

This is a €500–€1,000 class business website unless the project explicitly requires more.

Do not introduce architecture intended for a large SaaS application.

Avoid unnecessary:

* abstractions
* libraries
* dependencies
* APIs
* databases
* state management
* design systems larger than the project requires

The simplest correct implementation is preferred.

⸻

55. Final Definition of Done

A website is DONE only when:

Business

* Business information is accurate
* Services are accurate
* Contact information is accurate
* No fabricated claims exist
* Primary CTA is clear

Design

* Design is visually coherent
* Branding is consistent
* Typography is consistent
* Spacing is consistent
* Mobile design is polished
* Desktop design is polished

Technical

* Production build succeeds
* No console errors
* No broken assets
* No broken internal links
* HTTPS works
* Domain works

SEO

* Titles complete
* Meta descriptions complete
* H1/H2 hierarchy correct
* URLs clean
* Canonicals correct
* Sitemap valid
* Robots.txt valid
* Open Graph complete
* Structured data valid
* Internal linking implemented
* Alt text implemented

Local SEO

* NAP consistent
* Location/service area accurate
* LocalBusiness schema where appropriate
* No doorway pages
* No keyword stuffing

Performance

* Images optimized
* JavaScript minimized
* CSS optimized
* Fonts optimized
* LCP optimized
* CLS minimized
* INP optimized
* Mobile performance tested

Accessibility

* Semantic HTML
* Keyboard navigation
* Focus states
* Form labels
* Accessible buttons
* Accessible links
* Meaningful alt text
* Logical heading hierarchy
* Adequate contrast

QA

* Automated QA passed
* Lighthouse completed
* Link checker passed
* SEO checker passed
* Accessibility checker passed
* QA Agent returned PASS
* Human review completed
* Production QA completed

Only after all applicable requirements are satisfied should the project be considered production-ready.
