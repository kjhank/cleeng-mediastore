---
title: MSSDK Accessibility review
---

# Accessibility review of MSSDK components

**TODO:**
- table of contents


## General comments
- **Use the platform**. The browser already gives us _so many_ features out of the box, there's no need to reinvent the wheel. Use semantic code. **Keep up with the spec** (hey, have you heard of the `menu` element? Functionally it's 100% the same as a regular `ul` but with built-in accessibility as a navigation menu).
- Create a [`visually-hidden` utility CSS class](https://www.tpgi.com/the-anatomy-of-visually-hidden/) for labeling icons, button icons, and other items without verbal labels.
- [Avoid using the `title` attribute](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute) on your elements, at least as the *only* way of labeling them. Only use it if the same text is provided somewhere else and you can reference it.
- Don't overuse ARIA attributes. Initially it might seem like every HTML element needs some ARIA roles, while in fact their misuse might cause more issues than the lack of them. If you're not sure if your component is semantic enough, consult your coworkers or the MDN/WHATWG (or maybe even w3schools, I hear they no longer suck).

## Components:

### Plan details

- **Problem**: the button next to the _your coupon_ input (`.msd__coupon-input__close`) isn't labeled.

  **Proposed solutions**:
  - Add a label inside the button  with the `visually-hidden` class.
  - Add an `aria-label` attribute and place the label as its value

**TODO: SubscriptionIcon as figure>figcaption**

- **Problem**: Not an accessibility issue *per se*, but there are some props passed to styled-components that shouldn't be visible in the DOM. While they're not a huge issue, they do pollute the DOM, which in some cases might trigger issues with screen readers. One such case is the `color` prop on the `msd_subscription-card__icon` div in the `SubscriptionIcon` component.

  **Proposed solutions**:
  - Replace such props with styled-components' transient props (`s/color/$color/`) - in such case they are still passed to the styled.div component, but they don't show up in the DOM

### Consents
- **Problem**: redundant roles instead of simple markup - needlessly faking features that already exist in the browser
  **Proposed solutions**:
  - use a regular `label>input[type=checkbox]` layout with `appearance: none` set on the input and get rid of the current overengineered solution

- **Problem**: `aria-label` attribute contains an HTML string
  **Proposed solutions**:
  - don't try to autogenerate labels, or at least try to strip the HTML out of them 😉
